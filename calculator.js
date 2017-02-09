var firstNumber = 0;
var nextNumber = 0;
var toSquish = [];
// var operandPressed = false;

var digit = document.getElementsByClassName("num");
var operand = document.getElementsByClassName("operand");

// log digit + push to array

function logIt(){
  var digitToPush = this.innerText;
  console.log(digitToPush);
  toSquish.push(digitToPush);
  console.log(toSquish);
}

for (var i = 0; i < digit.length; i++){
  digit[i].onclick = logIt;
}

// on operand click
// assign specific operand to variable
// join + parsefloat digits in toSquish
// this = firstnumber

function digitReduce(){
  toSquish.join('');
  console.log(toSquish.join(''));
}

for (var i = 0; i < operand.length; i++) {
  operand[i].onclick = digitReduce;
}


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