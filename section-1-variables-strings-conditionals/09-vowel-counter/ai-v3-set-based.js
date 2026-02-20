document.getElementById("countButton").addEventListener("click", () => {
  const text = document.getElementById("textInput").value.trim();

  const resultData = countVowels(text);

  const result = document.getElementById("result");
  result.textContent = resultData.message;
  result.style.color = resultData.color;
});

function countVowels(text) {
  if (!text) {
    return { message: "Please enter some text", color: "red" };
  }

  const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
  let count = 0;

  for (const char of text) {
    if (vowels.has(char)) count++;
  }

  return {
    message: `"${text}" contains ${count} vowel${count !== 1 ? "s" : ""}`,
    color: "#27ae60"
  };
}
