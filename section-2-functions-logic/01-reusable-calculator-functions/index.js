document
  .getElementById("addBtn")
  .addEventListener("click", () => handleCalculation(add));
document
  .getElementById("subtractBtn")
  .addEventListener("click", () => handleCalculation(subtract));
document
  .getElementById("multiplyBtn")
  .addEventListener("click", () => handleCalculation(multiply));
document
  .getElementById("divideBtn")
  .addEventListener("click", () => handleCalculation(divide));

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return a / b;
}

function getNumbers() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  return [a, b];
}

function showResult(message, color) {
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = message;
  resultDiv.style.color = color;
}

function handleCalculation(operation) {
  const [a, b] = getNumbers();
  if (isNaN(a) || isNaN(b)) {
    showResult("Please enter valid numbers.", "#d9534f");
    return;
  }
  const result = operation(a, b);
  if (typeof result === "string") {
    showResult(result, "#d9534f");
  } else {
    showResult(`Result: ${result}`, "#28a745");
  }
}

// ...existing code...

const answer = operation(a, b);

// ...existing code...
