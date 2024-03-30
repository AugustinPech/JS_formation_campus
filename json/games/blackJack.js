let deck1 = [
    { name: 'hearts_ace', value: 1 },
    { name: 'hearts_2', value: 2 },
    { name: 'hearts_3', value: 3 },
    { name: 'hearts_4', value: 4 },
    { name: 'hearts_5', value: 5 },
    { name: 'hearts_6', value: 6 },
    { name: 'hearts_7', value: 7 },
    { name: 'hearts_8', value: 8 },
    { name: 'hearts_9', value: 9 },
    { name: 'hearts_10', value: 10 },
    { name: 'hearts_jack', value: 10 },
    { name: 'hearts_queen', value: 10 },
    { name: 'hearts_king', value: 10 },

    { name: 'diamonds_ace', value: 1 },
    { name: 'diamonds_2', value: 2 },
    { name: 'diamonds_3', value: 3 },
    { name: 'diamonds_4', value: 4 },
    { name: 'diamonds_5', value: 5 },
    { name: 'diamonds_6', value: 6 },
    { name: 'diamonds_7', value: 7 },
    { name: 'diamonds_8', value: 8 },
    { name: 'diamonds_9', value: 9 },
    { name: 'diamonds_10', value: 10 },
    { name: 'diamonds_jack', value: 10 },
    { name: 'diamonds_queen', value: 10 },
    { name: 'diamonds_king', value: 10 },

    { name: 'clubs_ace', value: 1 },
    { name: 'clubs_2', value: 2 },
    { name: 'clubs_3', value: 3 },
    { name: 'clubs_4', value: 4 },
    { name: 'clubs_5', value: 5 },
    { name: 'clubs_6', value: 6 },
    { name: 'clubs_7', value: 7 },
    { name: 'clubs_8', value: 8 },
    { name: 'clubs_9', value: 9 },
    { name: 'clubs_10', value: 10 },
    { name: 'clubs_jack', value: 10 },
    { name: 'clubs_queen', value: 10 },
    { name: 'clubs_king', value: 10 },

    { name: 'spades_ace', value: 1 },
    { name: 'spades_2', value: 2 },
    { name: 'spades_3', value: 3 },
    { name: 'spades_4', value: 4 },
    { name: 'spades_5', value: 5 },
    { name: 'spades_6', value: 6 },
    { name: 'spades_7', value: 7 },
    { name: 'spades_8', value: 8 },
    { name: 'spades_9', value: 9 },
    { name: 'spades_10', value: 10 },
    { name: 'spades_jack', value: 10 },
    { name: 'spades_queen', value: 10 },
    { name: 'spades_king', value: 10 }
];

let addPlayerBTN= document.querySelector('#addPlayer')
let startGameBTN= document.querySelector('#startGame')
let nextRoundBTN= document.querySelector('#nextRound')
let board = document.querySelector('#board')
function resetBlock(block) {
    while (block.firstChild!=null){
        block.removeChild(block.firstChild)
    }
}
function newChildElement(parent, childType, idName){
    let child = document.createElement(childType)
    child.setAttribute('id',idName)
    parent.appendChild(child)
}
class Card {
    constructor(){
        if (deck1.length>0){
            let index = Math.floor(Math.random()*deck1.length)
            let newCard = deck1.splice(index, 1)[0]
            this.name = newCard.name
            this.value = newCard.value
            this.imgPath = "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/"+newCard.name+".svg"
            console.log("deck : "+deck1.length);
        } else {
            this.resetDeck()
            return new Card
        }
    }
    resetDeck(){
        deck1 = [
            { name: 'hearts_ace', value: 1 },
            { name: 'hearts_2', value: 2 },
            { name: 'hearts_3', value: 3 },
            { name: 'hearts_4', value: 4 },
            { name: 'hearts_5', value: 5 },
            { name: 'hearts_6', value: 6 },
            { name: 'hearts_7', value: 7 },
            { name: 'hearts_8', value: 8 },
            { name: 'hearts_9', value: 9 },
            { name: 'hearts_10', value: 10 },
            { name: 'hearts_jack', value: 10 },
            { name: 'hearts_queen', value: 10 },
            { name: 'hearts_king', value: 10 },
        
            { name: 'diamonds_ace', value: 1 },
            { name: 'diamonds_2', value: 2 },
            { name: 'diamonds_3', value: 3 },
            { name: 'diamonds_4', value: 4 },
            { name: 'diamonds_5', value: 5 },
            { name: 'diamonds_6', value: 6 },
            { name: 'diamonds_7', value: 7 },
            { name: 'diamonds_8', value: 8 },
            { name: 'diamonds_9', value: 9 },
            { name: 'diamonds_10', value: 10 },
            { name: 'diamonds_jack', value: 10 },
            { name: 'diamonds_queen', value: 10 },
            { name: 'diamonds_king', value: 10 },
        
            { name: 'clubs_ace', value: 1 },
            { name: 'clubs_2', value: 2 },
            { name: 'clubs_3', value: 3 },
            { name: 'clubs_4', value: 4 },
            { name: 'clubs_5', value: 5 },
            { name: 'clubs_6', value: 6 },
            { name: 'clubs_7', value: 7 },
            { name: 'clubs_8', value: 8 },
            { name: 'clubs_9', value: 9 },
            { name: 'clubs_10', value: 10 },
            { name: 'clubs_jack', value: 10 },
            { name: 'clubs_queen', value: 10 },
            { name: 'clubs_king', value: 10 },
        
            { name: 'spades_ace', value: 1 },
            { name: 'spades_2', value: 2 },
            { name: 'spades_3', value: 3 },
            { name: 'spades_4', value: 4 },
            { name: 'spades_5', value: 5 },
            { name: 'spades_6', value: 6 },
            { name: 'spades_7', value: 7 },
            { name: 'spades_8', value: 8 },
            { name: 'spades_9', value: 9 },
            { name: 'spades_10', value: 10 },
            { name: 'spades_jack', value: 10 },
            { name: 'spades_queen', value: 10 },
            { name: 'spades_king', value: 10 }
        ];
    }
}
class Player {
    hand=[]
    name
    constructor(){
    }
    beOnBoard(){
        newChildElement(board, "fieldset", this.name+"Zone")
        let playerZone=document.querySelector("#"+this.name+"Zone")
        playerZone.className="playerZone"
        newChildElement(playerZone,"legend","")
        playerZone.lastChild.innerText= this.name
        newChildElement(playerZone,"button",this.name+"StopsDrawing")
        playerZone.lastChild.innerText= "Stop"
        playerZone.lastChild.className= "stopsDrawing"
        playerZone.lastChild.addEventListener("click", () => this.isDrawing=false)
    }
    showCardsInHand(){
        let playerZone = document.querySelector('#'+this.name+'Zone')
            let handDiv = document.createElement("div")
            playerZone.prepend(handDiv)
            handDiv.className = this.name+"Hand"
            this.hand.forEach(card => {
                let cardImg = document.createElement("img")
                cardImg.className="cardImg"
                cardImg.src=card.imgPath
                handDiv.appendChild(cardImg)})
        }
        updateShowCardsInHand(){
            let handDiv = document.querySelector("."+this.name+"Hand")
            resetBlock(handDiv)
            this.hand.forEach(card => {
                let cardImg = document.createElement("img")
                cardImg.className="cardImg"
                cardImg.src=card.imgPath
                handDiv.appendChild(cardImg)})
        }
    }


class Human extends Player {
    constructor(){
        super()
        this.name=prompt("what is your name ?")
    }
}
class Dealer extends Player {
    constructor (){
        super()
        this.name="dealer"
        this.players = [this]
        this.gameRunning=false
    }
    startGame() {
        this.players.forEach(
            (player)=> 
            {this.giveNewCard(player)
            this.giveNewCard(player)
            player.beOnBoard()
            player.showCardsInHand()
            player.isDrawing=true}
        )
        this.gameRunning=true
        startGameBTN.style.display="none"
        addPlayerBTN.style.display="none"
    }
    addPlayer(){
        let player = new Human
        this.players.push(player)
    }
    giveNewCard(player){
        player.hand.push(new Card)
    }
    deal() {
        this.players.forEach(player => {
            if(player.isDrawing === true) {
                player.hand.push(new Card)
                player.updateShowCardsInHand()
            }
        })
    }
    
}

let dealer=new Dealer
console.log(dealer)
console.log (nextRoundBTN)
if (addPlayerBTN!=null){addPlayerBTN.addEventListener("click", dealer.addPlayer.bind(dealer))}
if (startGameBTN!=null){startGameBTN.addEventListener("click", () => dealer.startGame())}
if (nextRoundBTN!=null){nextRoundBTN.addEventListener("click", () => dealer.deal())}