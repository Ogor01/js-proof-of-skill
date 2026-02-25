const ascBtn = document.getElementById("ascButton");
const descBtn = document.getElementById("descButton");
const inputField = document.getElementById("numbersInput");
const result = document.getElementById("result");

ascBtn.addEventListener("click", () => sortHandler(1));
descBtn.addEventListener("click", () => sortHandler(-1));

function sortHandler(direction) {
    const raw = inputField.value.trim();
    if (!raw) return display("Please enter some numbers", "red");

    const numbers = raw.split(",").map(n => Number(n.trim()));

    if (numbers.some(Number.isNaN)) {
        return display("Invalid numbers detected", "red");
    }

    const sorted = [...numbers].sort((a, b) => (a - b) * direction);

    display(
        `Original: [${numbers.join(", ")}] | Sorted: [${sorted.join(", ")}]`,
        "#27ae60"
    );
}

function display(msg, color) {
    result.textContent = msg;
    result.style.color = color;
}
