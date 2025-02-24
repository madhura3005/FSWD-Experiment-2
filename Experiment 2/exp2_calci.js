const n1 = document.querySelector("#num1"); // Store input elements
const n2 = document.querySelector("#num2");
const select = document.querySelector("#operation");
const b1 = document.getElementById("calc");
const answerOutput = document.getElementById("answer"); // Get the output textarea

function calculate(num1, num2, op) {  // Function now takes numbers
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter numbers.";
    }

    if (op === "÷" && num2 === 0) { // Check for division by zero
        return "Cannot divide by zero.";
    }

    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "÷": return num1 / num2;
        case "×": return num1 * num2;
        default: return "Invalid operation"; // Handle unknown operations
    }
}


b1.addEventListener("click", () => {
    const num1 = parseFloat(n1.value); // Get values and convert
    const num2 = parseFloat(n2.value);
    const op = select.value; // Get the currently selected operation

    const result = calculate(num1, num2, op);
    answerOutput.value = result; // Display the result
});