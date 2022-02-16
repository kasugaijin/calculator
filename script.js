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
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [1];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [1];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [1];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [1];
         current.textContent = object.numTwo;
    }
  } 

plus.addEventListener('click', addPlus);

function addPlus() {
    if (('product' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.product, object.operand, object.numTwo);
        current.textContent = object.product + "+";
        object['operand'] = "+";
    } else if (('numOne' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
        current.textContent = object.product + "+";
        object['operand'] = "+";
    }
    else if(!('numOne' in object) && !('product' in object)) {
        return false;
    } else {
    if('numOne' in object) {
       object['operand'] = "+";
       current.textContent = object.numOne + "+"; 
    } else {
        current.textContent = object.product + "+";
        object['operand'] = "+";
    } 
}
}

point.addEventListener('click', addPoint)

function addPoint() {
    //nothing, start numOne with 0.
    //there is numOne but nothing else, and if no . exists, += to NumOne
    //there is operand but no numTwo, start numTwo with it
    //there is numTwo, if no . exists, then += to numTwo
    //product cannot be modified**
}

function deleteLast() {
    //nothing, then return false
    //there is numOne but nothing else, slice last value of numOne
    //there numOne and operand, slice operand
    //there is numTwo, slice last value of numTwo
    //product cannot be modified**
}

clr.addEventListener('click', clearAll)

function clearAll() {
    delete object.numOne;
    delete object.operand;
    delete object.numTwo;
    delete object.product;
    current.textContent = "";
}

equals.addEventListener('click', selectEquals);

function selectEquals () {
    if (!('numTwo' in object)) {
        return false;
    } else if (!('product' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
    } else {
        operate(object.product, object.operand, object.numTwo);
    }
}

//Core arithmetic functions
//to each, make the product become object.numOne to for continuity
function addition (a, b) {
  
    let result = Number(a) + Number(b);
    current.textContent = result;
    object['product'] = result;
    delete object.numOne;
    delete object.operand;
    delete object.numTwo;
}

function subtraction (a, b) {
    current.textContent = Number(a) - Number(b);
}

function multiplication (a, b) {
    current.textContentn = Number(a) * Number(b);
}

function division (a, b) {
    let result = Number(a) / Number(b);
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