var firstNumber;
var nextNumber;
var toSquish = [];
var operand;
var operandPressed = false;
var finalArray = [];

// bleep bloop 

$(".num").click(function(){
  toSquish.push(($this).html());
  console.log(toSquish);
})

$(".operand").click(function(){
  var operand = $($this).html;
  var firstNum = parseFloat(toSquish.join('')); 
  finalArray.push(firstNum);
  var operandPushed = true;
});
// on operand click
// parsefloat num
// push to final array

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

// input
// select which operator
// evaluate equation

// previous input -> current input
// previous input +