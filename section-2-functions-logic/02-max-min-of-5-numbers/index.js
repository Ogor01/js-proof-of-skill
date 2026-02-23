document.getElementById("findButton").addEventListener("click", findMaxMin);

function findMaxMin() {
    const inputs = document.querySelectorAll(".numInput");
    const numbers = [];

    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            numbers.push(value);
        }
    });

    if (numbers.length < 5) {
        showResult("Please fill in all 5 numbers", "red");
        return;
    }

    const max = findMax(numbers);
    const min = findMin(numbers);

    showResult(
        `Max: ${max} | Min: ${min}`,
        "#27ae60"
    );
}

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}