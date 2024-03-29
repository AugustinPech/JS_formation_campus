
function newChild(block, className, htmlType, object) {
    let values = Object.values(object)
    let keys = Object.keys(object)
    let newChild=block.appendChild(document.createElement(htmlType))
    if (htmlType=="a"){
            newChild.href=values[keys.findIndex(item => item==className)]
        } else if (htmlType=="img") {
            newChild.src=values[keys.findIndex(item => item==className)]
            newChild.style = "width:100%"
        } else {
            newChild.textContent=values[keys.findIndex(item => item==className)]
        }
    newChild.className=className
    return newChild
}
function cardElement(object, block) {
    let values = Object.values(object)
    let keys = Object.keys(object)
    block.setAttribute('class', 'card d-flex-col')
    let aChild = newChild(block, "appPath", "a", object)
    let divTop= newChild(aChild, "topDiv", "div", object)
    let strStyle ="background-image: url('" + values[keys.findIndex(item => item=="imgPath")] +"');background-size: cover;"
    divTop.style=strStyle 
    let divBottom= newChild(aChild, "bottomDiv", "div", object)
    divBottom.className+= " d-flex-col"
    newChild(divBottom, 'title', "h3", object)
    newChild(divBottom, 'desc', "div", object)

}
