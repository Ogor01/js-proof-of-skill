document.getElementById("checkButton").addEventListener("click", checkAge);

function checkAge(){
    let age = parseInt(document.getElementById("ageInput").value);
    let result = document.getElementById("result");
     
    if (isNaN(age) || age === "") {
        result.textContent = "Please enter a valid age";
        result.style.color = "red";
        } else if (age < 0) {
        result.textContent = "Age cannot be negative";
        result.style.color = "red";
        } else if (age <= 12){
            result.textcontext = "Child 🧒";
            result.style.color = "#3498db";
        } else if (age <= 19){
            result.textContent = "Teenager 🧑";
            result.style.color = "#9b59b6";
        } else if (age <= 64){
            result.textContent = "Adult 👨";
            result.style.color = "#27ae60";
        } else {
            result.textContent = "Senior 👴";
            result.style.color = "#e67e22";
        }

}