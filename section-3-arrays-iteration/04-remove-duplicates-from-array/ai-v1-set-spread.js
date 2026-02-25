document.getElementById("removeButton").addEventListener("click", () => {
    const input = document.getElementById("valuesInput").value.trim();

    if (!input) {
        return display("Please enter some values", "red");
    }

    const values = input
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

    const unique = [...new Set(values)];
    const removed = values.length - unique.length;

    display(
        `Original: [${values.join(", ")}] | Unique: [${unique.join(", ")}] | Removed: ${removed} duplicate${removed !== 1 ? "s" : ""}`,
        "#27ae60"
    );
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
