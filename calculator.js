var firstNumber = 0;
var nextNumber = 0;
var toSquish = [];
var operand;
var operandPressed = false;

var digit = document.getElementsByClassName("num");
var operand = document.getElementsByClassName("operand");

// log digit
function logIt(){
  console.log("you pushed me dude");
}

for (var i = 0; i < digit.length; i++){
  digit[i].onclick = logIt;
}

// log operand 

/////////// functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}