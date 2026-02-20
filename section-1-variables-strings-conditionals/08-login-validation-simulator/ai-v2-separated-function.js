const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password123";

document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value.trim();
  const password = document.getElementById("passwordInput").value;

  const resultData = validateLogin(username, password);

  const result = document.getElementById("result");
  result.textContent = resultData.message;
  result.style.color = resultData.color;
});

function validateLogin(username, password) {
  if (!username || !password) {
    return { message: "Please fill in all fields", color: "red" };
  }

  if (username.length < 3) {
    return { message: "Username must be at least 3 characters", color: "red" };
  }

  if (password.length < 6) {
    return { message: "Password must be at least 6 characters", color: "red" };
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return {
      message: `✅ Login Successful! Welcome, ${username}!`,
      color: "#27ae60"
    };
  }

  return { message: "❌ Invalid username or password", color: "red" };
}

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
