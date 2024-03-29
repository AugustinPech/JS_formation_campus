testDatas.forEach(item => data.push(item))
console.log(data)

function flushChildren(block) {
    while (block!=null && block.firstChild!=null){
        let child = block.firstChild
        block.removeChild(child)
    }
}
function showOnGamePage() {
    let block = document.getElementById("catalogContainer")
    console.log(block)
    block.style= "display: contents"
    show()
}
function show() {
    let block = document.getElementById("catalogContainer")
    flushChildren(block)
    block.className= " d-flex-col"
    data.forEach(item => {
                let newChild=block.appendChild(document.createElement("div"))
                cardElement(item,newChild)
                        })
}

const showBTN = document.querySelector('.showCatalogBTN')
const refreshBTN = document.querySelector('button#refreshCatalogBTN')
console.log(showBTN, refreshBTN)
show()
if (refreshBTN!=null){refreshBTN.addEventListener("click", show)}
if (showBTN!=null) {showBTN.addEventListener("click", showOnGamePage)}