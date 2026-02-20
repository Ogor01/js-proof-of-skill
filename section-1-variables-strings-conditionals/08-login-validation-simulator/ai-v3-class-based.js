class AuthSimulator {
  constructor(validUsername, validPassword) {
    this.validUsername = validUsername;
    this.validPassword = validPassword;
  }

  validateInputs(username, password) {
    if (!username || !password)
      return "Please fill in all fields";

    if (username.length < 3)
      return "Username must be at least 3 characters";

    if (password.length < 6)
      return "Password must be at least 6 characters";

    return null;
  }

  authenticate(username, password) {
    return (
      username === this.validUsername &&
      password === this.validPassword
    );
  }
}

const auth = new AuthSimulator("admin", "password123");

document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value;

  const error = auth.validateInputs(username, password);
  if (error) return showResult(error, "red");

  const success = auth.authenticate(username, password);

  showResult(
    success
      ? `✅ Login Successful! Welcome, ${username}!`
      : "❌ Invalid username or password",
    success ? "#27ae60" : "red"
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
