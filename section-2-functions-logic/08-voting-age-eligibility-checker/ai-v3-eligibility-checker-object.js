const eligibilityChecker = {
    minimumAge: 18,

    isValid(age) {
        return Number.isInteger(age) && age >= 0;
    },

    check(age) {
        if (age >= this.minimumAge) {
            return {
                message: `✅ You are eligible to vote! (Age ${age})`,
                color: "#27ae60"
            };
        }

        const remaining = this.minimumAge - age;

        return {
            message: `❌ You are not eligible yet. ${remaining} year${remaining !== 1 ? "s" : ""} to go!`,
            color: "#e74c3c"
        };
    }
};

document.getElementById("checkButton").addEventListener("click", () => {
    const age = Number(ageInput.value);

    if (!eligibilityChecker.isValid(age)) {
        return output("Please enter a valid non-negative age", "red");
    }

    const result = eligibilityChecker.check(age);
    output(result.message, result.color);
});

function output(message, color) {
    result.textContent = message;
    result.style.color = color;
}
