document.getElementById("checkButton").addEventListener("click", checkAge);

function checkAge() {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("result");

  if (isNaN(age)) {
    showResult("Please enter a valid age", "red");
    return;
  }

  if (age < 0) {
    showResult("Age cannot be negative", "red");
    return;
  }

  if (age <= 12) return showResult("Child 🧒", "#3498db");
  if (age <= 19) return showResult("Teenager 🧑", "#9b59b6");
  if (age <= 64) return showResult("Adult 👨", "#27ae60");

  showResult("Senior 👴", "#e67e22");
}

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
