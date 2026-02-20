document.getElementById("formatButton").addEventListener("click", () => {
  const input = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  const formatted = formatUsername(input);

  if (!formatted) {
    result.textContent = "Please enter a name";
    result.style.color = "red";
    return;
  }

  result.textContent = formatted;
  result.style.color = "#27ae60";
});

function formatUsername(name) {
  if (!name || !name.trim()) return null;

  const clean = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "_");

  return "@" + clean;
}
