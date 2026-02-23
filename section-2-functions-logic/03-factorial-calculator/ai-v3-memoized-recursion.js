document.getElementById("calculateButton").addEventListener("click", handle);

const memo = {};

function handle() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        return output("Please enter a valid number", "red");
    }

    if (number < 0) {
        return output("Factorial is not defined for negative numbers", "red");
    }

    if (number > 20) {
        return output("Please enter a number 20 or below", "red");
    }

    const result = factorial(number);
    output(`${number}! = ${result}`, "#27ae60");
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;

    if (memo[n]) return memo[n];

    memo[n] = n * factorial(n - 1);
    return memo[n];
}

function output(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
