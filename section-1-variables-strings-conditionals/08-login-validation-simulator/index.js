const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password123";

document.getElementById("loginButton").addEventListener("click", validateLogin);

function validateLogin() {
    const username = document.getElementById("usernameInput").value.trim();
    const password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        showResult("Please fill in all fields", "red");
        return;
    }

    if (username.length < 3) {
        showResult("Username must be at least 3 characters", "red");
        return;
    }

    if (password.length < 6) {
        showResult("Password must be at least 6 characters", "red");
        return;
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        showResult("✅ Login Successful! Welcome, " + username + "!", "#27ae60");
    } else {
        showResult("❌ Invalid username or password", "red");
    }
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}