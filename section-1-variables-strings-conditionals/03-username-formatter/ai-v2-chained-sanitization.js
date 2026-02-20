document.getElementById("formatButton").addEventListener("click", () => {
  const input = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  if (!input.trim()) {
    result.textContent = "Please enter a name";
    result.style.color = "red";
    return;
  }

  const formatted = input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")   // remove special characters
    .replace(/\s+/g, "_");

  result.textContent = `@${formatted}`;
  result.style.color = "#27ae60";
});
