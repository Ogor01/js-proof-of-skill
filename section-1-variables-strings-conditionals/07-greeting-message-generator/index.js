document.getElementById("greetButton").addEventListener("click", generateGreeting);

function generateGreeting() {
    const name = document.getElementById("nameInput").value.trim();
    const result = document.getElementById("result");

    if (name === "") {
        showResult("Please enter your name", "red");
        return;
    }

    const hour = new Date().getHours();
    let greeting;
    let color;

    if (hour >= 5 && hour < 12) {
        greeting = `Good Morning, ${name}! 🌅`;
        color = "#f39c12";
    } else if (hour >= 12 && hour < 17) {
        greeting = `Good Afternoon, ${name}! ☀️`;
        color = "#e67e22";
    } else if (hour >= 17 && hour < 21) {
        greeting = `Good Evening, ${name}! 🌇`;
        color = "#8e44ad";
    } else {
        greeting = `Good Night, ${name}! 🌙`;
        color = "#2c3e50";
    }

    showResult(greeting, color);
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}