document.getElementById("checkButton").addEventListener("click", () => {
  const input = document.getElementById("numberInput").value;
  const resultData = checkOddEven(Number(input));

  const result = document.getElementById("result");
  result.textContent = resultData.message;
  result.style.color = resultData.color;
});

function checkOddEven(number) {
  if (!Number.isInteger(number)) {
    return { message: "Please enter a valid number", color: "red" };
  }

  if (number === 0) {
    return { message: "0 is neither odd nor even", color: "#666" };
  }

  const isEven = number % 2 === 0;

  return {
    message: `${number} is ${isEven ? "Even ✌️" : "Odd 👆"}`,
    color: isEven ? "#2980b9" : "#8e44ad"
  };
}
