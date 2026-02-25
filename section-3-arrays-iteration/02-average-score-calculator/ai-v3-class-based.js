class GradeCalculator {
    constructor(scores) {
        this.scores = scores;
    }

    getAverage() {
        const total = this.scores.reduce((a, b) => a + b, 0);
        return total / this.scores.length;
    }

    getGrade(average) {
        if (average >= 90) return { label: "A", color: "#27ae60" };
        if (average >= 80) return { label: "B", color: "#2980b9" };
        if (average >= 70) return { label: "C", color: "#f39c12" };
        if (average >= 60) return { label: "D", color: "#e67e22" };
        return { label: "F", color: "#e74c3c" };
    }
}

document.getElementById("calculateButton").addEventListener("click", () => {
    const input = scoresInput.value.trim();

    if (!input) {
        return output("Please enter some scores", "red");
    }

    const scores = input.split(",").map(s => Number(s.trim()));

    if (scores.some(s => isNaN(s) || s < 0 || s > 100)) {
        return output("Scores must be valid numbers between 0 and 100", "red");
    }

    const calculator = new GradeCalculator(scores);
    const average = calculator.getAverage();
    const grade = calculator.getGrade(average);

    output(
        `Scores: [${scores.join(", ")}] | Average: ${average.toFixed(2)} — ${grade.label}`,
        grade.color
    );
});

function output(message, color) {
    result.textContent = message;
    result.style.color = color;
}
