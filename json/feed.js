testDatas.forEach(item => data.push(item))


function flushChildren(block) {
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
                let newChild=block.appendChild(document.createElement("div"))
                cardElement(item,newChild)
                        })
}

const showBTN = document.querySelector('.showCatalogBTN')
const refreshBTN = document.querySelector('button#refreshCatalogBTN')
show()
if (refreshBTN!=null){refreshBTN.addEventListener("click", show)}
if (showBTN!=null) {
    showBTN.addEventListener("click", showOnGamePage);}