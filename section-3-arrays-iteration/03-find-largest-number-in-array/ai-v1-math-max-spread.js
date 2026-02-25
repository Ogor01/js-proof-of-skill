document.getElementById("findButton").addEventListener("click", () => {
    const input = document.getElementById("numbersInput").value.trim();

    if (!input) {
        return display("Please enter some numbers", "red");
    }

    const numbers = input.split(",").map(n => Number(n.trim()));

    if (numbers.some(n => Number.isNaN(n))) {
        return display("Invalid input. Use comma-separated numbers.", "red");
    }

    const largest = Math.max(...numbers);

    display(`Numbers: [${numbers.join(", ")}] | Largest: ${largest}`, "#27ae60");
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
