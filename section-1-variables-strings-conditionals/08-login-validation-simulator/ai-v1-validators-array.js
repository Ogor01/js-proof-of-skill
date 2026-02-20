const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password123";

document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value;

  const validators = [
    {
      test: () => !username || !password,
      message: "Please fill in all fields"
    },
    {
      test: () => username.length < 3,
      message: "Username must be at least 3 characters"
    },
    {
      test: () => password.length < 6,
      message: "Password must be at least 6 characters"
    }
  ];

  const error = validators.find(rule => rule.test());
  if (error) return showResult(error.message, "red");

  const isValid =
    username === VALID_USERNAME && password === VALID_PASSWORD;

  showResult(
    isValid
      ? `✅ Login Successful! Welcome, ${username}!`
      : "❌ Invalid username or password",
    isValid ? "#27ae60" : "red"
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
