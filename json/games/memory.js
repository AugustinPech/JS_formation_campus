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
        this.setGame(numberOfPairs)
        startBTN.innerText= "reset Game"
    },
    setGame(numberOfPairs){
        
        user.flushLastCards()
        flushChildren(this.node)
        for (let i = 0 ; i< numberOfPairs; i++) {
            new MemoryCardPair
        }
        this.resizeBoard(numberOfPairs*2)
    },
    resizeBoard(numberOfCards){
        let mainSizes=document.querySelector("main").getBoundingClientRect()
        let cardSize= 80
        let boderSize=3
        let placeTakenByOneCard=cardSize+2*boderSize+0.02*mainSizes.width
        let numberOfCardsrInOneRow = Math.floor(Math.sqrt(numberOfCards))
        let placeTakenByOneRow=numberOfCardsrInOneRow*placeTakenByOneCard
        let styleString=""
        
        if(placeTakenByOneRow<=mainSizes.width) {
            styleString="width:"+Math.floor(numberOfCardsrInOneRow*placeTakenByOneCard)+"px;"
            styleString+="height:"+Math.floor(numberOfCards/numberOfCardsrInOneRow*placeTakenByOneCard)+"px;"
        } else {
            styleString=""
        }
        //if ()
        // let styleString="width:"+Math.+"; height"
        this.node.style=styleString
    },
    moveToTrophetZone(cardPair){
        let savedBlock= cardPair.frontCard.recto

        flushChildren(cardPair.backCard.container)
        cardPair.frontCard.verso.remove()
        let trophetZone=document.getElementById("trophetZone")
        trophetZone.appendChild(savedBlock)
    },
    cache(){
        let cache
        if (document.getElementById("cache")==null){
            cache= document.createElement("div")
            cache.setAttribute('id','cache')
            this.node.insertBefore(cache, this.node.firstChild)
        } else {
            document.getElementById("cache").remove()
        }
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
                        this.rectoVerso(this.frontImgPath)
                    )
                    this.backCard=Object.assign(
                        {},
                        {recto:"",verso:""},
                        this.rectoVerso(this.backImgPath)
                    )
                }
            )
            .then(
                () => {
                    memoryBoard.shuffle()
                    this.eventOnCLick(this.frontCard)
                    this.eventOnCLick(this.backCard)
                }
            ).then(
                () =>{ 
                    this.frontCard.recto.className+= " display-none"
                    this.backCard.recto.className+= " display-none"
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
            verso:cardVerso,
            id : this.id
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
    eventOnCLick(card){
        console.log()
        card.verso.addEventListener("click",() => {
            this.flipCard(card)
            user.setImagesClicked(this,card)
        })
        card.recto.addEventListener("click",() => {
            this.flipCard(card)
            user.setImagesClicked(this,card)
        })
    }
    flipCard(card){
        let versoClassList=card.verso.classList
        versoClassList.toggle("display-none")
        let rectoClassList=card.recto.classList
        rectoClassList.toggle("display-none")
    }
}
let user = {
    imagesClickedThisTurn: 0,
    lastClickedCard: [],
    lastClickedCardId: [],
    flushLastCards() {
        this.lastClickedCard = [];
        this.lastClickedCardId = [];
        this.imagesClickedThisTurn=0;
    },
    setImagesClicked(cardPair,card){
        this.imagesClickedThisTurn++
        if (this.lastClickedCard.length==0){
            this.lastClickedCard.push(card)
            this.lastClickedCardId.push(card.id)
        } else if (this.lastClickedCard.includes(card)) {
            this.lastClickedCard.push(card)
                this.lastClickedCardId.push(card.id)
                this.lastClickedCard.forEach(item =>cardPair.flipCard(item))
                this.flushLastCards()
        } else if (this.lastClickedCardId.includes(card.id)){
            this.flushLastCards()
            memoryBoard.moveToTrophetZone(cardPair)
        } else if (this.imagesClickedThisTurn==2) {
            memoryBoard.cache()
            setTimeout((()=> {
                this.lastClickedCard.push(card)
                this.lastClickedCardId.push(card.id)
                this.lastClickedCard.forEach(item =>cardPair.flipCard(item))
                this.flushLastCards()
                memoryBoard.cache()
            }),1000)
        }
    },
}
let startBTN = document.getElementById("startGame")
let shuffleBTN = document.getElementById("shuffle")
startBTN.addEventListener("click",() => memoryBoard.startGame())
shuffleBTN.addEventListener("click",() => memoryBoard.shuffle())