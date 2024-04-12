class Brick {
    constructor() {
        this.brickWidth =  75
        this.brickHeight =  20
        this.x
        this.y
        this.status = 1
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
        this.drawBricks(brickRowCount,brickColumnCount)
    },
    createRow(brickRowCount) {
        let row = []
        for (let i = 0 ; i<brickRowCount; i++) {
            row.push (new Brick)
        }
        return row
    },
    drawBricks(brickRowCount,brickColumnCount) {
        for (let c = 0; c < brickColumnCount; c++) {
          for (let r = 0; r < brickRowCount; r++) {
            if (this.bricks[c][r].status === 1) {
                const brickX = c * (this.bricks[c][r].brickWidth + this.brickPadding) + this.brickOffsetLeft;
                const brickY = r * (this.bricks[c][r].brickHeight + this.brickPadding) + this.brickOffsetTop;
                this.bricks[c][r].x = brickX;
                this.bricks[c][r].y = brickY;
                console.log(brickX,brickY)
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
              if (
                x > b.x &&
                x < b.x + this.bricks[c][r].brickWidth &&
                y > b.y &&
                y < b.y + this.bricks[c][r].brickHeight
              ) {
                dy = -dy;
                b.status = 0;
              }
            }
          }
        }
      }
}

const canvas = document.getElementById("myCanvas");
const board = document.getElementById("board");
const ctx = canvas.getContext("2d");
const runBTN = document.getElementById("startGame");
const newGameBTN = document.getElementById("newGame");


/**
 * ball has attributes
*/
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

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
        function resetCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
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
        
        
        function draw() {
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
        if (y + dy < ballRadius) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
                gameOver();
            }
        }
        resetCanvas()
        brickGroup.createBrickGroup(3,6)
        brickGroup.collisionDetection(3,6)
        drawBall();
        drawPaddle();
        x += dx;
        y += dy;
    }
}


runBTN.addEventListener("click", function () {
    startGame();
        this.disabled = true;
    });