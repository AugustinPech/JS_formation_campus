let gridBTN= document.querySelector("#grid")
let listBTN= document.querySelector("#list")
gridBTN.style="height:30px"
listBTN.style="height:30px"

function toggleGridOrList(block,mod) {
    let classes= block.classList
    console.log(classes)
    classes.remove("d-flex-row")
    if(mod=="grid"){
        classes.add("d-grid")
        classes.remove("d-list")
    } else if (mod == "list") {
        classes.add("d-list")
        classes.remove("d-grid")
    }
}


let block = document.getElementById("catalogContainer")

gridBTN.addEventListener("click",()=>toggleGridOrList(block,"grid"))
listBTN.addEventListener("click",()=>toggleGridOrList(block,"list"))

