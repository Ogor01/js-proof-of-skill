document.getElementById("gradeButton").addEventListener("click", calculateGrade);

function calculateGrade() {
    const score = parseFloat(document.getElementById("scoreInput").value);
    const result = document.getElementById("result");

    if (isNaN(score)) {
        showResult("Please enter a valid score", "red");
        return;
    }

    if (score < 0 || score > 100) {
        showResult("Score must be between 0 and 100", "red");
        return;
    }

    if (score >= 90) {
        showResult("A — Excellent! 🌟", "#27ae60");
    } else if (score >= 80) {
        showResult("B — Good Job! 👍", "#2980b9");
    } else if (score >= 70) {
        showResult("C — Average 😐", "#f39c12");
    } else if (score >= 60) {
        showResult("D — Below Average 😕", "#e67e22");
    } else {
        showResult("F — Failed 😔", "#e74c3c");
    }
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}