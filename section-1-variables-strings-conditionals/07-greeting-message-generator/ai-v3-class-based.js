class GreetingGenerator {
  constructor(name) {
    this.name = name.trim();
    this.hour = new Date().getHours();
  }

  validate() {
    return this.name.length > 0;
  }

  getGreeting() {
    if (this.hour >= 5 && this.hour < 12)
      return { text: "Good Morning", emoji: "🌅", color: "#f39c12" };

    if (this.hour >= 12 && this.hour < 17)
      return { text: "Good Afternoon", emoji: "☀️", color: "#e67e22" };

    if (this.hour >= 17 && this.hour < 21)
      return { text: "Good Evening", emoji: "🌇", color: "#8e44ad" };

    return { text: "Good Night", emoji: "🌙", color: "#2c3e50" };
  }
}

document.getElementById("greetButton").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value;
  const greeter = new GreetingGenerator(nameInput);

  if (!greeter.validate()) {
    return showResult("Please enter your name", "red");
  }

  const greeting = greeter.getGreeting();

  showResult(
    `${greeting.text}, ${greeter.name}! ${greeting.emoji}`,
    greeting.color
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
