document.getElementById("checkButton").addEventListener("click", () => {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("result");

  if (isNaN(age) || age < 0) {
    result.textContent = "Please enter a valid age";
    result.style.color = "red";
    return;
  }

  const categories = [
    { max: 12, label: "Child 🧒", color: "#3498db" },
    { max: 19, label: "Teenager 🧑", color: "#9b59b6" },
    { max: 64, label: "Adult 👨", color: "#27ae60" }
  ];

  for (let category of categories) {
    if (age <= category.max) {
      result.textContent = category.label;
      result.style.color = category.color;
      return;
    }
  }

  result.textContent = "Senior 👴";
  result.style.color = "#e67e22";
});
