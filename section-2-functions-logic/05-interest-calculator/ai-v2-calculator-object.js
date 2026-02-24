const calculator = {
    simple(principal, rate, time) {
        const interest = (principal * rate * time) / 100;
        return { interest, total: principal + interest };
    },
    compound(principal, rate, time) {
        const total = principal * Math.pow(1 + rate / 100, time);
        return { interest: total - principal, total };
    }
};

let mode = "simple";

document.getElementById("simpleTab").onclick = () => setMode("simple");
document.getElementById("compoundTab").onclick = () => setMode("compound");

function setMode(selected) {
    mode = selected;
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(selected + "Tab").classList.add("active");
    document.getElementById("result").textContent = "";
}

document.getElementById("calculateButton").addEventListener("click", () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);

    if (!principal || !rate || !time) {
        return showResult("Please fill in all fields correctly", "red");
    }

    const { interest, total } = calculator[mode](principal, rate, time);

    showResult(
        `${mode === "simple" ? "Simple" : "Compound"} Interest: $${interest.toFixed(2)} | Total: $${total.toFixed(2)}`,
        mode === "simple" ? "#27ae60" : "#2980b9"
    );
});

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
