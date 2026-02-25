document.getElementById("countButton").addEventListener("click", () => {
    const valuesRaw = document.getElementById("valuesInput").value.trim();
    const searchRaw = document.getElementById("searchInput").value.trim();

    if (!valuesRaw || !searchRaw) {
        return display("Please fill in both fields", "red");
    }

    const values = valuesRaw
        .split(",")
        .map(v => v.trim())
        .filter(Boolean);

    const searchValue = searchRaw.toLowerCase();

    const count = values.filter(
        v => v.toLowerCase() === searchValue
    ).length;

    renderResult(values, searchRaw, count);
});

function renderResult(values, search, count) {
    const message = count === 0
        ? `"${search}" was not found in [${values.join(", ")}]`
        : `"${search}" appears ${count} time${count !== 1 ? "s" : ""} in [${values.join(", ")}]`;

    const color = count === 0 ? "#e74c3c" : "#27ae60";

    display(message, color);
}

function display(msg, color) {
    const result = document.getElementById("result");
    result.textContent = msg;
    result.style.color = color;
}
