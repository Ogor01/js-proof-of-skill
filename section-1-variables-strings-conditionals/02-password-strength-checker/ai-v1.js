document.getElementById("checkButton").addEventListener("click", () => {
  const password = document.getElementById("passwordInput").value;
  const result = document.getElementById("result");

  if (password.trim() === "") {
    updateResult("Please enter a password", "red");
    return;
  }

  const rules = [
    () => password.length >= 8,
    () => /[a-z]/.test(password),
    () => /[A-Z]/.test(password),
    () => /[0-9]/.test(password),
    () => /[!@#$%^&*]/.test(password)
  ];

  const strength = rules.reduce((score, rule) => {
    return rule() ? score + 1 : score;
  }, 0);

  evaluateStrength(strength);

  function evaluateStrength(score) {
    if (score <= 1) updateResult("Weak 🔴", "#e74c3c");
    else if (score <= 3) updateResult("Fair 🟡", "#f39c12");
    else if (score === 4) updateResult("Strong 🟢", "#27ae60");
    else updateResult("Very Strong 💪", "#16a085");
  }

  function updateResult(text, color) {
    result.textContent = text;
    result.style.color = color;
  }
});
