class InterestCalculator {
    constructor(principal, rate, time) {
        this.principal = principal;
        this.rate = rate;
        this.time = time;
    }

    simple() {
        const interest = (this.principal * this.rate * this.time) / 100;
        return { interest, total: this.principal + interest };
    }

    compound() {
        const total = this.principal * (1 + this.rate / 100) ** this.time;
        return { interest: total - this.principal, total };
    }
}

let active = "simple";

document.getElementById("simpleTab").onclick = () => active = "simple";
document.getElementById("compoundTab").onclick = () => active = "compound";

document.getElementById("calculateButton").addEventListener("click", () => {
    const p = parseFloat(principalInput.value);
    const r = parseFloat(rateInput.value);
    const t = parseFloat(timeInput.value);

    if ([p, r, t].some(v => v <= 0 || isNaN(v))) {
        return display("Please enter valid positive numbers", "red");
    }

    const calc = new InterestCalculator(p, r, t);
    const result = calc[active]();

    display(
        `${active === "simple" ? "Simple" : "Compound"} Interest: $${result.interest.toFixed(2)} | Total: $${result.total.toFixed(2)}`,
        active === "simple" ? "#27ae60" : "#2980b9"
    );
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
