document.getElementById("formatButton").addEventListener("click", () => {
  const input = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  if (input.trim() === "") {
    result.textContent = "Please enter a name";
    result.style.color = "red";
    return;
  }

  let formatted = input.trim();

  formatted = formatted.toLowerCase();

  const words = formatted.split(" ");
  formatted = words.join("_");

  result.textContent = "@" + formatted;
  result.style.color = "#27ae60";
});
