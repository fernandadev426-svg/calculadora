
const display = document.querySelector(".display");
console.log(display);
const buttons = document.querySelectorAll("button");
let firstNumber ="";
let operator = "";
let secondNumber = "";
let waitingForSecondNumber = false;
const operators = document.querySelectorAll(".operator");
console.log(operators);
console.log(buttons);
console.log("javascript carregado");
console.log("Display inicial:", display.textContent);

buttons.forEach(function(button) {button.addEventListener("click", function() {
    if (button.classList.contains("operator")) {
        operator = button.textContent;
        firstNumber = display.textContent;
         waitingForSecondNumber = true;
        console.log("Primeiro número:", firstNumber);
        console.log("Operador:", operator);
    } else if (button.classList.contains("equals")) {
        secondNumber = display.textContent;
        let number1 = Number(firstNumber);
        let number2 = Number(secondNumber);
        console.log("Numero 1:", number1)
        console.log("Numero 2:", number2);
        if (operator === "+") {
            display.textContent = number1 + number2;
        }
        if (operator === "-") {
            display.textContent = number1 - number2;
        }
        if (operator === "*") {
            display.textContent = number1 * number2;
        }
        if (operator ==="/") {
            display.textContent = number1 / number2;
        }
        } else if (button.classList.contains("clear")) {
            display.textContent = "0";
            firstNumber = "";
            operator = "";
            secondNumber = "";
            waitingForSecondNumber = false;
        
     } else {
        if (waitingForSecondNumber) {
            display.textContent = button.textContent;
            waitingForSecondNumber = false;
        } else if (display.textContent.trim() === "0") {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    }
});
});