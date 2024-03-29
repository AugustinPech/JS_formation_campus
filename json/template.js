let body = document.body
let headerScript = document.createElement("script")
let footerScript = document.createElement("script")
headerScript.src = "../json/blocks/header.js"
footerScript.src = "../json/blocks/footer.js"
body.appendChild(headerScript)
body.appendChild(footerScript)