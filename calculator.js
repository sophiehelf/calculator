//var firstNumber = 0;
//var nextNumber = 0;
var toSquish = [];
var toCompute = [];
var operandClicked;
var operandPushes = 0;

var digit = document.getElementsByClassName("num");

var operand = document.getElementsByClassName("operand");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var divide = document.getElementById("divide");


// log digit + push to array

function logIt(){
  var digitToPush = this.innerText;
  toSquish.push(digitToPush);
  console.log(toSquish);
}

for (var i = 0; i < digit.length; i++){
  digit[i].onclick = logIt;
}

// on operand click
// assign specific operand to variable
// join + parsefloat digits in toSquish

function condense(){
  var number = parseFloat(toSquish.join(''));
  console.log(number);
  toCompute.push(number);
  toSquish = [];
  console.log(toSquish);
  
  operandPushes++;
}

for (var i = 0; i < operand.length; i++) {
  operand[i].onclick = condense;
}

// computational stuff innit



//// begin the while loop binches 

while (toCompute.length > 0) {
  if (operandPushes > 1) {
    
  }
}