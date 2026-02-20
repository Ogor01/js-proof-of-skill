document.getElementById("gradeButton").addEventListener("click", () => {
  const score = Number(document.getElementById("scoreInput").value);
  const result = document.getElementById("result");

  if (Number.isNaN(score)) {
    showResult("Please enter a valid score", "red");
    return;
  }

  if (score < 0 || score > 100) {
    showResult("Score must be between 0 and 100", "red");
    return;
  }

  switch (true) {
    case score >= 90:
      showResult("A — Excellent! 🌟", "#27ae60");
      break;
    case score >= 80:
      showResult("B — Good Job! 👍", "#2980b9");
      break;
    case score >= 70:
      showResult("C — Average 😐", "#f39c12");
      break;
    case score >= 60:
      showResult("D — Below Average 😕", "#e67e22");
      break;
    default:
      showResult("F — Failed 😔", "#e74c3c");
  }
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
