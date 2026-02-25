class BMICalculator {
    constructor(weight, height, unit) {
        this.weight = weight;
        this.height = height;
        this.unit = unit;
    }

    calculate() {
        if (this.unit === "metric") {
            return this.weight / ((this.height / 100) ** 2);
        }
        return (703 * this.weight) / (this.height ** 2);
    }

    getCategory(bmi) {
        if (bmi < 18.5) return { label: "Underweight", color: "#3498db" };
        if (bmi < 25) return { label: "Normal weight", color: "#27ae60" };
        if (bmi < 30) return { label: "Overweight", color: "#e67e22" };
        return { label: "Obese", color: "#e74c3c" };
    }
}

let unit = "metric";

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        unit = tab.dataset.unit;
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        result.textContent = "";
    });
});

calculateButton.addEventListener("click", () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if ([weight, height].some(v => v <= 0 || isNaN(v))) {
        return output("Please enter valid values", "red");
    }

    const calculator = new BMICalculator(weight, height, unit);
    const bmi = calculator.calculate();
    const category = calculator.getCategory(bmi);

    output(`BMI: ${bmi.toFixed(1)} — ${category.label}`, category.color);
});

function output(message, color) {
    result.textContent = message;
    result.style.color = color;
}
