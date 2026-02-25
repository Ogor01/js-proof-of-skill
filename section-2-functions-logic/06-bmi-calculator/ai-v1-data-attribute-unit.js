document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const unit = tab.dataset.unit;
        const weightInput = document.getElementById("weightInput");
        const heightInput = document.getElementById("heightInput");

        weightInput.placeholder = unit === "metric" ? "Weight (kg)" : "Weight (lbs)";
        heightInput.placeholder = unit === "metric" ? "Height (cm)" : "Height (inches)";

        document.getElementById("result").textContent = "";
    });
});

document.getElementById("calculateButton").addEventListener("click", () => {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if ([weight, height].some(v => v <= 0 || isNaN(v))) {
        return display("Please enter valid positive numbers", "red");
    }

    const activeUnit = document.querySelector(".tab.active").dataset.unit;

    const bmi = activeUnit === "metric"
        ? weight / ((height / 100) ** 2)
        : (703 * weight) / (height ** 2);

    const category = getCategory(bmi);

    display(`BMI: ${bmi.toFixed(1)} — ${category.label}`, category.color);
});

function getCategory(bmi) {
    if (bmi < 18.5) return { label: "Underweight", color: "#3498db" };
    if (bmi < 25) return { label: "Normal weight", color: "#27ae60" };
    if (bmi < 30) return { label: "Overweight", color: "#e67e22" };
    return { label: "Obese", color: "#e74c3c" };
}

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
