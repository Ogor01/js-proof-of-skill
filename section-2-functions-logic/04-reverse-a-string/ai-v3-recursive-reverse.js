document.getElementById("reverseButton").addEventListener("click", processReverse);

function processReverse() {
    const text = document.getElementById("textInput").value.trim();

    if (!text) {
        return output("Please enter some text", "red");
    }

    const reversed = reverse(text);
    output(`"${reversed}"`, "#27ae60");
}

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function output(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
