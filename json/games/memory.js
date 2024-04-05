let memoryContainer = document.getElementById("memoryContainer")

let memoryBoard={
    node : document.getElementById("memoryBoard"),
    cards : document.getElementById("memoryBoard").children,
    shuffle() {
        for (let i = 0 ; i< this.cards.length; i++) {
            this.node.appendChild(this.cards[Math.random() * i | 0]);
        }
    },
    startGame(){
        let inputBox=document.getElementById("numberOfPairs")
        let numberOfPairs=inputBox.value
        this.setGame(numberOfPairs,inputBox)
        startBTN.innerText= "reset Game"
    },
    setGame(numberOfPairs,inputBox){

        flushChildren(this.node)
        for (let i = 0 ; i< numberOfPairs; i++) {
            new MemoryCardPair
        }
        this.resizeBoard(numberOfPairs*2,inputBox)
    },
    resizeBoard(numberOfCards,inputBox){
        let mainSizes=document.querySelector("main").getBoundingClientRect()
        let cardSize= 80
        let boderSize=3
        let placeTakenByOneCard=cardSize+2*boderSize+0.02*mainSizes.width
        let numberOfCardsrdsInOneRow = Math.floor(Math.sqrt(numberOfCards))
        let placeTakenByOneRow=numberOfCardsrdsInOneRow*placeTakenByOneCard
        let styleString=""
        inputBox.max=Math.floor((numberOfCardsrdsInOneRow * mainSizes.height )/ (placeTakenByOneCard*2))
        if(placeTakenByOneRow<=mainSizes.width) {
            styleString="width:"+numberOfCardsrdsInOneRow*placeTakenByOneCard+"px"
        } else {
            styleString=""
            console.log("situation normale")
        }
        //if ()
        // let styleString="width:"+Math.+"; height"
        this.node.parentNode.style=styleString
    },
    eventOnCLick(object){
        object.verso.addEventListener("click",() => this.eventOnCLick())

        console.log(object.recto)
        console.log(object.verso)
    },
    eventOnCLick(){

    }
}
let yetDraftedPokemons=[]
let index = 0
class MemoryCardPair {
    draft(){
        let i = Math.floor(Math.random()*800+1)
        if(yetDraftedPokemons.includes(i)){
            this.draft()
        }else {
            yetDraftedPokemons.push(i)
        }
        this.number=i
    }
    constructor(){
        index++
        this.id=index
        this.draft()
        this.appPath="https://pokeapi.co/api/v2/pokemon/"+this.number+"/"
        this.container=memoryBoard.node
        fetch(this.appPath)
            .then(
                response => response.json()
                )
            .then(
                a => { 
                    this.title = a.name
                    this.frontImgPath = a.sprites.front_default
                    if (a.sprites.back_default != null) {
                        this.backImgPath = a.sprites.back_default
                    } else {
                        console.log(this.title+" n'a pas d'image de dos")
                        this.backImgPath = a.sprites.front_default
                    }
                    }
                )
            .then(
                () => {
                        this.frontCard=Object.assign(
                            {},
                            {recto:"",verso:""},
                            this.rectoVerso(this.frontImgPath))
                        this.backCard=Object.assign(
                            {},
                            {recto:"",verso:""},
                            this.rectoVerso(this.backImgPath))
                    }
                )
            .then(
                () => {
                    memoryBoard.shuffle()
                    memoryBoard.eventOnCLick(this.frontCard)
                    memoryBoard.eventOnCLick(this.backCard)
                }
            )
            
    }
    rectoVerso(imgPath){
        let cardContainer=this.container.appendChild(document.createElement("div"))
        cardContainer.className="memoryCard"
        let cardRecto = this.recto(imgPath,cardContainer)
        let cardVerso= this.verso(cardContainer)
        return {
            container:cardContainer,
            recto:cardRecto,
            verso:cardVerso
        }
    }
    recto(imagePath,container) {
        let cardRecto=container.appendChild(document.createElement("img"))
        cardRecto.src=imagePath
        cardRecto.style=""
        cardRecto.className="memoryCard-recto"

        return cardRecto
    }
    verso(cardContainer){
        let cardVerso = cardContainer.insertBefore(document.createElement("img"),cardContainer.firstChild)
        cardVerso.src='/JS_formation_campus/img/pokemon-1536855_1280.png'
        cardVerso.style=""
        cardVerso.className="memoryCard-verso"
        return cardVerso
    }
}
let startBTN = document.getElementById("startGame")
let shuffleBTN = document.getElementById("shuffle")

startBTN.addEventListener("click",() => memoryBoard.startGame())
shuffleBTN.addEventListener("click",() => memoryBoard.shuffle())




