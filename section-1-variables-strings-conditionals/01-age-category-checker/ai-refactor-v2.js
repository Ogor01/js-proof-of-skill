document.getElementById("checkButton").addEventListener("click", function () {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("result");

  switch (true) {
    case isNaN(age):
      updateResult("Please enter a valid age", "red");
      break;

    case age < 0:
      updateResult("Age cannot be negative", "red");
      break;

    case age <= 12:
      updateResult("Child 🧒", "#3498db");
      break;

    case age <= 19:
      updateResult("Teenager 🧑", "#9b59b6");
      break;

    case age <= 64:
      updateResult("Adult 👨", "#27ae60");
      break;

    default:
      updateResult("Senior 👴", "#e67e22");
  }

  function updateResult(text, color) {
    result.textContent = text;
    result.style.color = color;
  }
});
