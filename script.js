


//QUERY SELECTORS FOR BUTTONS

const display = document.querySelector('#display');
const plus = document.querySelector('#plus');
const per = document.querySelector('#per');
const minus = document.querySelector('#minus');
const division = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const dot = document.querySelector('#dot');
const clear = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');






const operators = document.querySelectorAll('#operators button');

//switchOperatorOff sets a boolean and tell the calculator
// no to listen to operator buttons being pressed
// multiple times in a row.

let switchOperatorsOff;


// toggleOperator ALLOWS ME TO SET A BOOLEAN AND TELL 
// THE CALCULATOR HOW TO MAKE A CHOICE 
// BETWEEN THE FIRST OPERATOR OF A SEQUENCE
// AND THE SECOND ONE (3+3*5: FIRST PLUS HAS A DIFFERENT LOGIC
// FROM THE SECOND MULTIPLICATION OPERATOR). 

let toggleOperator;

// equalActive SETS A BOOLEAN WHICH MAKES THE CALCULATOR
// TELL WHEN THE EQUAL BUTTON IS ACTIVE AND WHEN NOT.
let equalActive;

//FUNCTION FOR DIGITS: THESE FUNCTIONS POPULATE THE DISPLAY.

const digits = document.querySelectorAll('#digits button');

digits.forEach(button => 
    button.addEventListener('mousedown', function(e) {

        

        if(display.textContent.length < 13) {
        switchOperatorsOff = false;
        if(Number.isInteger(a) || a % 1 != 0) {
            equalActive = true;
        }
        toggleOperator = true;
        if(e.target === one) {
            display.textContent = display.textContent.concat(1);
        }
        if(e.target === two) {
            display.textContent = display.textContent.concat(2);
        }
        if(e.target === three) {
            display.textContent = display.textContent.concat(3);
        }
        if(e.target === four) {
            display.textContent = display.textContent.concat(4);
        }
        if(e.target === five) {
            display.textContent = display.textContent.concat(5);
        }
        if(e.target === six) {
            display.textContent = display.textContent.concat(6);
        }
        if(e.target === seven) {
            display.textContent = display.textContent.concat(7);
        }
        if(e.target === eight) {
            display.textContent = display.textContent.concat(8);
        }
        if(e.target === nine) {
            display.textContent = display.textContent.concat(9);
        }
        if(e.target === zero) {
            display.textContent = display.textContent.concat(0);
        }
        if(e.target === dot && !display.textContent.includes('.')) {
            display.textContent = display.textContent.concat('.');
        }

        
    }

    }));

    
   // CLEAR BUTTON 

 clear.addEventListener('mousedown', function() {
     display.textContent = '';
     a = null;
     b = null;
     operator1 = '';
     operator = '';
 });

// DELETE BUTTON
 deleteBtn.addEventListener('mousedown', function() {
     let str = display.textContent;
    let newStr = str.substring(0,str.length -1);
    display.textContent = newStr;

    if(display.textContent == '') {
        a = null;
     b = null;
     operator1 = '';
     operator = '';
    }
 })


 // IT WORKS ALSO WITH KEYS
 
 window.addEventListener('keydown', function(e) {
     if (/^[0-9]+$/i.test(e.key) === true && display.textContent.length < 13)
     {display.textContent = display.textContent.concat(e.key);}
 });


 window.addEventListener('keydown', function(e) {
     if(e.key === 'Backspace') {
        let str = display.textContent;
        let newStr = str.substring(0,str.length -1);
        display.textContent = newStr;
    
        if(display.textContent == '') {
            a = null;
         b = null;
         operator1 = '';
         operator = '';
        }
     }
 })


 // BASIC OPERATIONS FUNCTIONS


function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) 
{  
    return a/b;
}

// FUNCTION operate() IS THE VERY ENGINE OF THE CALCULATOR

function operate(a, operator, b) {
    
    if (operator == plus) {
        return add(a,b);
    }

    if (operator == minus) {
        return subtract(a,b);
    }

    if(operator == per) {
        return multiply(a,b);
    }

    if(operator == division) {
        return divide(a,b);
    }
}

// a, b AND result STORE THE DISPLAY CONTENT AND 
// PASS THE VALUE TO THE OPERATE FUNCTION

let a = parseFloat(display.textContent);
let b = parseFloat(display.textContent);
let result;

//operator1 STORES THE OPERATOR CHOICE.
let operator1;



//OPERATORS CODE

operators.forEach(operator => operator.addEventListener('mousedown', function(event) {
    b = parseFloat(display.textContent);
    
    
    // THIS PART MAKES THE CALCULATOR STORE
    // THE RESULT FOR THE NEXT OPERATION.
    // IN FACT, THIS PART OF CODE MAKES CHAINED OPERATIONS
    // POSSIBLE
if (switchOperatorsOff == false)
 
{

if(operator1 == 'plus' && toggleOperator != false) {
     result = operate(a,plus,b);
     display.textContent = result;
     switchOperatorsOff = true;
}

else if (operator1 == 'per' && toggleOperator != false) {
    result = operate(a,per,b);
     display.textContent = result;
     switchOperatorsOff = true;
}

else if ( operator1 == 'divide' && toggleOperator != false) {
    result = operate(a,division,b);
    display.textContent = result;
    switchOperatorsOff = true;
}

else if ( operator1 == 'minus' && toggleOperator != false) {
    result = operate(a,minus,b);
    display.textContent = result;
    switchOperatorsOff = true;
}    


//THIS PART OF CODE MAKES THE OPERATOR CHOICE BE STORED


a = parseFloat(display.textContent);
console.log('first number is ' + a);
display.textContent = '';

    if(event.target.id === 'plus') {
        
          operator1 = 'plus';    
          switchOperatorsOff = true; 
    }

    else if(event.target.id === 'divide') {      
          operator1 = 'divide';
          switchOperatorsOff = true;
    }

    else if(event.target.id === 'per') {   
          operator1 = 'per';
          switchOperatorsOff = true;
    }

    else {
          operator1 = 'minus';
          switchOperatorsOff = true;
    }
}
}))



// THIS PART MAKES THE RESULT DISPLAY WHEN EQUAL IS
// PRESSED


equal.addEventListener('mousedown', function(){

   

    b = parseFloat(display.textContent);
    console.log('second number is ' + b);
    toggleOperator = false;

    if(isNaN(a)) {
        display.textContent = '';
        a = null;
        b = null;
        operator1 = '';
        operator = '';
    }


    if(equalActive == true) {

    
    if(operator1 === 'plus') {

        result = operate(a,plus,b);
        console.log('result is ' + result);
        if(!Number.isInteger(result)) {
            display.textContent = result.toFixed(3);
            equalActive=false;
        } else if(result > 9999999999999) {
            display.textContent = 'nope';
            equalActive=false;
        } else {
            display.textContent = result;
            equalActive = false;
        }
        
    }

    else if(operator1 === 'divide') {
       
        if (b === 0) {
            alert('Nope! You can\'t divide by 0. Press \'clear\' to start again!    💩💩💩💩💩💩💩');
        
        }
        result = operate(a,division,b);
        console.log('result is ' + result);
       
        if(!Number.isInteger(result)) {
            display.textContent = result.toFixed(3);
            equalActive=false;
        } else if(result > 9999999999999) {
            display.textContent = 'nope';
            equalActive=false;
        } else {
            display.textContent = result;
            equalActive=false;
        }

    }

    else if(operator1 === 'per') {
        result = operate(a,per,b);
        console.log('result is ' + result);  
        if(!Number.isInteger(result)) {
            display.textContent = result.toFixed(3);
            equalActive=false;
        } else if(result > 9999999999999) {
            display.textContent = 'nope';
            equalActive=false;
        }else {
            display.textContent = result;
            equalActive=false;
        }
    }
    
   else { 
    result = operate(a,minus,b);
    console.log('result is ' + result);
    if(!Number.isInteger(result)) {
        display.textContent = result.toFixed(3);
        equalActive=false;
    } else if(result > 9999999999999) {
        display.textContent = 'nope';
        equalActive=false;
    }   else {
        display.textContent = result;
        equalActive=false;
    }
    
}}

    })