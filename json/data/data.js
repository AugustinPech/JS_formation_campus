let data = [
    {
        title: "Counting people app",
        description: "A really simple app for counting lots people somewhere.",
        image: "https://www.linksprite.com/wp-content/uploads/2019/03/counting-1024x722.jpg",
        appPath: "https://augustinpech.github.io/JS_formation_campus/pages/games/counter.html"
    },    {
        title: "Simple BlackJack app",
        description: " A cool thing.",
        image: "https://live.staticflickr.com/3656/3496497359_610032ef17_c.jpg",
        appPath: "/pages/games/blackJack.html"
    },
]

class Pokemon {
    constructor(i) {
        // let i = Math.floor(Math.random()*152+1)
        this.appPath="https://pokeapi.co/api/v2/pokemon/"+i+"/"
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
                        let parentBlock=document.getElementById("catalogContainer")
                        parentBlock.className= " d-flex-row"
                        let newBlock = parentBlock.appendChild(document.createElement("div"))
                        cardElement(this, newBlock)
                    })
            }).catch(error => console.error("Error : ", error, i))
        
    }
}

function pokemons(number){
    for (let i=1; i<number; i++){
        new Pokemon(i)
    }
}