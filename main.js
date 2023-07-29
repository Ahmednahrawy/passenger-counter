
// ###############
let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let resetEl = document.getElementById("reset-el")
// let footerEl = document.querySelector(".footer")
function increment() {
    count ++
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    if(count > 0) {
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0    
    } else {
        countEl.textContent = "push ADD first"
    }
}
function reset() {
    count = 0
    saveEl.textContent = "Previous entries: " 
    countEl.textContent = 0
}
