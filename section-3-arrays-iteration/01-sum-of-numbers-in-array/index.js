document.getElementById("calculateButton").addEventListener("click", handleSum);

function handleSum() {
    const input = document.getElementById("numbersInput").value.trim();

    if (input === "") {
        showResult("Please enter some numbers", "red");
        return;
    }

    const numbers = input.split(",").map(n => parseFloat(n.trim()));

    if (numbers.some(n => isNaN(n))) {
        showResult("Please enter valid numbers separated by commas", "red");
        return;
    }

    const sum = calculateSum(numbers);
    showResult(
        `Numbers: [${numbers.join(", ")}] | Sum: ${sum}`,
        "#27ae60"
    );
}

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}