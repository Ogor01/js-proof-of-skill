document.getElementById("findButton").addEventListener("click", findMaxMin);

function findMaxMin() {
    const inputs = document.querySelectorAll(".numInput");
    const numbers = [];

    for (const input of inputs) {
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            showResult("Please fill in all 5 numbers", "red");
            return;
        }
        numbers.push(value);
    }

    const max = numbers.reduce((a, b) => a > b ? a : b);
    const min = numbers.reduce((a, b) => a < b ? a : b);

    showResult(`Max: ${max} | Min: ${min}`, "#27ae60");
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
