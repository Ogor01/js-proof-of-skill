document.getElementById("calculateButton").addEventListener("click", handleAverage);

function handleAverage() {
    const raw = scoresInput.value.trim();

    if (raw === "") {
        return show("Please enter some scores", "red");
    }

    const parts = raw.split(",");
    const scores = [];

    for (const part of parts) {
        const value = parseFloat(part.trim());

        if (isNaN(value)) {
            return show("Invalid number detected", "red");
        }

        if (value < 0 || value > 100) {
            return show("Scores must be between 0 and 100", "red");
        }

        scores.push(value);
    }

    let total = 0;
    for (const score of scores) {
        total += score;
    }

    const average = total / scores.length;
    const grade = determineGrade(average);

    show(
        `Scores: [${scores.join(", ")}] | Average: ${average.toFixed(2)} — ${grade.label}`,
        grade.color
    );
}

function determineGrade(avg) {
    if (avg >= 90) return { label: "A", color: "#27ae60" };
    if (avg >= 80) return { label: "B", color: "#2980b9" };
    if (avg >= 70) return { label: "C", color: "#f39c12" };
    if (avg >= 60) return { label: "D", color: "#e67e22" };
    return { label: "F", color: "#e74c3c" };
}

function show(message, color) {
    result.textContent = message;
    result.style.color = color;
}
