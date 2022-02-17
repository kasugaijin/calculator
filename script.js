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
const moosic = document.getElementById('moosic');

let object = {
}

//**numbers 0 through 9 listeners and functions**

zero.addEventListener('click', addZero);

function addZero() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [0];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [0];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [0];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [0];
         current.textContent = object.numTwo;
    }
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
  
two.addEventListener('click', addTwo);

function addTwo() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [2];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [2];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [2];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [2];
         current.textContent = object.numTwo;
    }
  }

three.addEventListener('click', addThree);

function addThree() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [3];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [3];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [3];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [3];
         current.textContent = object.numTwo;
    }
  }

four.addEventListener('click', addFour);

function addFour() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [4];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [4];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [4];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [4];
         current.textContent = object.numTwo;
    }
  }

  five.addEventListener('click', addFive);

  function addFive() {
      if (('product' in object) && !('operand' in object)) {
          return false;
      } else if (!('operand' in object) && !('numOne' in object)) {
      object["numOne"] = [5];
      current.textContent = object.numOne;
      } else if (!('operand' in object)) {
          object["numOne"] += [5];
          current.textContent = object.numOne;
      }
    if (!('numTwo' in object) && ('operand' in object)){
          object["numTwo"] = [5];
          current.textContent = object.numTwo;
      } else if ('numTwo' in object){
           object["numTwo"] += [5];
           current.textContent = object.numTwo;
      }
    }

six.addEventListener('click', addSix);

function addSix() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [6];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [6];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [6];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [6];
         current.textContent = object.numTwo;
    }
  }

seven.addEventListener('click', addSeven);

function addSeven() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [7];
    current.textContent = object.numOne;
    } else if (!('operand' in object)) {
        object["numOne"] += [7];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [7];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [7];
         current.textContent = object.numTwo;
    }
  }

eight.addEventListener('click', addEight);

function addEight() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [8];
    current.textContent = object.numOne;
    } else if (!('operand' in object) && (object.numOne.length < 10)) {
        object["numOne"] += [8];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [8];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [8];
         current.textContent = object.numTwo;
    }
  }

nine.addEventListener('click', addNine);

function addNine() {
    if (('product' in object) && !('operand' in object)) {
        return false;
    } else if (!('operand' in object) && !('numOne' in object)) {
    object["numOne"] = [9];
    current.textContent = object.numOne;
    } else if (!('operand' in object) && (object.numOne.length < 10)) {
        object["numOne"] += [9];
        current.textContent = object.numOne;
    }
  if (!('numTwo' in object) && ('operand' in object)){
        object["numTwo"] = [9];
        current.textContent = object.numTwo;
    } else if ('numTwo' in object){
         object["numTwo"] += [9];
         current.textContent = object.numTwo;
    }
  }

//**Operand, clear, equals, delete and decimal listeners and functions**

//plus button listener and plus function
//only inputs plus if there is a number to add to
//automatically calculates if subsequent plus operations entered without pressing equals
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

//minus button listener and minus function
//only inputs minus if there is a number to subtract from
//automatically calculates if subsequent minus operations entered without pressing equals
minus.addEventListener('click', addMinus);

function addMinus() {
    if (('product' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.product, object.operand, object.numTwo);
        current.textContent = object.product + "-";
        object['operand'] = "-";
    } else if (('numOne' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
        current.textContent = object.product + "-";
        object['operand'] = "-";
    }
    else if(!('numOne' in object) && !('product' in object)) {
        return false;
    } else {
    if('numOne' in object) {
       object['operand'] = "-";
       current.textContent = object.numOne + "-"; 
    } else {
        current.textContent = object.product + "-";
        object['operand'] = "-";
    } 
}
}

//multiply button listener and multiply function
//only inputs multiply if there is a number to subtract from
//automatically calculates if subsequent multiply operations entered without pressing equals
multiply.addEventListener('click', addMultiply);

function addMultiply() {
    if (('product' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.product, object.operand, object.numTwo);
        current.textContent = object.product + "*";
        object['operand'] = "*";
    } else if (('numOne' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
        current.textContent = object.product + "*";
        object['operand'] = "*";
    }
    else if(!('numOne' in object) && !('product' in object)) {
        return false;
    } else {
    if('numOne' in object) {
       object['operand'] = "*";
       current.textContent = object.numOne + "*"; 
    } else {
        current.textContent = object.product + "*";
        object['operand'] = "*";
    } 
}
}

//divide button listener and divide function
//only inputs divide if there is a number to subtract from
//automatically calculates if subsequent divide operations entered without pressing equals
divide.addEventListener('click', addDivide);

function addDivide() {
    if (('product' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.product, object.operand, object.numTwo);
        current.textContent = object.product + "/";
        object['operand'] = "/";
    } else if (('numOne' in object) && ('operand' in object) && ('numTwo' in object)) {
        operate(object.numOne, object.operand, object.numTwo);
        current.textContent = object.product + "/";
        object['operand'] = "/";
    }
    else if(!('numOne' in object) && !('product' in object)) {
        return false;
    } else {
    if('numOne' in object) {
       object['operand'] = "/";
       current.textContent = object.numOne + "/"; 
    } else {
        current.textContent = object.product + "/";
        object['operand'] = "/";
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
    

    //Sandbox - experimenting with getting click information from event listener call back
    //which will allow for only one function for numbers, instead of 10 functions as above
    //steps: make class for all numbers the same, use for loop to add event listener to all
    //then pass the text content into the addX function to use as the number to add
    //
    //let buttons = document.getElementById('buttons')
    //buttons.addEventListener('click', (e) => {
    //    alert(e.target.textContent);
    //})