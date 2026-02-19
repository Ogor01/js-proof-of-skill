document.getElementById("checkButton").addEventListener("click", () => {
  const password = document.getElementById("passwordInput").value;
  const result = document.getElementById("result");

  const evaluation = checkStrength(password);

  result.textContent = evaluation.message;
  result.style.color = evaluation.color;
});

function checkStrength(password) {
  if (!password.trim()) {
    return { message: "Please enter a password", color: "red" };
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*]/.test(password)) score++;

  if (score <= 1) {
    return { message: "Weak 🔴", color: "#e74c3c" };
  } else if (score <= 3) {
    return { message: "Fair 🟡", color: "#f39c12" };
  } else if (score === 4) {
    return { message: "Strong 🟢", color: "#27ae60" };
  } else {
    return { message: "Very Strong 💪", color: "#16a085" };
  }
}
