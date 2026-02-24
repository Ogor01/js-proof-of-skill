document.getElementById("reverseButton").addEventListener("click", () => {
    const input = document.getElementById("textInput").value.trim();

    if (!input) {
        return display("Please enter some text", "red");
    }

    const reversed = input.split("").reverse().join("");

    display(`"${reversed}"`, "#27ae60");
});

function display(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
