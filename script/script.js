const current = document.getElementById('current');
const zero = document.getElementById('zero');
const clr = document.getElementById('clr');
const del = document.getElementById('del');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const moosic = document.getElementById('moosic');

//empty object used to hold user-entered numbers and operators
//this object is modified by the code below to create/modify/delete four key:value pairs
//"numOne", "operand", "numTwo" and one that cannot be modified, "product".
let object = {
}

//buttons 1-9 have the same code to determine which object key to add the number to
//this loops through 1-9 buttons in the DOM and adds an event listener to execute addNumber on click
//event listener callback provides the text content of the div clicked. This is passed to addNumber()
//this prevents having to add an event listener and function for each button 1-9. Saves ~170 lines of repetetive code
let numButtons = document.getElementsByClassName("button-number");
        for (let i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener("click", (e) => {
            addNumber(e.target.textContent);
        })
    }

//same applies to the four operators
let operatorButtons = document.getElementsByClassName("button-operator");
        for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", (e) => {
            addOperator(e.target.textContent);
        })
    }

//**zero button**
//different from 1 through 9 as it does not allow repetition if number is already zero
zero.addEventListener('click', addZero);

function addZero() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [0];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        if(!(object.numOne[0] == 0) && (object.numOne.length < 10)) {
        object["numOne"] += [0];
        current.textContent = object.numOne;
    }
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [0];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
        if(!(object.numTwo[0] == 0) && (object.numTwo.length < 10)) { 
        object["numTwo"] += [0];
        current.textContent = object.numTwo;
    }
    }
  }

//**buttons 1 through 9**
//Uses event listener text content to fill in number clicked
//Allows a maximum of 10 values to be entered
function addNumber(e) {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [e];
    current.textContent = object.numOne;
    } else if (!('operand' in object) && (object.numOne.length < 10)) {
        object["numOne"] += [e];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [e];
        current.textContent = object.numTwo;
    } else if (('numTwo' in object) && (object.numTwo.length < 10)){
         object["numTwo"] += [e];
         current.textContent = object.numTwo;
    }
  }
  
//**Operator function**
function addOperator(e) {
    if (('product' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.product, object.operand, object.numTwo);
        current.textContent = object.product + e;
        object['operand'] = e;
    } else if (('numOne' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
        current.textContent = object.product + e;
        object['operand'] = e;
    }
    else if(!('numOne' in object) && !('product' in object)) {
        return false;
    } else {
    if('numOne' in object) {
       object['operand'] = e;
       current.textContent = object.numOne + e; 
    } else {
        current.textContent = object.product + e;
        object['operand'] = e;
    } 
}
}

//Decimal point listener and function. Only adds one decimal point to a number.
point.addEventListener('click', addPoint)

function addPoint() {
    if (!('numOne' in object) && !('product' in object)) {
        object["numOne"] = "0.";
        current.textContent = object.numOne;
    } else if (('numOne' in object) && (!('operand' in object))) {
        if(!(object.numOne.includes('.'))) {
            object["numOne"] += ["."];
            current.textContent = object.numOne;
        }      
    } else if(('numOne' in object) && ('operand' in object) && (!('numTwo' in object))) {
        object["numTwo"] = "0.";
        current.textContent = object.numTwo;
    } else if ('numTwo' in object) {
        if(!(object.numTwo.includes('.'))) {
        object["numTwo"] += ["."];
        current.textContent = object.numTwo;
        }
    } else if(('product' in object) && ('operand' in object) && (!('numTwo' in object))) {
        object["numTwo"] = "0.";
        current.textContent = object.numTwo; 
    } 
    }

//function to delete last entry for numbers and operators only
del.addEventListener('click', deleteLast)

function deleteLast() {
    if (('numOne' in object) && (!('operand' in object))) {
        let newString = object.numOne.slice(0, -1); 
        object.numOne = newString;
        current.textContent = object.numOne;
    } else if (('numOne' in object) && ('operand' in object) && (!('numTwo' in object))) {
        delete object.operand;
        current.textContent = object.numOne;
    } else if (('operand' in object) && ('numTwo' in object)) {
        let newString = object.numTwo.slice(0, -1); 
        object.numTwo = newString;
        current.textContent = object.numTwo;
    }  
    }

//Clear button event listener and function to clear the calculator
clr.addEventListener('click', clearAll)

function clearAll() {
    delete object.numOne;
    delete object.operand;
    delete object.numTwo;
    delete object.product;
    current.textContent = "";
}

//Equals button event listener and equals function. 
//Calculation only happens if there is a complete argument (a) + (operand) + (b)
equals.addEventListener('click', selectEquals);

function selectEquals () {
    if (!('numTwo' in object)) {
        return false;
    } else if (!('product' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
        playMoosic();
    } else {
        operate(object.product, object.operand, object.numTwo);
        playMoosic();
    }
}

//**Arithmetic functions**

//Operate function is called in each operand function and by the equals function
//It selects the appropriate arithmetic function above based on operand selected
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

//Core arithmetic functions. Results are to two decimal places with no trailing zeros.
//These are called by the operate() function above.
function addition (a, b) {
    let result = Number(a) + Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operand;
}

function subtraction (a, b) {
    let result = Number(a) - Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operand;
}

function multiplication (a, b) {
    let result = Number(a) * Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operand;
}

function division (a, b) {
    let result = Number(a) / Number(b);
    current.textContent = result.toFixed(2).replace(/\.?0+$/, "");
    object['product'] = result.toFixed(2).replace(/\.?0+$/, "");
    delete object.numOne;
    delete object.numTwo;
    delete object.operand;
}

    //**For fun**
    //plays cow moo when equals button pressed AND a calculation is performed
    function playMoosic() {
        moosic.play()
    }    