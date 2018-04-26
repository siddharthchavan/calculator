
var solution = false;
var arg1 = parseInt(prompt("first argument"));
var arg2 = parseInt(prompt("second argument"));
var calcFunction = prompt("calculator function: addition, subtraction, multiplication, division".toLowerCase());

function calculate () {
  if (calcFunction !== "addition" || "subtraction" || "multiplication" || "division") {
    document.write("You didn't choose a function!");
  } else if (calcFunction == "addition") {
    solution = arg1 + arg2;
  } else if (calcFunction == "subtraction") {
    solution = arg1 - arg2;
  } else if (calcFunction == "multiplication") {
    solution = arg1 * arg2;
  } else if (calcFunction == "division") {
    solution = arg1 / arg2;
  }
  document.write(solution);
}
