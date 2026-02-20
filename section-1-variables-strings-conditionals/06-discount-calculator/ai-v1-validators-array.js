document.getElementById("calculateButton").addEventListener("click", () => {
  const price = Number(document.getElementById("priceInput").value);
  const discount = Number(document.getElementById("discountInput").value);

  const validators = [
    {
      test: () => !Number.isFinite(price) || !Number.isFinite(discount),
      message: "Please enter both price and discount"
    },
    {
      test: () => price <= 0,
      message: "Price must be greater than 0"
    },
    {
      test: () => discount < 0 || discount > 100,
      message: "Discount must be between 0 and 100"
    }
  ];

  const error = validators.find(v => v.test());
  if (error) return showResult(error.message, "red");

  const discountAmount = price * (discount / 100);
  const finalPrice = price - discountAmount;

  showResult(
    `Original: $${price.toFixed(2)} | Saved: $${discountAmount.toFixed(2)} | Final: $${finalPrice.toFixed(2)}`,
    "#27ae60"
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
