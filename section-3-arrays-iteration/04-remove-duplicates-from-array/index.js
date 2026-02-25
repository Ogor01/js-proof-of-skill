document.getElementById("removeButton").addEventListener("click", handleRemoveDuplicates);

function handleRemoveDuplicates() {
    const input = document.getElementById("valuesInput").value.trim();

    if (input === "") {
        showResult("Please enter some values", "red");
        return;
    }

    const values = input.split(",").map(v => v.trim()).filter(v => v !== "");

    const unique = removeDuplicates(values);
    const removed = values.length - unique.length;

    showResult(
        `Original: [${values.join(", ")}] | Unique: [${unique.join(", ")}] | Removed: ${removed} duplicate${removed !== 1 ? "s" : ""}`,
        "#27ae60"
    );
}

function removeDuplicates(values) {
    const seen = [];
    const unique = [];
    for (let i = 0; i < values.length; i++) {
        if (!seen.includes(values[i])) {
            seen.push(values[i]);
            unique.push(values[i]);
        }
    }
    return unique;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}