//var firstNumber = 0;
//var nextNumber = 0;
var toSquish = [];
var toCompute = [];
var operandClicked;
var operandPushes = 0;

var digit = document.getElementsByClassName("num");

var operand = document.getElementsByClassName("operand");


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
  console.log(toCompute);
  toSquish = [];
  operandClicked = this.innerHTML
  console.log(operandClicked);
  operandPushes++;
  console.log(operandPushes);
}

for (var i = 0; i < operand.length; i++) {
  operand[i].onclick = condense;
}

// computational stuff innit
function arithmetic(){
switch(operandClicked) {
  case "+":
    toCompute.reduce(function(a,b){
      return a+b;
    })
    break;
  case "-":
    toCompute.reduce(function(a,b){
      return a-b;
    })
    break;
  case "x":
    toCompute.reduce(function(a,b){
      return a*b;
    })
    break;
  case "÷":
    toCompute.reduce(function(a,b){
      return a/b;
    })
    break;
                     }
}
//// begin the while loop binches 

while (toCompute.length > 0) {
  if (operandPushes > 1) {
    
  }
}
