let activeMode = "simple";

document.getElementById("simpleTab").addEventListener("click", () => {
    activeMode = "simple";
    document.getElementById("simpleTab").classList.add("active");
    document.getElementById("compoundTab").classList.remove("active");
    document.getElementById("result").textContent = "";
});

document.getElementById("compoundTab").addEventListener("click", () => {
    activeMode = "compound";
    document.getElementById("compoundTab").classList.add("active");
    document.getElementById("simpleTab").classList.remove("active");
    document.getElementById("result").textContent = "";
});

document.getElementById("calculateButton").addEventListener("click", handleCalculation);

function handleCalculation() {
    const principal = parseFloat(document.getElementById("principalInput").value);
    const rate = parseFloat(document.getElementById("rateInput").value);
    const time = parseFloat(document.getElementById("timeInput").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        showResult("Please fill in all fields", "red");
        return;
    }

    if (principal <= 0 || rate <= 0 || time <= 0) {
        showResult("All values must be greater than 0", "red");
        return;
    }

    if (activeMode === "simple") {
        const interest = simpleInterest(principal, rate, time);
        const total = principal + interest;
        showResult(
            `Simple Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`,
            "#27ae60"
        );
    } else {
        const total = compoundInterest(principal, rate, time);
        const interest = total - principal;
        showResult(
            `Compound Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`,
            "#2980b9"
        );
    }
}

function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function compoundInterest(principal, rate, time) {
    return principal * Math.pow(1 + rate / 100, time);
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}