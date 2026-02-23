document.getElementById("calculateButton").addEventListener("click", calculate);

function calculate() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        return show("Please enter a valid number", "red");
    }

    if (number < 0) {
        return show("Factorial is not defined for negative numbers", "red");
    }

    if (number > 20) {
        return show("Please enter a number 20 or below", "red");
    }

    const factorial = number === 0
        ? 1
        : Array.from({ length: number }, (_, i) => i + 1)
              .reduce((acc, curr) => acc * curr, 1);

    show(`${number}! = ${factorial}`, "#27ae60");
}

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
