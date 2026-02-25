document.getElementById("checkButton").addEventListener("click", handleLeapYear);

function handleLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);

    if (isNaN(year)) {
        showResult("Please enter a valid year", "red");
        return;
    }

    if (year < 1) {
        showResult("Please enter a year greater than 0", "red");
        return;
    }

    if (isLeapYear(year)) {
        showResult(`${year} is a Leap Year 🗓️`, "#27ae60");
    } else {
        showResult(`${year} is not a Leap Year ❌`, "#e74c3c");
    }
}

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}