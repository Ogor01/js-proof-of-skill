const tabs = document.querySelectorAll(".tab");
const resultDiv = document.getElementById("result");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        resultDiv.textContent = "";
    });
});

document.getElementById("calculateButton").addEventListener("click", () => {
    const principal = Number(document.getElementById("principalInput").value);
    const rate = Number(document.getElementById("rateInput").value);
    const time = Number(document.getElementById("timeInput").value);

    if ([principal, rate, time].some(v => v <= 0 || isNaN(v))) {
        return show("Please enter valid positive numbers", "red");
    }

    const activeTab = document.querySelector(".tab.active").dataset.mode;

    if (activeTab === "simple") {
        const interest = (principal * rate * time) / 100;
        const total = principal + interest;
        show(`Simple Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`, "#27ae60");
    } else {
        const total = principal * (1 + rate / 100) ** time;
        const interest = total - principal;
        show(`Compound Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`, "#2980b9");
    }
});

function show(message, color) {
    resultDiv.textContent = message;
    resultDiv.style.color = color;
}
