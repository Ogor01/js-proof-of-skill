document.getElementById("checkButton").addEventListener("click", checkOddEven);

function checkOddEven() {
    const number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
        showResult("Please enter a valid number", "red");
        return;
    }

    if (number === 0) {
        showResult("0 is neither odd nor even", "#666");
        return;
    }

    if (number % 2 === 0) {
        showResult(`${number} is Even ✌️`, "#2980b9");
    } else {
        showResult(`${number} is Odd 👆`, "#8e44ad");
    }
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}