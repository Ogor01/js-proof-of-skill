document.getElementById("removeButton").addEventListener("click", handleRemove);

function handleRemove() {
    const raw = valuesInput.value.trim();

    if (raw === "") {
        return show("Please enter some values", "red");
    }

    const values = raw
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

    const unique = values.filter((value, index) => {
        return values.indexOf(value) === index;
    });

    const removed = values.length - unique.length;

    show(
        `Original: [${values.join(", ")}] | Unique: [${unique.join(", ")}] | Removed: ${removed} duplicate${removed !== 1 ? "s" : ""}`,
        "#27ae60"
    );
}

function show(message, color) {
    result.textContent = message;
    result.style.color = color;
}
