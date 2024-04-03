let gridBTN= document.querySelector("#grid")
let listBTN= document.querySelector("#list")
let addBTN= document.querySelector("#add")
let closeBTN = document.querySelector("#close")
let formBTN = document.querySelector("#send")
let modalForm = document.getElementById("myModal")

gridBTN.style="height:30px"
listBTN.style="height:30px"
addBTN.style="height:30px"

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

function openModal() {
    modalForm.style.display = "block";
}
function closeModal() {
    modalForm.style.display = "none";
}
function addAppToList() {
    let newItem= {
        title: document.getElementById("name").value,
        description: document.getElementById("description").value,
        image: document.getElementById("imgPath").value,
        appPath: document.getElementById("appPath").value
    }
    console.log(newItem)
    cardElement(newItem)
}
let block = document.getElementById("catalogContainer")

gridBTN.addEventListener("click",()=>toggleGridOrList(block,"grid"))
listBTN.addEventListener("click",()=>toggleGridOrList(block,"list"))
addBTN.addEventListener("click",()=>openModal())
closeBTN.addEventListener("click",()=>closeModal())
formBTN.addEventListener("click", () => addAppToList())
window.onclick = function(event) {
    if (event.target == modalForm) {
        modalForm.style.display = "none";
    }
}
