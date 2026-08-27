
const display = document.querySelector(".display");
console.log(display);
const buttons = document.querySelectorAll("button");
console.log(buttons);
console.log("javascript carregado");

buttons.forEach(function(button) {button.addEventListener("click", function() {display.textContent = button.textContent;
});
});