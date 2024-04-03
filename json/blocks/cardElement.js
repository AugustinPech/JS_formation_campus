
function newChild(block, className, htmlType, object) {
    let values = Object.values(object)
    let keys = Object.keys(object)
    let newChild=block.appendChild(document.createElement(htmlType))
    switch (htmlType){
        case "a" :
            newChild.href=values[keys.findIndex(item => item==className)]
            break
        case "img" :
            newChild.src=values[keys.findIndex(item => item==className)]
            newChild.style = "width:100%"
            break
        default :
            newChild.textContent=values[keys.findIndex(item => item==className)]
    }
    
    newChild.className=className
    return newChild
}
function cardElement(object) {
    let parentBlock=document.getElementById("catalogContainer")
    parentBlock.className= " d-flex-row"
    let newBlock = parentBlock.appendChild(document.createElement("div"))
    let values = Object.values(object)
    let keys = Object.keys(object)
    newBlock.setAttribute('class', 'card d-flex-col')
    let aChild = newChild(newBlock, "appPath", "a", object)
    let divTop= newChild(aChild, "topDiv", "div", object)
    let strStyle ="background-image: url('" + values[keys.findIndex(item => item=="image")] +"');background-size: cover;"
    let divBottom= newChild(aChild, "bottomDiv", "div", object)
    divBottom.className+= " d-flex-col"
    if (object instanceof Pokemon) {
        aChild.style=strStyle
        newBlock.style==""
        divTop.style="background-color: rgb(240, 240, 240,0);"
        divBottom.style="text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;"
    } else {
        divTop.style=strStyle
    }
    
    newChild(divBottom, 'title', "h3", object)
    newChild(divBottom, 'description', "div", object)

}
