const bmiStrategies = {
    metric(weight, height) {
        return weight / ((height / 100) ** 2);
    },
    imperial(weight, height) {
        return (703 * weight) / (height ** 2);
    }
};

const categories = [
    { max: 18.5, label: "Underweight", color: "#3498db" },
    { max: 25, label: "Normal weight", color: "#27ae60" },
    { max: 30, label: "Overweight", color: "#e67e22" },
    { max: Infinity, label: "Obese", color: "#e74c3c" }
];

let currentUnit = "metric";

document.querySelectorAll(".tab").forEach(tab => {
    tab.onclick = () => {
        currentUnit = tab.dataset.unit;
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        result.textContent = "";
    };
});

calculateButton.onclick = () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height) {
        return show("Please fill in all fields", "red");
    }

    const bmi = bmiStrategies[currentUnit](weight, height);
    const category = categories.find(c => bmi < c.max);

    show(`BMI: ${bmi.toFixed(1)} — ${category.label}`, category.color);
};

function show(message, color) {
    result.textContent = message;
    result.style.color = color;
}
