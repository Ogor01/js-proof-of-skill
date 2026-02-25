const VOTING_AGE = 18;

document.getElementById("checkButton").addEventListener("click", handleEligibility);

function handleEligibility() {
    const age = parseInt(document.getElementById("ageInput").value);

    if (isNaN(age)) {
        showResult("Please enter a valid age", "red");
        return;
    }

    if (age < 0) {
        showResult("Age cannot be negative", "red");
        return;
    }

    const result = checkEligibility(age);
    showResult(result.message, result.color);
}

function checkEligibility(age) {
    if (age >= VOTING_AGE) {
        return {
            message: `✅ You are eligible to vote! (Age ${age})`,
            color: "#27ae60"
        };
    }

    const yearsLeft = VOTING_AGE - age;
    return {
        message: `❌ You are not eligible yet. ${yearsLeft} year${yearsLeft !== 1 ? "s" : ""} to go!`,
        color: "#e74c3c"
    };
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}