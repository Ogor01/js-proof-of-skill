document.getElementById("convertButton").addEventListener("click", () => {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (Number.isNaN(temp)) {
    result.textContent = "Please enter a valid temperature";
    result.style.color = "red";
    return;
  }

  if (fromUnit === toUnit) {
    result.textContent = `${temp}° — same unit, no conversion needed`;
    result.style.color = "#666";
    return;
  }

  const toCelsius = {
    celsius: t => t,
    fahrenheit: t => (t - 32) * 5/9,
    kelvin: t => t - 273.15
  };

  const fromCelsius = {
    celsius: t => t,
    fahrenheit: t => (t * 9/5) + 32,
    kelvin: t => t + 273.15
  };

  const celsiusValue = toCelsius[fromUnit](temp);
  const converted = fromCelsius[toUnit](celsiusValue);

  result.textContent =
    `${temp}° ${fromUnit} = ${converted.toFixed(2)}° ${toUnit}`;
  result.style.color = "#27ae60";
});
