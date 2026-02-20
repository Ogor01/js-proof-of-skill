document.getElementById("convertButton").addEventListener("click", () => {
  const input = document.getElementById("tempInput").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  const conversion = convertTemperature(Number(input), fromUnit, toUnit);

  result.textContent = conversion.message;
  result.style.color = conversion.color;
});

function convertTemperature(temp, fromUnit, toUnit) {
  if (Number.isNaN(temp)) {
    return { message: "Please enter a valid temperature", color: "red" };
  }

  if (fromUnit === toUnit) {
    return {
      message: `${temp}° — same unit, no conversion needed`,
      color: "#666"
    };
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

  const celsius = toCelsius[fromUnit](temp);
  const converted = fromCelsius[toUnit](celsius);

  return {
    message: `${temp}° ${fromUnit} = ${converted.toFixed(2)}° ${toUnit}`,
    color: "#27ae60"
  };
}
