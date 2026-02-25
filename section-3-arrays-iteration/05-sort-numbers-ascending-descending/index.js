document.getElementById("ascButton").addEventListener("click", () => handleSort("asc"));
document.getElementById("descButton").addEventListener("click", () => handleSort("desc"));

function handleSort(order) {
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

    const sorted = sortNumbers(numbers, order);

    showResult(
        `Original: [${numbers.join(", ")}] | Sorted: [${sorted.join(", ")}]`,
        "#27ae60"
    );
}

function sortNumbers(numbers, order) {
    const copy = [...numbers];
    if (order === "asc") {
        return copy.sort((a, b) => a - b);
    } else {
        return copy.sort((a, b) => b - a);
    }
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}