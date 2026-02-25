document.getElementById("findButton").addEventListener("click", handleFindLargest);

function handleFindLargest() {
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

    const largest = findLargest(numbers);

    showResult(
        `Numbers: [${numbers.join(", ")}] | Largest: ${largest}`,
        "#27ae60"
    );
}

function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}