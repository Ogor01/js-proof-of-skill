document.getElementById("countButton").addEventListener("click", countVowels);

function countVowels() {
    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        showResult("Please enter some text", "red");
        return;
    }

    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }

    showResult(
        `"${text}" contains ${count} vowel${count !== 1 ? "s" : ""}`,
        "#27ae60"
    );
}

function showResult(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}