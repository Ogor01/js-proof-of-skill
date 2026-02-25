document.getElementById("countButton").addEventListener("click", handleCount);

function handleCount() {
    const valuesInput = valuesInputField().trim();
    const searchInput = searchInputField().trim();

    if (!valuesInput || !searchInput) {
        return show("Please fill in both fields", "red");
    }

    const values = valuesInput.split(",")
        .map(v => v.trim())
        .filter(Boolean);

    const count = values.reduce((total, current) => {
        return current.toLowerCase() === searchInput.toLowerCase()
            ? total + 1
            : total;
    }, 0);

    showResult(values, searchInput, count);
}

function valuesInputField() {
    return document.getElementById("valuesInput").value;
}

function searchInputField() {
    return document.getElementById("searchInput").value;
}

function showResult(values, search, count) {
    const result = document.getElementById("result");

    if (count === 0) {
        result.textContent = `"${search}" was not found in [${values.join(", ")}]`;
        result.style.color = "#e74c3c";
    } else {
        result.textContent =
            `"${search}" appears ${count} time${count !== 1 ? "s" : ""} in [${values.join(", ")}]`;
        result.style.color = "#27ae60";
    }
}

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
