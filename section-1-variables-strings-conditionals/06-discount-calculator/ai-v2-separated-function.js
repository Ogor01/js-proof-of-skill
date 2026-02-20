document.getElementById("calculateButton").addEventListener("click", () => {
  const price = Number(document.getElementById("priceInput").value);
  const discount = Number(document.getElementById("discountInput").value);

  const resultData = calculateDiscount(price, discount);

  const result = document.getElementById("result");
  result.textContent = resultData.message;
  result.style.color = resultData.color;
});

function calculateDiscount(price, discount) {
  if (!Number.isFinite(price) || !Number.isFinite(discount)) {
    return { message: "Please enter both price and discount", color: "red" };
  }

  if (price <= 0) {
    return { message: "Price must be greater than 0", color: "red" };
  }

  if (discount < 0 || discount > 100) {
    return { message: "Discount must be between 0 and 100", color: "red" };
  }

  const discountAmount = price * (discount / 100);
  const finalPrice = price - discountAmount;

  return {
    message: `Original: $${price.toFixed(2)} | Saved: $${discountAmount.toFixed(2)} | Final: $${finalPrice.toFixed(2)}`,
    color: "#27ae60"
  };
}
