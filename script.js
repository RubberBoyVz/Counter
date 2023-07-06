const pCounterNumber = document.getElementById("counter-number");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-increase");
let counter = 0;

btnDecrease.addEventListener("click", decreaseCounter);
btnReset.addEventListener("click", resetCounter);
btnIncrease.addEventListener("click", increaseCounter);

function increaseCounter() {
    counter++;
    pCounterNumber.innerHTML = counter;
    setCounterColor();
}

function decreaseCounter() {
    counter--;
    pCounterNumber.innerHTML = counter;
    setCounterColor();
}

function resetCounter() {
    counter = 0;
    pCounterNumber.innerHTML = counter;
    setCounterColor();
}

function setCounterColor() {
    if (counter < 0) {
        pCounterNumber.style.color = "red";
    } else if (counter == 0) {
        pCounterNumber.style.color = "white";
    } else {
        pCounterNumber.style.color = "green";
    }
}
