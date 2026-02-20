document.getElementById("calculateButton").addEventListener("click", calculateDiscount);

function calculateDiscount() {
    const price = parseFloat(document.getElementById("priceInput").value);
    const discount = parseFloat(document.getElementById("discountInput").value);
    const result = document.getElementById("result");

    if (isNaN(price) || isNaN(discount)) {
        showResult("Please enter both price and discount", "red");
        return;
    }

    if (price <= 0) {
        showResult("Price must be greater than 0", "red");
        return;
    }

    if (discount < 0 || discount > 100) {
        showResult("Discount must be between 0 and 100", "red");
        return;
    }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    showResult(
        `Original: $${price.toFixed(2)} | Saved: $${discountAmount.toFixed(2)} | Final: $${finalPrice.toFixed(2)}`,
        "#27ae60"
    );
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}