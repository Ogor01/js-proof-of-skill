document.getElementById("calculateButton").addEventListener("click", () => {
    const input = document.getElementById("numberInput").value;
    const number = Number(input);

    if (!Number.isInteger(number)) {
        return display("Please enter a valid whole number", "red");
    }

    if (number < 0) {
        return display("Factorial is not defined for negative numbers", "red");
    }

    if (number > 20) {
        return display("Please enter a number 20 or below", "red");
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    display(`${number}! = ${result}`, "#27ae60");
});

function display(message, color) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
    resultDiv.style.color = color;
}
