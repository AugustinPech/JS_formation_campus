let gridBTN= document.querySelector("#grid")
let listBTN= document.querySelector("#list")
let addBTN= document.querySelector("#add")
let closeBTN = document.querySelector("#close")
let modalForm = document.getElementById("myModal")
gridBTN.style="height:30px"
listBTN.style="height:30px"
addBTN.style="height:30px"

let formContainer = document.querySelector("#form")

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
    let newBlock = cardElement(newItem,document.getElementById("catalogContainer"))
    let closeNewCardBTN= newBlock.insertBefore(document.createElement("div"),newBlock.firstChild)
    closeNewCardBTN.style="z-index:10;width: 300px;;position:absolute;" 

    closeNewCardBTN.innerHTML='<img class="remove" style="width:10%" src="/JS_formation_campus/img/plus-svgrepo-com.svg" alt = "remove something"/>'
    closeNewCardBTN.firstChild.addEventListener("click", () => newBlock.remove())

    closeModal()
}
let block = document.getElementById("catalogContainer")

gridBTN.addEventListener("click",()=>toggleGridOrList(block,"grid"))
listBTN.addEventListener("click",()=>toggleGridOrList(block,"list"))
addBTN.addEventListener("click",()=>openModal())
closeBTN.addEventListener("click",()=>closeModal())

formContainer.addEventListener("submit", (e) => {
        e.preventDefault()
        addAppToList()
    }
)

window.onclick = function(event) {
    if (event.target == modalForm) {
        modalForm.style.display = "none";
    }
}
