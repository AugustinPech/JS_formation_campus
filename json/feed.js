

function flushChildren() {
    let block = document.getElementById("catalogContainer")
    while (block!=null && block.firstChild!=null){
        let child = block.firstChild
        block.removeChild(child)
    }
}
function showOnGamePage() {
    let block = document.querySelector(".catalogOnGamePage")
    let classes= block.classList
    classes.toggle("show-no");
    classes.toggle("d-flex-row");
    
}
function show() {
    let block = document.getElementById("catalogContainer")
    flushChildren(block)
    block.className= " d-flex-row"
    data.forEach(item => {
                
                cardElement(item,document.getElementById("catalogContainer"))
                        })
}

const showBTN = document.querySelector('.showCatalogBTN')
const refreshBTN = document.querySelector('button#refreshCatalogBTN')
const pokeBTN =document.querySelector('button#pokeBTN')
show()

if (refreshBTN!=null){refreshBTN.addEventListener("click", () => show())}
if (pokeBTN!=null) {pokeBTN.addEventListener("click", () => pokemons(200,document.getElementById("catalogContainer")))}
if (showBTN!=null) {showBTN.addEventListener("click", showOnGamePage);}

