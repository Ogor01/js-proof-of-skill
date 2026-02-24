document.getElementById("calculateButton").addEventListener("click", handleFactorial);

function handleFactorial() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        showResult("Please enter a valid number", "red");
        return;
    }

    if (number < 0) {
        showResult("Factorial is not defined for negative numbers", "red");
        return;
    }

    if (number > 100) {
        showResult("Please enter a number 100 or below", "red");
        return;
    }

    const answer = factorial(number);
    showResult(`${number}! = ${answer}`, "#27ae60");
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}