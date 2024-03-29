console.log("test datas :")
console.log(testDatas)
const showBTN=document.querySelector('.showCatalogBTN')
function flushChildren(block) {
    while (block.firstChild!=null){
        let child = block.firstChild
        block.removeChild(child)
    }
}
function show() {
    block=document.getElementById("catalogContainer")
    flushChildren(block)
    testDatas.forEach(item => {
                    let newChild=block.appendChild(document.createElement("div"))
                    // newChild.appendChild(cardElement(item,newChild))
                    console.log(cardElement(item,newChild))
                              })
}
show()
showBTN.addEventListener("click", show)