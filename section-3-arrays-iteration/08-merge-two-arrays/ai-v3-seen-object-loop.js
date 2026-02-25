document.getElementById("mergeButton").addEventListener("click", () => execute(false));
document.getElementById("mergeUniqueButton").addEventListener("click", () => execute(true));

function execute(uniqueOnly) {
    const input1 = document.getElementById("array1Input").value.trim();
    const input2 = document.getElementById("array2Input").value.trim();

    if (!input1 || !input2) {
        return showResult("Please fill in both arrays", "red");
    }

    const arr1 = input1.split(",").map(v => v.trim()).filter(Boolean);
    const arr2 = input2.split(",").map(v => v.trim()).filter(Boolean);

    const merged = [];
    const seen = {};

    for (const value of arr1) {
        merged.push(value);
        if (uniqueOnly) seen[value] = true;
    }

    for (const value of arr2) {
        if (!uniqueOnly) {
            merged.push(value);
        } else if (!seen[value]) {
            merged.push(value);
            seen[value] = true;
        }
    }

    showResult(
        `Array 1: [${arr1.join(", ")}] | Array 2: [${arr2.join(", ")}] | Merged: [${merged.join(", ")}]`,
        "#27ae60"
    );
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
