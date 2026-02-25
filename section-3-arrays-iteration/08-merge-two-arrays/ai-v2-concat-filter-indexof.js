document.getElementById("mergeButton").addEventListener("click", () => merge(false));
document.getElementById("mergeUniqueButton").addEventListener("click", () => merge(true));

function merge(uniqueOnly) {
    const raw1 = document.getElementById("array1Input").value.trim();
    const raw2 = document.getElementById("array2Input").value.trim();

    if (!raw1 || !raw2) {
        return display("Please fill in both arrays", "red");
    }

    const arr1 = raw1.split(",").map(v => v.trim()).filter(Boolean);
    const arr2 = raw2.split(",").map(v => v.trim()).filter(Boolean);

    let merged = arr1.concat(arr2);

    if (uniqueOnly) {
        merged = merged.filter((value, index) =>
            merged.indexOf(value) === index
        );
    }

    display(
        `Array 1: [${arr1.join(", ")}] | Array 2: [${arr2.join(", ")}] | Merged: [${merged.join(", ")}]`,
        "#27ae60"
    );
}

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
