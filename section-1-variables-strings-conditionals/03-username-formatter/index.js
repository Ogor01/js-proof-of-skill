document.getElementById("formatButton").addEventListener("click", formatUsername);

function formatUsername() {
    const name = document.getElementById("nameInput").value;
    const result = document.getElementById("result");

    if (name.trim() === "") {
        result.textContent = "Please enter a name";
        result.style.color = "red";
        return;
    }

    const formatted = name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");

    result.textContent = "@" + formatted;
    result.style.color = "#27ae60";
}