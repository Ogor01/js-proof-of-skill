document.getElementById("checkButton").addEventListener("click", () => {
    const year = Number(document.getElementById("yearInput").value);

    if (!Number.isInteger(year) || year < 1) {
        return display("Please enter a valid year greater than 0", "red");
    }

    const isLeap =
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0);

    display(
        `${year} ${isLeap ? "is a Leap Year 🗓️" : "is not a Leap Year ❌"}`,
        isLeap ? "#27ae60" : "#e74c3c"
    );
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
