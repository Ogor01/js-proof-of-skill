document.getElementById("calculateButton").addEventListener("click", () => {
    const input = document.getElementById("numbersInput").value.trim();

    if (!input) {
        return display("Please enter some numbers", "red");
    }

    const numbers = input.split(",").map(num => Number(num.trim()));

    if (numbers.some(num => Number.isNaN(num))) {
        return display("Invalid input. Use comma-separated numbers.", "red");
    }

    const sum = numbers.reduce((total, current) => total + current, 0);

    display(`Numbers: [${numbers.join(", ")}] | Sum: ${sum}`, "#27ae60");
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
