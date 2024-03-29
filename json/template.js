let body = document.body
let headerScript = document.createElement("script")
let footerScript = document.createElement("script")
headerScript.src = "/JS/json/blocks/header.js"
footerScript.src = "/JS/json/blocks/footer.js"
body.appendChild(headerScript)
body.appendChild(footerScript)