

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
let toggleOperator;
let equalActive;
let toggleClear;

let switchOperatorsOff;
const digits = document.querySelectorAll('#digits button');

digits.forEach(button => 
    button.addEventListener('mousedown', function(e) {

        

        if(display.textContent.length <= 12 ) {

        switchOperatorsOff = false;

        

        if(a >= 0 || a <= 0) {
            equalActive = true;
        }

        toggleOperator = true;

        if (display.textContent == result && result != 0) {
                operator1 = '';
        }

       
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
  
 clear.addEventListener('mousedown', function() {

     display.textContent = '';
     a === false;
     b === false;
     result === false;
     operator1 = '';
     switchOperatorsOff = true;
     toggleOperator === false;
     equalActive === false;
     toggleClear = true;
    
    
 });

 deleteBtn.addEventListener('mousedown', function() {
    let str = display.textContent;
   let newStr = str.substring(0,str.length -1);
   display.textContent = newStr;

   if(display.textContent.length == 0) {
     a === false;
     b === false;
     result === false;
     operator1 = '';
     switchOperatorsOff = true;
     toggleOperator === false;
     equalActive === false;
     toggleClear = true;
   }
})

 
 window.addEventListener('keydown', function(e) {

    switchOperatorsOff = false;

        

        if(a >= 0 || a <= 0) {
            equalActive = true;
        }

        toggleOperator = true;

        if (display.textContent == result && result != 0) {
                operator1 = '';
        }
   
     if (/^[0-9]+$/i.test(e.key) === true && display.textContent.length <= 12 )
     {display.textContent = display.textContent.concat(e.key);}
 });

 window.addEventListener('keydown', function(e) {
   if(e.key == 'Backspace') {
    let str = display.textContent;
    let newStr = str.substring(0,str.length -1);
    display.textContent = newStr;
 
    if(display.textContent.length == 1) {
     a === false;
     b === false;
     result === false;
     operator1 = '';
     switchOperatorsOff = true;
     toggleOperator === false;
     equalActive === false;
     toggleClear = true;
    }
   }
    }
);

//try experiment




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


let a = parseFloat(display.textContent);
let b = parseFloat(display.textContent);
let result;



let operator1;



operators.forEach(operator => operator.addEventListener('mousedown', function(event) {
    b = parseFloat(display.textContent);
    
if(switchOperatorsOff == false) {

if(operator1 == 'plus' && toggleOperator != false) {
     result = operate(a,plus,b);
     display.textContent = result;
     switchOperatorsOff = true;
     toggleClear = false;
     equalActive = false;
    
}

else if (operator1 == 'per' && toggleOperator != false) {
    result = operate(a,per,b);
     display.textContent = result;
     switchOperatorsOff = true;
     toggleClear = false;
     equalActive = false;
}

else if ( operator1 == 'divide' && toggleOperator != false) {
    result = operate(a,division,b);
    display.textContent = result;
    switchOperatorsOff = true;
    toggleClear = false;
    equalActive = false;
}

else if ( operator1 == 'minus' && toggleOperator != false) {
    result = operate(a,minus,b);
    display.textContent = result;
    switchOperatorsOff = true;
    toggleClear = false;
    equalActive = false;
}    




a = parseFloat(display.textContent);
console.log('first number is ' + a);
display.textContent = '';

    if(event.target.id === 'plus') {
        
          operator1 = 'plus';    
          switchOperatorsOff = true; 
          toggleClear = false;
          equalActive = false;
    }

    else if(event.target.id === 'divide') {      
          operator1 = 'divide';
          switchOperatorsOff = true;
          toggleClear = false;
          equalActive = false;
    }

    else if(event.target.id === 'per') {   
          operator1 = 'per';
          switchOperatorsOff = true;
          toggleClear = false;
          equalActive = false;
    }

    else {
          operator1 = 'minus';
          switchOperatorsOff = true;
          toggleClear = false;
          equalActive = false;
    }
}
}))






equal.addEventListener('mousedown', function(){

   

    b = parseFloat(display.textContent);
    console.log('second number is ' + b);
    toggleOperator = false;

    if(equalActive == true && toggleClear == false) {

    
    if(operator1 === 'plus') {

        result = operate(a,plus,b);
        console.log('result is ' + result);
        if(!Number.isInteger(result)) {
            display.textContent = result.toFixed(4);
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
            alert('You can\'t divide by 0. Press AC to start again.');
            
        }
        result = operate(a,division,b);
        console.log('result is ' + result);
       
        if(!Number.isInteger(result)) {
            display.textContent = result.toFixed(4);
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
            display.textContent = result.toFixed(4);
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
        display.textContent = result.toFixed(4);
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