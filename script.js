const display = document.getElementById('display');
let currentInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperation(op) {
    if (operation === null) {
        operation = op;
        currentInput += ` ${op} `;
    }
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    display.value = '';
}

function calculate() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = String(result);
        operation = null;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}