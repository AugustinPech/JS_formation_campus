function gameOver(){
    clearInterval(interval)
    const gameOverAlert= board.appendChild(document.createElement("div"))
    gameOverAlert.className="gameOverAlertContainer"
    gameOverAlert.appendChild(document.createElement("div"))
    gameOverAlert.firstChild.className="gameOverAlert"
    gameOverAlert.firstChild.innerText="GAME OVER"
    setTimeout(
        () => {
            gameOverAlert.remove()
            document.location.reload();
        }, 1000)
}
const canvas = document.getElementById("myCanvas");
const board = document.getElementById("board");
const ctx = canvas.getContext("2d");
const runBTN = document.getElementById("startGame");
const newGameBTN = document.getElementById("newGame");
/**
 * ball has attributes
*/
let ballGroup = {
    balls: [],
    drawBalls() {
        this.moveBalls()
        this.balls.forEach(ball => ball.drawBall(ball))
    },
    moveBalls(){
        this.balls.forEach(ball => {
            ball.moveBall()
        })
    },
    ballsOutHandler() {
        this.balls.forEach(ball => {
            ball.ballOut()
        })
    },
    detroyBall(ball){
        this.balls.splice(this.balls.indexOf(ball),1)
        if (this.balls.length === 0) {
            gameOver()
        }
    }
}
class Ball {
    constructor(ballRadius, x, y, dx, dy) {
        this.radius = ballRadius
        this.x = x
        this.y = y
        this.dx = Math.random(dx)*2 -2
        this.dy = Math.random(dy)*2 -2
        ballGroup.balls.push(this)
    }
    brickBreakEvent(collisionCoordinates){
        let newBall= new Ball(10, collisionCoordinates.x, collisionCoordinates.y , 2, -2)
    }
    drawBall(ball) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    moveBall () {
        this.x += this.dx;
        this.y += this.dy;
    }
    ballOut() {
        if (this.x + this.dx > canvas.width - this.radius ||this.x+ this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > canvas.height - this.radius) {
            if (this.x + this.radius > paddleX && this.x < paddleX + paddleWidth + this.radius) {
                this.dy = -this.dy;
            } else {
                ballGroup.detroyBall(this)
            }
        }
    }
}
const ball = new Ball(10, canvas.width / 2, canvas.height - 30, 2, -2)


class Brick {
    constructor(nbLifePoints) {
        this.brickWidth =  75
        this.brickHeight =  20
        this.x
        this.y
        this.status = nbLifePoints
    }
}
let brickGroup = {
    bricks: [],
    /**
     * 
     * @param {number} number of bricks you want
    */
    createBrickGroup(brickRowCount,brickColumnCount){
        this.brickPadding =  10
        this.brickOffsetTop =  30
        this.brickOffsetLeft =  50
        for (let i=0; i<=brickColumnCount; i++){
            this.bricks.push(this.createRow(brickRowCount))
        }
    },
    createRow(brickRowCount) {
        let row = []
        for (let i = 0 ; i<brickRowCount; i++) {
            row.push (new Brick(1))
        }
        return row
    },
    drawBricks() {
        const brickRowCount = this.bricks[0].length
        const  brickColumnCount = this.bricks.length
        for (let c = 0; c < brickColumnCount-1; c++) {
          for (let r = 0; r < brickRowCount; r++) {
            if (this.bricks[c][r].status === 1) {
                const brickX = c * (this.bricks[c][r].brickWidth + this.brickPadding) + this.brickOffsetLeft;
                const brickY = r * (this.bricks[c][r].brickHeight + this.brickPadding) + this.brickOffsetTop;
                this.bricks[c][r].x = brickX;
                this.bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, this.bricks[c][r].brickWidth, this.bricks[c][r].brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
          }
        }
    },
    collisionDetection(brickRowCount,brickColumnCount) {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const b = this.bricks[c][r];
                if (b.status === 1) {
                    ballGroup.balls.forEach(
                        ball => {
                            if (
                                ball.x > b.x &&
                                ball.x < b.x + this.bricks[c][r].brickWidth &&
                                ball.y > b.y &&
                                ball.y < b.y + this.bricks[c][r].brickHeight
                            ) {
                                ball.dy = -ball.dy;
                                b.status += -1;
                                let collisionCoordinates = {x: ball.x, y: ball.y}
                                ballGroup.balls[0].brickBreakEvent(collisionCoordinates)
                            }
                        }
                    )
                }
            }
        }
    }
}



/** 
 * paddle has attributes
*/
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
/**
 * listen to commands
*/
let rightPressed = false;
let leftPressed = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}
function startGame() {
    const interval = setInterval(draw, 10);
    
    function resetCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawPaddle() {
        if (rightPressed) {
            paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
        } else if (leftPressed) {
            paddleX = Math.max(paddleX - 7, 0);
        }
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    function didPlayerWin(){
        let statusSum = true
        statusSum = brickGroup.bricks.flat().forEach( brick => statusSum= statusSum && (brick.status === 0))
        
        let winCondition =statusSum

        // console.log(winCondition, brickGroup.bricks.flat())
        if (winCondition) {
            clearInterval(interval)
            const winAlert= board.appendChild(document.createElement("div"))
            winAlert.className="winAlertContainer"
            winAlert.appendChild(document.createElement("div"))
            winAlert.firstChild.className="winAlert"
            winAlert.firstChild.innerText="YOU WIN, CONGRATULATIONS!"
            setTimeout(
                () => {
                    winAlert.remove()
                    document.location.reload();
                }, 1000)
        }
    }       
    function draw() {
        ballGroup.ballsOutHandler()
        resetCanvas()
        brickGroup.drawBricks()
        brickGroup.collisionDetection(3,6)
        didPlayerWin()
        ballGroup.drawBalls()
        drawPaddle()
    }
}


runBTN.addEventListener("click", function () {
        brickGroup.createBrickGroup(3,6)
    startGame();

    });