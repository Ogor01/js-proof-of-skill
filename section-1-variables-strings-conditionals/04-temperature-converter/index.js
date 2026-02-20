document.getElementById("convertButton").addEventListener("click", convertTemperature);

function convertTemperature() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid temperature";
        result.style.color = "red";
        return;
    }

    if (fromUnit === toUnit) {
        result.textContent = temp + "° — same unit, no conversion needed";
        result.style.color = "#666";
        return;
    }

    let converted;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        converted = (temp * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        converted = temp + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        converted = (temp - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        converted = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        converted = temp - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        converted = (temp - 273.15) * 9/5 + 32;
    }

    result.textContent = temp + "° " + fromUnit + " = " + converted.toFixed(2) + "° " + toUnit;
    result.style.color = "#27ae60";
}