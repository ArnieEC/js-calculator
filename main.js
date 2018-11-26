var num1 = prompt("Enter first number");
var operator = prompt("Enter operator");
var num2 = prompt("Enter second number"); 

num1 = parseInt (num1);
num2 = parseInt (num2);

var result;

switch (operator) {

  case "*":
  result = num1 * num2;
  alert(result);
  break;
  case "/":
  result = num1 / num2;
  alert(result);
  break;
  case "-":
  result = num1 - num2;
  alert(result);
  break;
  default:
  result = num1 + num2;
  alert(result);
  break;
  }