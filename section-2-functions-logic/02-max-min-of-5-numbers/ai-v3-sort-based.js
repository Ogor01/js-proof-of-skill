document.getElementById("findButton").addEventListener("click", () => {
    const inputs = document.querySelectorAll(".numInput");
    const numbers = [];

    inputs.forEach(input => {
        numbers.push(parseFloat(input.value));
    });

    if (numbers.includes(NaN)) {
        show("Please fill in all 5 numbers", "red");
        return;
    }

    numbers.sort((a, b) => a - b);

    const min = numbers[0];
    const max = numbers[numbers.length - 1];

    show(`Max: ${max} | Min: ${min}`, "#27ae60");
});

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
