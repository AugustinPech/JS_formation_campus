let data = [
    {
        title: "Memory",
        description : " A simple memory game.",
        image:"/JS_formation_campus/img/memory-48118_1280.png" ,
        appPath:"/JS_formation_campus/pages/games/memory.html",
        available: true,
    },
    {
        title: "2D breakout game using",
        description: " A simple game of breakout.",
        image: "https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/mdn-breakout-gameplay.png",
        appPath: "/JS_formation_campus/pages/games/casseBrique.html",
        available: true,
    },
    {
        title: "Simple BlackJack app",
        description: " A simple game of black jack. would be grate with some more styling.",
        image: "https://live.staticflickr.com/3656/3496497359_610032ef17_c.jpg",
        appPath: "/JS_formation_campus/pages/games/blackJack.html",
        available: true,
    },
    {
        title: "Counting people app",
        description: "A really simple app for counting lots people somewhere.",
        image: "https://www.linksprite.com/wp-content/uploads/2019/03/counting-1024x722.jpg",
        appPath: "/JS_formation_campus/pages/games/counter.html",
        available: true,
    },
]

class Pokemon {
    constructor(i,parentBlock) {
        // let i = Math.floor(Math.random()*152+1)
        this.appPath="https://pokeapi.co/api/v2/pokemon/"+i+"/"
        this.id = i
        fetch(this.appPath)
            .then(response => response.json())
            .then(a => { 
                this.title = a.name
                this.image = a.sprites.front_default
                // this.description = "Quis enim nulla enim nulla ea elit in. Aliqua velit reprehenderit anim amet in aliquip non officia eu duis irure et sunt labore. In magna laboris do sint. Laboris ullamco est ex aliqua sint."
                fetch(a.species.url).then(response => response.json())
                    .then(b=> {
                        let entries=[]
                        b.flavor_text_entries.forEach(item => { if(item.language.name === "en"){entries.push(item)}})
                        let maxIndex = entries.length
                        let index= Math.floor(Math.random()*maxIndex)
                        let element = entries[index].flavor_text        
                        this.description=element
                        let card = cardElement(this,parentBlock)
                        carouselCard(card,this,parentBlock)
                    })
            }).catch(error => console.error("Error : ", error,"unable to load the pokemon number : #", i))
    }
}

function pokemons(number,parentBlock){
    for (let i=1; i<number+1; i++){
        new Pokemon(i,parentBlock)
    }
}
function doublePokemons(number,parentBlock){
    for (let i=1; i<number+1; i++){
        new Pokemon(i,parentBlock)
    }
    for (let i=1; i<number+1; i++){
        new Pokemon(i,parentBlock)
    }
}