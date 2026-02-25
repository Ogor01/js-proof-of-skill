const mergeBtn = document.getElementById("mergeButton");
const mergeUniqueBtn = document.getElementById("mergeUniqueButton");
const result = document.getElementById("result");

mergeBtn.addEventListener("click", () => processMerge(false));
mergeUniqueBtn.addEventListener("click", () => processMerge(true));

function processMerge(unique) {
    const arr1 = getArray("array1Input");
    const arr2 = getArray("array2Input");

    if (!arr1 || !arr2) {
        return show("Please fill in both arrays", "red");
    }

    const merged = unique
        ? [...new Set([...arr1, ...arr2])]
        : [...arr1, ...arr2];

    show(
        `Array 1: [${arr1.join(", ")}] | Array 2: [${arr2.join(", ")}] | Merged: [${merged.join(", ")}]`,
        "#27ae60"
    );
}

function getArray(id) {
    const value = document.getElementById(id).value.trim();
    if (!value) return null;
    return value.split(",").map(v => v.trim()).filter(Boolean);
}

function show(message, color) {
    result.textContent = message;
    result.style.color = color;
}
