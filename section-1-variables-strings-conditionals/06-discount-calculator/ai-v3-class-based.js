class DiscountCalculator {
  constructor(price, discount) {
    this.price = price;
    this.discount = discount;
  }

  validate() {
    if (!Number.isFinite(this.price) || !Number.isFinite(this.discount)) {
      return "Please enter both price and discount";
    }
    if (this.price <= 0) {
      return "Price must be greater than 0";
    }
    if (this.discount < 0 || this.discount > 100) {
      return "Discount must be between 0 and 100";
    }
    return null;
  }

  calculate() {
    const discountAmount = this.price * (this.discount / 100);
    return {
      discountAmount,
      finalPrice: this.price - discountAmount
    };
  }
}

document.getElementById("calculateButton").addEventListener("click", () => {
  const price = Number(document.getElementById("priceInput").value);
  const discount = Number(document.getElementById("discountInput").value);

  const calculator = new DiscountCalculator(price, discount);

  const error = calculator.validate();
  if (error) return showResult(error, "red");

  const { discountAmount, finalPrice } = calculator.calculate();

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
