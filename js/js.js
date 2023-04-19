let counter = document.getElementById("counter")
let click = document.getElementById("click")
let number = 0

click.addEventListener("click", () => {
    number += 1
})

setInterval(() => {
    number += 1
}, 1000)

setInterval(() => {
    counter.innerHTML = "your number is " + number.toString()
}, 33)