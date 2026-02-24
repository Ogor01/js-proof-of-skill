document.getElementById("reverseButton").addEventListener("click", handleReverse);

function handleReverse() {
    const text = document.getElementById("textInput").value.trim();

    if (!text) {
        return show("Please enter some text", "red");
    }

    const reversed = [...text].reduce((acc, char) => char + acc, "");

    show(`"${reversed}"`, "#27ae60");
}

function show(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
