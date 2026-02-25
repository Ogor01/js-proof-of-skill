document.getElementById("countButton").addEventListener("click", handleCount);

function handleCount() {
    const valuesInput = document.getElementById("valuesInput").value.trim();
    const searchValue = document.getElementById("searchInput").value.trim();

    if (valuesInput === "" || searchValue === "") {
        showResult("Please fill in both fields", "red");
        return;
    }

    const values = valuesInput
        .split(",")
        .map(v => v.trim())
        .filter(v => v !== "");

    const count = countOccurrences(values, searchValue);

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
}

function countOccurrences(values, target) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i].toLowerCase() === target.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}