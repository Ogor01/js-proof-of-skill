document.getElementById("evenButton").addEventListener("click", () => process(true));
document.getElementById("oddButton").addEventListener("click", () => process(false));

function process(isEven) {
    const input = document.getElementById("numbersInput").value.trim();
    if (!input) {
        return showResult("Please enter some numbers", "red");
    }

    const parts = input.split(",");
    const numbers = [];
    const filtered = [];

    for (const part of parts) {
        const value = parseFloat(part.trim());

        if (isNaN(value)) {
            return showResult("Invalid number detected", "red");
        }

        numbers.push(value);

        if ((value % 2 === 0) === isEven) {
            filtered.push(value);
        }
    }

    if (!filtered.length) {
        return showResult(
            `No ${isEven ? "even" : "odd"} numbers found in [${numbers.join(", ")}]`,
            "#e67e22"
        );
    }

    showResult(
        `Original: [${numbers.join(", ")}] | ${isEven ? "Even" : "Odd"}: [${filtered.join(", ")}]`,
        "#27ae60"
    );
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
