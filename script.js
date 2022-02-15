const current = document.getElementById('current');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const minus = document.getElementById('minus');
const clr = document.getElementById('clr');
const del = document.getElementById('del');
const point = document.getElementById('point');
const equals = document.getElementById('equals');

let object = {
}

one.addEventListener('click', addOne);

function addOne() {
  if (!('operand' in object)) {
    object["numOne"] = 1;
    current.textContent = object.numOne;  
  } else {
      object["numTwo"] = 1;
      current.textContent = object.numTwo;
  }
  
}

plus.addEventListener('click', addPlus);

function addPlus() {
    if(!('numOne' in object)) {
        return false;
    } else {
    object["operand"] = "+";
    current.textContent = object.numOne + "+"
}
}

equals.addEventListener('click', operate(object.numOne, object.operand, object.numTwo));



//Core arithmetic functions
//to each, make the product become object.numOne to for continuity
function addition (a, b) {
    current.textContent = a + b;
}

function subtraction (a, b) {
    current.textContent = a - b;
}

function multiplication (a, b) {
    current.textContentn = a * b;
}

function division (a, b) {
    let result = a / b;
    current.textContent = result.toFixed(2);
}

function operate(a, operator, b) {
    if (operator == "+") {
        addition(a, b);
    } else if (operator == "-") {
        subtraction(a, b);
    } else if (operator == "*") {
        multiplication(a, b);
    } else if (operator == "/" && a == 0 || b == 0) {
        current.textContent = "lulz nice try";
    } else if (operator == "/") {
        division(a, b);
    }
    }