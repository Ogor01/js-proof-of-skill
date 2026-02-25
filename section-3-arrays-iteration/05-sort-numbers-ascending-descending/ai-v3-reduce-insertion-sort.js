document.getElementById("ascButton").addEventListener("click", () => runSort(true));
document.getElementById("descButton").addEventListener("click", () => runSort(false));

function runSort(isAscending) {
    const raw = document.getElementById("numbersInput").value.trim();
    if (!raw) return output("Please enter some numbers", "red");

    const numbers = raw.split(",").map(n => parseFloat(n.trim()));
    if (numbers.some(isNaN)) {
        return output("Invalid numbers provided", "red");
    }

    const sorted = numbers.reduce((acc, num) => {
        let index = acc.findIndex(val =>
            isAscending ? num < val : num > val
        );

        if (index === -1) {
            acc.push(num);
        } else {
            acc.splice(index, 0, num);
        }

        return acc;
    }, []);

    output(
        `Original: [${numbers.join(", ")}] | Sorted: [${sorted.join(", ")}]`,
        "#27ae60"
    );
}

function output(message, color) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.style.color = color;
}
