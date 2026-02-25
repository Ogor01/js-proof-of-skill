document.getElementById("calculateButton").addEventListener("click", () => {
    const input = numbersInput.value.trim();

    if (!input) {
        return output("Please enter some numbers", "red");
    }

    const numbers = input
        .split(",")
        .map(n => parseFloat(n.trim()));

    const invalidNumbers = numbers.filter(n => isNaN(n));

    if (invalidNumbers.length > 0) {
        return output("One or more values are invalid", "red");
    }

    const sum = numbers.reduce((a, b) => a + b);

    output(`Numbers: [${numbers.join(", ")}] | Sum: ${sum}`, "#27ae60");
});

function output(message, color) {
    result.textContent = message;
    result.style.color = color;
}
