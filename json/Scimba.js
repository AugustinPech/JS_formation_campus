// document.getElementById("count").innerText = 5



// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl=document.getElementById("count")
let savedEl = document.getElementById("savedCount")
let totalEl = document.getElementById("savedTot")
let count = 0
let savedCount= 0

function increment() { console.log("increment button was clicked")
    count+=1
    countEl.innerText = count
}
function save() { console.log("save button was clicked" +savedCount)
    savedCount+=count
    countEl.innerText = 0
    savedEl.innerText += " " +  count  + " -"
    totalEl.innerText = savedCount 
    count=0
}