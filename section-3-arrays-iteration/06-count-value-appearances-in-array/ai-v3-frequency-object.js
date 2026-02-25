document.getElementById("countButton").addEventListener("click", function () {
    const valuesRaw = document.getElementById("valuesInput").value.trim();
    const searchValue = document.getElementById("searchInput").value.trim();

    if (!valuesRaw || !searchValue) {
        return showResult("Please fill in both fields", "red");
    }

    const values = valuesRaw
        .split(",")
        .map(v => v.trim())
        .filter(Boolean);

    const frequency = {};

    for (const value of values) {
        const key = value.toLowerCase();
        frequency[key] = (frequency[key] || 0) + 1;
    }

    const count = frequency[searchValue.toLowerCase()] || 0;

    if (count === 0) {
        showResult(
            `"${searchValue}" was not found in [${values.join(", ")}]`,
            "#e74c3c"
        );
    } else {
        showResult(
            `"${searchValue}" appears ${count} time${count !== 1 ? "s" : ""} in [${values.join(", ")}]`,
            "#27ae60"
        );
    }
});

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
