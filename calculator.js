//var firstNumber = 0;
//var nextNumber = 0;
var toSquish = [];
var toCompute = [];
var answer = 0;
var operandPushes = 0;

var digit = document.getElementsByClassName("num");
var operand = document.getElementsByClassName("operand");
var clear = document.getElementById("clear");


// loops

for (var i = 0; i < operand.length; i++) {
  operand[i].onclick = condense;
}

for (var i = 0; i < digit.length; i++){
  digit[i].onclick = logIt;
}


// onclick functions

function clearCalculator(){
  toCompute = [];
}

function logIt(){
  var digitToPush = this.innerText;
  toSquish.push(digitToPush);
  console.log(toSquish);
}

function condense(){
  var number = parseFloat(toSquish.join(''));
  console.log(number);
  toCompute.push(number);
  console.log(toCompute);
  toSquish = [];
  
  // log operand clicked
  operandClicked = this.innerHTML
  console.log(operandClicked);
  
  // count how many times operand has been pushed
  operandPushes++;
  console.log(operandPushes);
  
  if (operandPushes > 1) {
    arithmetic();
  }
}


/// arithmetic functions

function arithmetic() {
  if(operandClicked == "+"){
    answer = toCompute[toCompute.length-2] + tocompute[toCompute.length-1];
    console.log(answer);
    console.log(toCompute);
  }
  else if(operandClicked == "-"){
    answer = toCompute[toCompute.length-2] - toCompute[toCompute.length-1];
    console.log(answer);
    console.log(toCompute);
  }
  else if (operandClicked == "x") {
    answer = toCompute[toCompute.length-2] * toCompute[toCompute.length-1];
    console.log(answer);
    console.log(toCompute);
  }
  else if (operandClicked == "÷") {
    answer = toCompute[toCompute.length-2] / toCompute[toCompute.length-1];
    console.log(answer);
    console.log(toCompute);
  }
  else if (operandClicked === "="){
    toCompute = [0];
  }
}