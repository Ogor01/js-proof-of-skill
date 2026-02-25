const VOTING_AGE = 18;

document.getElementById("checkButton").addEventListener("click", handleCheck);

function handleCheck() {
    const input = document.getElementById("ageInput").value.trim();
    const age = parseInt(input);

    if (input === "" || isNaN(age)) {
        return show("Please enter a valid age", "red");
    }

    if (age < 0) {
        return show("Age cannot be negative", "red");
    }

    const { message, color } = evaluateAge(age);
    show(message, color);
}

function evaluateAge(age) {
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

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
