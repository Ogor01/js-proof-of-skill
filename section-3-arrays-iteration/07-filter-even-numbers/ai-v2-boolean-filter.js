document.getElementById("evenButton").addEventListener("click", () => handle("even"));
document.getElementById("oddButton").addEventListener("click", () => handle("odd"));

function handle(type) {
    const raw = document.getElementById("numbersInput").value.trim();
    if (!raw) return show("Please enter some numbers", "red");

    const numbers = raw.split(",").map(n => parseFloat(n.trim()));
    if (numbers.some(isNaN)) {
        return show("Invalid input provided", "red");
    }

    const filtered = numbers.reduce((acc, num) => {
        if (type === "even" && num % 2 === 0) acc.push(num);
        if (type === "odd" && num % 2 !== 0) acc.push(num);
        return acc;
    }, []);

    if (!filtered.length) {
        return show(
            `No ${type} numbers found in [${numbers.join(", ")}]`,
            "#e67e22"
        );
    }

    show(
        `Original: [${numbers.join(", ")}] | ${type === "even" ? "Even" : "Odd"}: [${filtered.join(", ")}]`,
        "#27ae60"
    );
}

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
