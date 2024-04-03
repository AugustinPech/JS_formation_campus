function dropDown() {
    let navBar = document.getElementById("navBar")
    let classes= navBar.classList
    classes.toggle("hideNavBar")
    if (document.querySelector(".hideNavBar")!=null){
        burgerBTN.src="https://www.svgrepo.com/show/506800/burger-menu.svg"
    }else {
        burgerBTN.src="/JS_formation_campus/img/cross-23.svg"
    }
}

let burgerBTN= document.querySelector("img.dropdownBTN")
if (burgerBTN!=null) {
    burgerBTN.addEventListener("click", dropDown)
    burgerBTN.style.display ="block"
}

