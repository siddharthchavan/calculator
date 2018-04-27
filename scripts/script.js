
var solution = 0;
var arg1 = prompt("first argument");
var arg2 = prompt("second argument");
var calcFunction = prompt("calculator function: add, subtract, multiply, divide");

function calculate () {
  if (calcFunction != "add" || calcFunction != "subtract" || calcFunction != "multiply" || calcFunction != "divide") {
    document.write("You didn't choose a function!");
  } else if (calcFunction == "add" || calcFunction == "subtract" || calcFunction == "multiply" || calcFunction == "divide") {
    if (calcFunction == "add") {
        solution = parseInt(arg1) + parseInt(arg2);
    } else if (calcFunction == "subtract") {
        solution = parseInt(arg1) - parseInt(arg2);
    } else if (calcFunction == "multiply") {
        solution = parseInt(arg1) * parseInt(arg2);
    } else if (calcFunction == "divide") {
        solution = parseInt(arg1) / parseInt(arg2);
    }
    document.write(solution);
  }
}

calculate()
