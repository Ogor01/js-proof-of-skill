document.getElementById("countButton").addEventListener("click", () => {
  const text = document.getElementById("textInput").value.trim();

  if (!text) {
    return showResult("Please enter some text", "red");
  }

  const count = [...text].reduce((total, char) => {
    return "aeiouAEIOU".includes(char) ? total + 1 : total;
  }, 0);

  showResult(
    `"${text}" contains ${count} vowel${count !== 1 ? "s" : ""}`,
    "#27ae60"
  );
});

function showResult(message, color) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.style.color = color;
}
