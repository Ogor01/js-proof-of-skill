document.getElementById("greetButton").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();
  const hour = new Date().getHours();

  const greetingData = generateGreeting(name, hour);

  const result = document.getElementById("result");
  result.textContent = greetingData.message;
  result.style.color = greetingData.color;
});

function generateGreeting(name, hour) {
  if (!name) {
    return { message: "Please enter your name", color: "red" };
  }

  if (hour >= 5 && hour < 12)
    return { message: `Good Morning, ${name}! 🌅`, color: "#f39c12" };

  if (hour >= 12 && hour < 17)
    return { message: `Good Afternoon, ${name}! ☀️`, color: "#e67e22" };

  if (hour >= 17 && hour < 21)
    return { message: `Good Evening, ${name}! 🌇`, color: "#8e44ad" };

  return { message: `Good Night, ${name}! 🌙`, color: "#2c3e50" };
}
