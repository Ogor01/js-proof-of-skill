document.getElementById("checkButton").addEventListener("click", () => {
  const password = document.getElementById("passwordInput").value;
  const result = document.getElementById("result");

  if (!password.trim()) {
    setResult("Please enter a password", "red");
    return;
  }

  const veryStrong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const strong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const fair =
    /^(?=.*[a-z])(?=.*\d).{6,}$/;

  if (veryStrong.test(password)) {
    setResult("Very Strong 💪", "#16a085");
  } else if (strong.test(password)) {
    setResult("Strong 🟢", "#27ae60");
  } else if (fair.test(password)) {
    setResult("Fair 🟡", "#f39c12");
  } else {
    setResult("Weak 🔴", "#e74c3c");
  }

  function setResult(text, color) {
    result.textContent = text;
    result.style.color = color;
  }
});
