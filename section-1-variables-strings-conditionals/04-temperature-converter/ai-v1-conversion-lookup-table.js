document.getElementById("convertButton").addEventListener("click", () => {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (Number.isNaN(temp)) {
    showResult("Please enter a valid temperature", "red");
    return;
  }

  if (fromUnit === toUnit) {
    showResult(`${temp}° — same unit, no conversion needed`, "#666");
    return;
  }

  const conversions = {
    celsius: {
      fahrenheit: t => (t * 9/5) + 32,
      kelvin: t => t + 273.15
    },
    fahrenheit: {
      celsius: t => (t - 32) * 5/9,
      kelvin: t => (t - 32) * 5/9 + 273.15
    },
    kelvin: {
      celsius: t => t - 273.15,
      fahrenheit: t => (t - 273.15) * 9/5 + 32
    }
  };

  const converted = conversions[fromUnit][toUnit](temp);

  showResult(
    `${temp}° ${fromUnit} = ${converted.toFixed(2)}° ${toUnit}`,
    "#27ae60"
  );

  function showResult(message, color) {
    result.textContent = message;
    result.style.color = color;
  }
});
