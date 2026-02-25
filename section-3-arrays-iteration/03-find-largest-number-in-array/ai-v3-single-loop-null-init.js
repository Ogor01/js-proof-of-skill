document.getElementById("findButton").addEventListener("click", function () {
    const raw = document.getElementById("numbersInput").value.trim();

    if (!raw) {
        return showResult("Please enter some numbers", "red");
    }

    const parts = raw.split(",");
    let largest = null;

    for (const part of parts) {
        const value = parseFloat(part.trim());

        if (isNaN(value)) {
            return showResult("Invalid number detected", "red");
        }

        if (largest === null || value > largest) {
            largest = value;
        }
    }

    showResult(
        `Numbers: [${parts.join(", ")}] | Largest: ${largest}`,
        "#27ae60"
    );
});

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
