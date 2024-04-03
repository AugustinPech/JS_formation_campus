
let queryBTN= document.querySelector("#askForPokemon")
let queryField= document.querySelector("#id")

function getPokemon(form) {
    let id = form.value
    console.log(form, id)
    new Pokemon(id)
}
if (queryBTN!=null) {
    
    queryBTN.addEventListener("click", () => getPokemon(id))
id}