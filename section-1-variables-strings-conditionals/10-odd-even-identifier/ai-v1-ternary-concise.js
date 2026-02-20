document.getElementById("checkButton").addEventListener("click", () => {
  const number = Number(document.getElementById("numberInput").value);

  if (!Number.isInteger(number)) {
    return showResult("Please enter a valid number", "red");
  }

  if (number === 0) {
    return showResult("0 is neither odd nor even", "#666");
  }

  const isEven = number % 2 === 0;

  showResult(
    `${number} is ${isEven ? "Even ✌️" : "Odd 👆"}`,
    isEven ? "#2980b9" : "#8e44ad"
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
