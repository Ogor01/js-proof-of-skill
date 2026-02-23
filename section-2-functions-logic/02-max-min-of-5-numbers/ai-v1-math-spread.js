document.getElementById("findButton").addEventListener("click", () => {
    const inputs = Array.from(document.querySelectorAll(".numInput"));
    const numbers = inputs.map(input => parseFloat(input.value));

    if (numbers.some(num => isNaN(num))) {
        display("Please fill in all 5 numbers", "red");
        return;
    }

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    display(`Max: ${max} | Min: ${min}`, "#27ae60");
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
