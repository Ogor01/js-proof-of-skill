const leapChecker = {
    isValid(year) {
        return Number.isInteger(year) && year > 0;
    },

    check(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
};

document.getElementById("checkButton").addEventListener("click", () => {
    const year = Number(yearInput.value);

    if (!leapChecker.isValid(year)) {
        return output("Please enter a valid year greater than 0", "red");
    }

    const isLeap = leapChecker.check(year);

    output(
        `${year} ${isLeap ? "is a Leap Year 🗓️" : "is not a Leap Year ❌"}`,
        isLeap ? "#27ae60" : "#e74c3c"
    );
});

function output(message, color) {
    result.textContent = message;
    result.style.color = color;
}
