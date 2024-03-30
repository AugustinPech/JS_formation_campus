class Player {

}
class Human extends Player {
    constructor(){
        this.name=prompt("what is your name ?")
    }
}
class Dealer extends Player {
    players = []
    startGame() {

    }
    addPlayer(){
        let player = new Player
        this.players.push(player)
    }
}
let dealer=new Dealer

let addPlayerBTN= document.querySelector('#addPlayer')
if (addPlayerBTN!=null){addPlayerBTN.addEventListener("click", dealer.addPlayer.bind(Dealer))}