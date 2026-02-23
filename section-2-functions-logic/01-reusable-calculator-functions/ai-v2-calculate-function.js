document.querySelectorAll("[data-operation]").forEach(button => {
  button.addEventListener("click", () => {
    const operation = button.dataset.operation;
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    const resultData = calculate(a, b, operation);

    showResult(resultData.message, resultData.color);
  });
});

function calculate(a, b, operation) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return { message: "Please enter valid numbers.", color: "#d9534f" };
  }

  const math = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => (y === 0 ? null : x / y)
  };

  if (operation === "divide" && b === 0) {
    return { message: "Division by zero is not allowed.", color: "#d9534f" };
  }

  const result = math[operation](a, b);

  return { message: `Result: ${result}`, color: "#28a745" };
}

function showResult(message, color) {
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = message;
  resultDiv.style.color = color;
}
