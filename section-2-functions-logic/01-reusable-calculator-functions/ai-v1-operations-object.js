const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? "Division by zero is not allowed." : a / b)
};

document.querySelectorAll("[data-operation]").forEach(button => {
  button.addEventListener("click", () => {
    const operationName = button.dataset.operation;
    handleCalculation(operationName);
  });
});

function getNumbers() {
  return [
    Number(document.getElementById("num1").value),
    Number(document.getElementById("num2").value)
  ];
}

function handleCalculation(operationName) {
  const [a, b] = getNumbers();

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return showResult("Please enter valid numbers.", "#d9534f");
  }

  const result = operations[operationName](a, b);

  if (typeof result === "string") {
    showResult(result, "#d9534f");
  } else {
    showResult(`Result: ${result}`, "#28a745");
  }
}

function showResult(message, color) {
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = message;
  resultDiv.style.color = color;
}
