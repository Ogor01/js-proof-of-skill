class Calculator {
  constructor() {
    this.operations = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => {
        if (b === 0) throw new Error("Division by zero is not allowed.");
        return a / b;
      }
    };
  }

  compute(a, b, operation) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      throw new Error("Please enter valid numbers.");
    }

    return this.operations[operation](a, b);
  }
}

const calculator = new Calculator();

document.querySelectorAll("[data-operation]").forEach(button => {
  button.addEventListener("click", () => {
    const operation = button.dataset.operation;
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    try {
      const result = calculator.compute(a, b, operation);
      showResult(`Result: ${result}`, "#28a745");
    } catch (error) {
      showResult(error.message, "#d9534f");
    }
  });
});

function showResult(message, color) {
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = message;
  resultDiv.style.color = color;
}
