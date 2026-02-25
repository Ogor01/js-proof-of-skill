const MIN_AGE = 18;

document.getElementById("checkButton").addEventListener("click", () => {
    const age = Number(document.getElementById("ageInput").value);

    if (!Number.isInteger(age) || age < 0) {
        return display("Please enter a valid non-negative age", "red");
    }

    const eligible = age >= MIN_AGE;

    const message = eligible
        ? `✅ You are eligible to vote! (Age ${age})`
        : `❌ You are not eligible yet. ${MIN_AGE - age} year${MIN_AGE - age !== 1 ? "s" : ""} to go!`;

    display(message, eligible ? "#27ae60" : "#e74c3c");
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
