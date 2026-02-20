document.getElementById("gradeButton").addEventListener("click", () => {
  const input = document.getElementById("scoreInput").value;
  const evaluation = calculateGrade(Number(input));

  const result = document.getElementById("result");
  result.textContent = evaluation.message;
  result.style.color = evaluation.color;
});

function calculateGrade(score) {
  if (Number.isNaN(score)) {
    return { message: "Please enter a valid score", color: "red" };
  }

  if (score < 0 || score > 100) {
    return { message: "Score must be between 0 and 100", color: "red" };
  }

  if (score >= 90) return { message: "A — Excellent! 🌟", color: "#27ae60" };
  if (score >= 80) return { message: "B — Good Job! 👍", color: "#2980b9" };
  if (score >= 70) return { message: "C — Average 😐", color: "#f39c12" };
  if (score >= 60) return { message: "D — Below Average 😕", color: "#e67e22" };

  return { message: "F — Failed 😔", color: "#e74c3c" };
}
