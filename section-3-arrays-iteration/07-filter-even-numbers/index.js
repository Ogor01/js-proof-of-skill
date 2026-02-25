document.getElementById("evenButton").addEventListener("click", () => handleFilter("even"));
document.getElementById("oddButton").addEventListener("click", () => handleFilter("odd"));

function handleFilter(type) {
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

    const filtered = filterNumbers(numbers, type);

    if (filtered.length === 0) {
        showResult(
            `No ${type} numbers found in [${numbers.join(", ")}]`,
            "#e67e22"
        );
        return;
    }

    showResult(
        `Original: [${numbers.join(", ")}] | ${type === "even" ? "Even" : "Odd"}: [${filtered.join(", ")}]`,
        "#27ae60"
    );
}

function filterNumbers(numbers, type) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (type === "even" && numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        } else if (type === "odd" && numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}