var a;
var b;
var operand;
var answer;

//

$(".num").click(function(){
  var a = $(this).html();
  console.log(a);
})

// assign operand value to var operand

// assign second number to var b

// if operand is x, call multiply function and return result to screen div

// and so on 

// operand functions //

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