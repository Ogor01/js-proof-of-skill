document.getElementById("reverseButton").addEventListener("click", handleReverse);

function handleReverse() {
    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        showResult("Please enter some text", "red");
        return;
    }

    const reversed = reverseString(text);
    showResult(`"${reversed}"`, "#27ae60");
}

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}