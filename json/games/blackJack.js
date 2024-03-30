let deck1 = [
    { name: 'ace_of_hearts', value: 1 },
    { name: '2_of_hearts', value: 2 },
    { name: '3_of_hearts', value: 3 },
    { name: '4_of_hearts', value: 4 },
    { name: '5_of_hearts', value: 5 },
    { name: '6_of_hearts', value: 6 },
    { name: '7_of_hearts', value: 7 },
    { name: '8_of_hearts', value: 8 },
    { name: '9_of_hearts', value: 9 },
    { name: '10_of_hearts', value: 10 },
    { name: 'jack_of_hearts', value: 10 },
    { name: 'queen_of_hearts', value: 10 },
    { name: 'king_of_hearts', value: 10 },

    { name: 'ace_of_diamonds', value: 1 },
    { name: '2_of_diamonds', value: 2 },
    { name: '3_of_diamonds', value: 3 },
    { name: '4_of_diamonds', value: 4 },
    { name: '5_of_diamonds', value: 5 },
    { name: '6_of_diamonds', value: 6 },
    { name: '7_of_diamonds', value: 7 },
    { name: '8_of_diamonds', value: 8 },
    { name: '9_of_diamonds', value: 9 },
    { name: '10_of_diamonds', value: 10 },
    { name: 'jack_of_diamonds', value: 10 },
    { name: 'queen_of_diamonds', value: 10 },
    { name: 'king_of_diamonds', value: 10 },

    { name: 'ace_of_clubs', value: 1 },
    { name: '2_of_clubs', value: 2 },
    { name: '3_of_clubs', value: 3 },
    { name: '4_of_clubs', value: 4 },
    { name: '5_of_clubs', value: 5 },
    { name: '6_of_clubs', value: 6 },
    { name: '7_of_clubs', value: 7 },
    { name: '8_of_clubs', value: 8 },
    { name: '9_of_clubs', value: 9 },
    { name: '10_of_clubs', value: 10 },
    { name: 'jack_of_clubs', value: 10 },
    { name: 'queen_of_clubs', value: 10 },
    { name: 'king_of_clubs', value: 10 },

    { name: 'ace_of_spades', value: 1 },
    { name: '2_of_spades', value: 2 },
    { name: '3_of_spades', value: 3 },
    { name: '4_of_spades', value: 4 },
    { name: '5_of_spades', value: 5 },
    { name: '6_of_spades', value: 6 },
    { name: '7_of_spades', value: 7 },
    { name: '8_of_spades', value: 8 },
    { name: '9_of_spades', value: 9 },
    { name: '10_of_spades', value: 10 },
    { name: 'jack_of_spades', value: 10 },
    { name: 'queen_of_spades', value: 10 },
    { name: 'king_of_spades', value: 10 }
];

class Card {
    constructor(){
        if (deck1.length>0){
            let index = Math.floor(Math.random*deck1.length)
            let newCard = deck1.splice(index, 1)[0]
            this.name = newCard.name
            this.value = newCard.value
            this.imgPath = "https://upload.wikimedia.org/wikipedia/commons/2/26/English_pattern_"+newCard.name+".svg"
            console.log("deck : "+deck1.length);
            
        } else {this.resetDeck}
    }
    resetDeck(){
        deck1 = [
            { name: 'ace_of_hearts', value: 1 },
            { name: '2_of_hearts', value: 2 },
            { name: '3_of_hearts', value: 3 },
            { name: '4_of_hearts', value: 4 },
            { name: '5_of_hearts', value: 5 },
            { name: '6_of_hearts', value: 6 },
            { name: '7_of_hearts', value: 7 },
            { name: '8_of_hearts', value: 8 },
            { name: '9_of_hearts', value: 9 },
            { name: '10_of_hearts', value: 10 },
            { name: 'jack_of_hearts', value: 10 },
            { name: 'queen_of_hearts', value: 10 },
            { name: 'king_of_hearts', value: 10 },
        
            { name: 'ace_of_diamonds', value: 1 },
            { name: '2_of_diamonds', value: 2 },
            { name: '3_of_diamonds', value: 3 },
            { name: '4_of_diamonds', value: 4 },
            { name: '5_of_diamonds', value: 5 },
            { name: '6_of_diamonds', value: 6 },
            { name: '7_of_diamonds', value: 7 },
            { name: '8_of_diamonds', value: 8 },
            { name: '9_of_diamonds', value: 9 },
            { name: '10_of_diamonds', value: 10 },
            { name: 'jack_of_diamonds', value: 10 },
            { name: 'queen_of_diamonds', value: 10 },
            { name: 'king_of_diamonds', value: 10 },
        
            { name: 'ace_of_clubs', value: 1 },
            { name: '2_of_clubs', value: 2 },
            { name: '3_of_clubs', value: 3 },
            { name: '4_of_clubs', value: 4 },
            { name: '5_of_clubs', value: 5 },
            { name: '6_of_clubs', value: 6 },
            { name: '7_of_clubs', value: 7 },
            { name: '8_of_clubs', value: 8 },
            { name: '9_of_clubs', value: 9 },
            { name: '10_of_clubs', value: 10 },
            { name: 'jack_of_clubs', value: 10 },
            { name: 'queen_of_clubs', value: 10 },
            { name: 'king_of_clubs', value: 10 },
        
            { name: 'ace_of_spades', value: 1 },
            { name: '2_of_spades', value: 2 },
            { name: '3_of_spades', value: 3 },
            { name: '4_of_spades', value: 4 },
            { name: '5_of_spades', value: 5 },
            { name: '6_of_spades', value: 6 },
            { name: '7_of_spades', value: 7 },
            { name: '8_of_spades', value: 8 },
            { name: '9_of_spades', value: 9 },
            { name: '10_of_spades', value: 10 },
            { name: 'jack_of_spades', value: 10 },
            { name: 'queen_of_spades', value: 10 },
            { name: 'king_of_spades', value: 10 }
        ];
    }
}
class Player {
    hand=[]
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
        this.players = []
        this.giveNewCard(this)
        this.giveNewCard(this)
    }
    startGame() {

    }
    addPlayer(){
        let player = new Human
        this.giveNewCard(player)
        this.giveNewCard(player)
        console.log(player)
        this.players.push(player)
    }
    giveNewCard(player){
        player.hand.push(new Card)
    }
}

let dealer=new Dealer
console.log(dealer)


let addPlayerBTN= document.querySelector('#addPlayer')
if (addPlayerBTN!=null){addPlayerBTN.addEventListener("click", dealer.addPlayer.bind(dealer))}