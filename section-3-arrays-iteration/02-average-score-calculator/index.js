document.getElementById("calculateButton").addEventListener("click", handleAverage);

function handleAverage() {
    const input = document.getElementById("scoresInput").value.trim();

    if (input === "") {
        showResult("Please enter some scores", "red");
        return;
    }

    const scores = input.split(",").map(s => parseFloat(s.trim()));

    if (scores.some(s => isNaN(s))) {
        showResult("Please enter valid numbers separated by commas", "red");
        return;
    }

    if (scores.some(s => s < 0 || s > 100)) {
        showResult("Scores must be between 0 and 100", "red");
        return;
    }

    const average = calculateAverage(scores);
    const grade = getGrade(average);

    showResult(
        `Scores: [${scores.join(", ")}] | Average: ${average.toFixed(2)} — ${grade.label}`,
        grade.color
    );
}

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function getGrade(average) {
    if (average >= 90) return { label: "A", color: "#27ae60" };
    if (average >= 80) return { label: "B", color: "#2980b9" };
    if (average >= 70) return { label: "C", color: "#f39c12" };
    if (average >= 60) return { label: "D", color: "#e67e22" };
    return { label: "F", color: "#e74c3c" };
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}