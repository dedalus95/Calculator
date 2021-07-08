function add(a,b) {
   return a+b;
}

function subtract(a,b) {
    return a-b;
 }
 
 function multiply(a,b) {
    return a*b;
 }

 function divide(a,b) {
    return a/b;
 }
 

 function operate(a,operator,b) {

    if(operator === '+') {
       return add(a,b);
    }

    if(operator === '-') {
        return subtract(a,b);
    }

    if(operator === '*') {
        return multiply(a,b);
    }

    if(operator === '/') {
        return divide(a,b);
    }
        
    
 }

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
 const display = document.querySelector('#display');


one.addEventListener('click', function() {
   
        display.textContent = '1';

});

two.addEventListener('click', function() {
   
    display.textContent = '2';

});

three.addEventListener('click', function() {
   
    display.textContent = '3';

});

four.addEventListener('click', function() {
   
    display.textContent = '4';

});

five.addEventListener('click', function() {
   
    display.textContent = '5';

});

six.addEventListener('click', function() {
   
    display.textContent = '6';

});

seven.addEventListener('click', function() {
   
    display.textContent = '7';

});

eight.addEventListener('click', function() {
   
    display.textContent = '8';

});

nine.addEventListener('click', function() {
   
    display.textContent = '9';

});

zero.addEventListener('click', function() {
   
    display.textContent = '0';

});

 