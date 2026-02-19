document.getElementById("checkButton").addEventListener("click", checkPasswordStrength);

function checkPasswordStrength() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");
    
    if (password === "") {
        result.textContent = "Please enter a password";
        result.style.color = "red";
        return;
    }
    
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    
    if (strength === 0 || strength === 1) {
        result.textContent = "Weak 🔴";
        result.style.color = "#e74c3c";
    } else if (strength === 2 || strength === 3) {
        result.textContent = "Fair 🟡";
        result.style.color = "#f39c12";
    } else if (strength === 4) {
        result.textContent = "Strong 🟢";
        result.style.color = "#27ae60";
    } else {
        result.textContent = "Very Strong 💪";
        result.style.color = "#16a085";
    }
}