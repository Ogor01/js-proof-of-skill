document.getElementById("calculateButton").addEventListener("click", () => {
    const input = scoresInput.value.trim();

    if (!input) {
        return display("Please enter some scores", "red");
    }

    const scores = input.split(",").map(s => Number(s.trim()));

    if (scores.some(s => Number.isNaN(s))) {
        return display("Invalid numbers detected", "red");
    }

    if (scores.some(s => s < 0 || s > 100)) {
        return display("Scores must be between 0 and 100", "red");
    }

    const average = scores.reduce((a, b) => a + b, 0) / scores.length;

    const gradeScale = [
        { min: 90, label: "A", color: "#27ae60" },
        { min: 80, label: "B", color: "#2980b9" },
        { min: 70, label: "C", color: "#f39c12" },
        { min: 60, label: "D", color: "#e67e22" },
        { min: 0,  label: "F", color: "#e74c3c" }
    ];

    const grade = gradeScale.find(g => average >= g.min);

    display(
        `Scores: [${scores.join(", ")}] | Average: ${average.toFixed(2)} — ${grade.label}`,
        grade.color
    );
});

function display(message, color) {
    result.textContent = message;
    result.style.color = color;
}
