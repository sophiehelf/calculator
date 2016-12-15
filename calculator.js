var a;
var b;
var toSquish = [];
var squish2 = [];
var operand;
var secondNumber = false;

// find 1st number
// how to do with more than one digit? hmmmmmmmmmmmm

$(".num").click(function(){ 
  if (secondNumber) {
    squish2.push($(this).html());
    console.log(squish2);
  }
  else {
    toSquish.push($(this).html());
    console.log(toSquish);
  }
})

// assign operand value to var operand
$(".operand").click(function(){
  var operand = $(this).html();
  var a = parseInt(toSquish.join(''));
  var secondNumber = true;
  ///
  console.log(operand);
  console.log(a);
})

 // how to differentiate between a and b? toggle switch?
// on equal-sign click: if operand is _, call ___ function and push result to screen div
$(".equal").click(function(){
  var b = parseInt(squish2.join(''));
  var a = parseInt(toSquish.join(''));
  var a;
  var secondNumber = false;
  if (operand === "+"){
    var finalSum = add(a,b);
    console.log(finalSum);
  }
  else if (operand === "–"){
    var finalSum =subtract(a, b);
    console.log(finalSum);
  }
  else if (operand === "×") {
    var finalSum = multiply(a,b);
    console.log(finalSum);
  }
  else if (operand ==="÷") {
    var finalSum = multiply(a,b);
    console.log(finalSum);
  }
})
// on equal-sign click: if operand is _, call ___ function and push result to screen div

// and so on 

//-- operand functions --//

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