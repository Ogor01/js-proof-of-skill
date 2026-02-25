document.getElementById("calculateButton").addEventListener("click", handleSum);

function handleSum() {
    const raw = numbersInput.value.trim();

    if (raw === "") {
        return show("Please enter some numbers", "red");
    }

    const parts = raw.split(",");
    const numbers = [];

    for (const part of parts) {
        const value = parseFloat(part.trim());
        if (isNaN(value)) {
            return show("Invalid input detected", "red");
        }
        numbers.push(value);
    }

    let total = 0;
    for (const num of numbers) {
        total += num;
    }

    show(`Numbers: [${numbers.join(", ")}] | Sum: ${total}`, "#27ae60");
}

function show(message, color) {
    result.textContent = message;
    result.style.color = color;
}
