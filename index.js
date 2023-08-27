let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0;
let totalCount = 0;
totalEl.textContent = totalCount;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalCount += count
    totalEl.textContent = totalCount

    countEl.textContent = 0
    count = 0
}
