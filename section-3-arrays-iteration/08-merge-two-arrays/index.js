document.getElementById("mergeButton").addEventListener("click", () => handleMerge(false));
document.getElementById("mergeUniqueButton").addEventListener("click", () => handleMerge(true));

function handleMerge(uniqueOnly) {
    const input1 = document.getElementById("array1Input").value.trim();
    const input2 = document.getElementById("array2Input").value.trim();

    if (input1 === "" || input2 === "") {
        showResult("Please fill in both arrays", "red");
        return;
    }

    const array1 = input1.split(",").map(v => v.trim()).filter(v => v !== "");
    const array2 = input2.split(",").map(v => v.trim()).filter(v => v !== "");

    const merged = mergeArrays(array1, array2, uniqueOnly);

    showResult(
        `Array 1: [${array1.join(", ")}] | Array 2: [${array2.join(", ")}] | Merged: [${merged.join(", ")}]`,
        "#27ae60"
    );
}

function mergeArrays(arr1, arr2, uniqueOnly) {
    const merged = [];

    for (let i = 0; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }

    if (uniqueOnly) {
        return [...new Set(merged)];
    }

    return merged;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}