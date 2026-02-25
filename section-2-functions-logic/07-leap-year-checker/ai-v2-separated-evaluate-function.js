document.getElementById("checkButton").addEventListener("click", checkYear);

function checkYear() {
    const input = document.getElementById("yearInput").value.trim();
    const year = parseInt(input);

    if (input === "" || isNaN(year)) {
        return show("Please enter a valid year", "red");
    }

    if (year <= 0) {
        return show("Year must be greater than 0", "red");
    }

    const result = evaluateLeapYear(year);

    show(
        `${year} is ${result ? "" : "not "}a Leap Year`,
        result ? "#27ae60" : "#e74c3c"
    );
}

function evaluateLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
