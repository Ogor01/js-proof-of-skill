let activeUnit = "metric";

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        activeUnit = tab.dataset.unit;
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById("result").textContent = "";

        if (activeUnit === "metric") {
            document.getElementById("weightInput").placeholder = "Weight (kg)";
            document.getElementById("heightInput").placeholder = "Height (cm)";
        } else {
            document.getElementById("weightInput").placeholder = "Weight (lbs)";
            document.getElementById("heightInput").placeholder = "Height (inches)";
        }
    });
});

document.getElementById("calculateButton").addEventListener("click", handleBMI);

function handleBMI() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    const height = parseFloat(document.getElementById("heightInput").value);

    if (isNaN(weight) || isNaN(height)) {
        showResult("Please enter both weight and height", "red");
        return;
    }

    if (weight <= 0 || height <= 0) {
        showResult("Values must be greater than 0", "red");
        return;
    }

    const bmi = calculateBMI(weight, height, activeUnit);
    const category = getBMICategory(bmi);

    showResult(
        `BMI: ${bmi.toFixed(1)} — ${category.label}`,
        category.color
    );
}

function calculateBMI(weight, height, unit) {
    if (unit === "metric") {
        const heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    } else {
        return (703 * weight) / (height * height);
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return { label: "Underweight", color: "#3498db" };
    if (bmi < 25) return { label: "Normal weight", color: "#27ae60" };
    if (bmi < 30) return { label: "Overweight", color: "#e67e22" };
    return { label: "Obese", color: "#e74c3c" };
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}