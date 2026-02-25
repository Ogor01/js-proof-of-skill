const evenBtn = document.getElementById("evenButton");
const oddBtn = document.getElementById("oddButton");
const inputField = document.getElementById("numbersInput");
const result = document.getElementById("result");

evenBtn.addEventListener("click", () => runFilter(true));
oddBtn.addEventListener("click", () => runFilter(false));

function runFilter(isEven) {
    const raw = inputField.value.trim();
    if (!raw) return display("Please enter some numbers", "red");

    const numbers = raw.split(",").map(n => Number(n.trim()));

    if (numbers.some(Number.isNaN)) {
        return display("Invalid numbers detected", "red");
    }

    const filtered = numbers.filter(n =>
        isEven ? n % 2 === 0 : n % 2 !== 0
    );

    if (!filtered.length) {
        return display(
            `No ${isEven ? "even" : "odd"} numbers found in [${numbers.join(", ")}]`,
            "#e67e22"
        );
    }

    display(
        `Original: [${numbers.join(", ")}] | ${isEven ? "Even" : "Odd"}: [${filtered.join(", ")}]`,
        "#27ae60"
    );
}

function display(message, color) {
    result.textContent = message;
    result.style.color = color;
}
