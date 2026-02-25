document.getElementById("findButton").addEventListener("click", handleFind);

function handleFind() {
    const input = numbersInput.value.trim();

    if (input === "") {
        return show("Please enter some numbers", "red");
    }

    const numbers = input.split(",").map(n => parseFloat(n.trim()));

    if (numbers.some(n => isNaN(n))) {
        return show("Please enter valid numbers", "red");
    }

    const largest = numbers.reduce((max, current) => {
        return current > max ? current : max;
    });

    show(`Numbers: [${numbers.join(", ")}] | Largest: ${largest}`, "#27ae60");
}

function show(message, color) {
    result.textContent = message;
    result.style.color = color;
}
