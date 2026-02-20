document.getElementById("checkButton").addEventListener("click", () => {
  const number = Number(document.getElementById("numberInput").value);

  if (!Number.isInteger(number)) {
    return showResult("Please enter a valid number", "red");
  }

  const strategies = {
    zero: () => ({ message: "0 is neither odd nor even", color: "#666" }),
    even: () => ({ message: `${number} is Even ✌️`, color: "#2980b9" }),
    odd: () => ({ message: `${number} is Odd 👆`, color: "#8e44ad" })
  };

  const type =
    number === 0
      ? "zero"
      : number % 2 === 0
      ? "even"
      : "odd";

  const resultData = strategies[type]();
  showResult(resultData.message, resultData.color);
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
