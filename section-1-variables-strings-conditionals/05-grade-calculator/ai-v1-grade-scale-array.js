document.getElementById("gradeButton").addEventListener("click", () => {
  const score = Number(document.getElementById("scoreInput").value);
  const result = document.getElementById("result");

  if (Number.isNaN(score)) {
    return showResult("Please enter a valid score", "red");
  }

  if (score < 0 || score > 100) {
    return showResult("Score must be between 0 and 100", "red");
  }

  const gradeScale = [
    { min: 90, message: "A — Excellent! 🌟", color: "#27ae60" },
    { min: 80, message: "B — Good Job! 👍", color: "#2980b9" },
    { min: 70, message: "C — Average 😐", color: "#f39c12" },
    { min: 60, message: "D — Below Average 😕", color: "#e67e22" },
    { min: 0,  message: "F — Failed 😔", color: "#e74c3c" }
  ];

  const grade = gradeScale.find(g => score >= g.min);

  showResult(grade.message, grade.color);
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
