let saveEl =document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

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
        countEl.textContent = "push increment first"
    }
}
