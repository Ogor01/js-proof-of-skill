document.getElementById("greetButton").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    return showResult("Please enter your name", "red");
  }

  const hour = new Date().getHours();

  const greetings = [
    { start: 5, end: 12, text: "Good Morning", emoji: "🌅", color: "#f39c12" },
    { start: 12, end: 17, text: "Good Afternoon", emoji: "☀️", color: "#e67e22" },
    { start: 17, end: 21, text: "Good Evening", emoji: "🌇", color: "#8e44ad" },
    { start: 21, end: 24, text: "Good Night", emoji: "🌙", color: "#2c3e50" },
    { start: 0, end: 5, text: "Good Night", emoji: "🌙", color: "#2c3e50" }
  ];

  const currentGreeting = greetings.find(g => hour >= g.start && hour < g.end);

  showResult(
    `${currentGreeting.text}, ${name}! ${currentGreeting.emoji}`,
    currentGreeting.color
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
