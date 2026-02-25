document.getElementById("ascButton").addEventListener("click", () => handle("asc"));
document.getElementById("descButton").addEventListener("click", () => handle("desc"));

function handle(order) {
    const raw = document.getElementById("numbersInput").value.trim();
    if (!raw) return show("Please enter some numbers", "red");

    const numbers = raw.split(",").map(n => parseFloat(n.trim()));

    if (numbers.some(isNaN)) {
        return show("Invalid input detected", "red");
    }

    const sorted = bubbleSort(numbers, order);

    show(
        `Original: [${numbers.join(", ")}] | Sorted: [${sorted.join(", ")}]`,
        "#27ae60"
    );
}

function bubbleSort(arr, order) {
    const copy = [...arr];

    for (let i = 0; i < copy.length - 1; i++) {
        for (let j = 0; j < copy.length - i - 1; j++) {
            const condition = order === "asc"
                ? copy[j] > copy[j + 1]
                : copy[j] < copy[j + 1];

            if (condition) {
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
            }
        }
    }

    return copy;
}

function show(msg, color) {
    const result = document.getElementById("result");
    result.textContent = msg;
    result.style.color = color;
}
