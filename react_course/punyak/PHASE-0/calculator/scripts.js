const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".num"); // all numerical buttons
const operatorButtons = document.querySelectorAll(".op"); // all operational buttons
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

let firstValue = ""; // first operand
let operator = ""; // the operator
let secondValue = ""; // second operand

// hook to update the display
function updateDisplay(value) {
    display.value = value;
}

// Applying eventlisteners to all buttons

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value; // dataset helps take data values in html tags

        if (!operator) {
            firstValue += value;
            updateDisplay(firstValue);
        } else {
            secondValue += value;
            updateDisplay(secondValue);
        }
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!firstValue) return;
        operator = button.dataset.value;
        updateDisplay("");
    })
})

equalButton.addEventListener("click", () => {
    if (!firstValue || !operator || !secondValue) return;

    const a = Number(firstValue);
    const b = Number(secondValue);
    let result = 0;

    if (operator === "+") result = a + b;
    if (operator === "-") result = a - b;
    if (operator === "*") result = a * b;
    if (operator === "/") {
        if (b == 0) {
            updateDisplay("Inf");
        } else {
            result = a / b;
        }
    }

    updateDisplay(result);
    firstValue = String(result);
    secondValue = "";
    operator = "";
});

clearButton.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operator = "";
  updateDisplay("");
});