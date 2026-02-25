document.getElementById("removeButton").addEventListener("click", function () {
    const input = document.getElementById("valuesInput").value.trim();

    if (!input) {
        return showResult("Please enter some values", "red");
    }

    const values = input
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

    const lookup = {};
    const unique = [];

    for (const value of values) {
        if (!lookup[value]) {
            lookup[value] = true;
            unique.push(value);
        }
    }

    const removed = values.length - unique.length;

    showResult(
        `Original: [${values.join(", ")}] | Unique: [${unique.join(", ")}] | Removed: ${removed} duplicate${removed !== 1 ? "s" : ""}`,
        "#27ae60"
    );
});

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
