


const display = document.querySelector('#display');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const operators = document.querySelectorAll('#operators button');
const plus = document.querySelector('#plus');


const digits = document.querySelectorAll('#digits button');
digits.forEach(button => 
    button.addEventListener('mousedown', function(event) {
        if(event.target.id === '1') {
            display.textContent = display.textContent.concat(1);
        }
        if(event.target.id === '2') {
            display.textContent = display.textContent.concat(2);
        }
        if(event.target.id === '3') {
            display.textContent = display.textContent.concat(3);
        }
        if(event.target.id === '4') {
            display.textContent = display.textContent.concat(4);
        }
        if(event.target.id === '5') {
            display.textContent = display.textContent.concat(5);
        }
        if(event.target.id === '6') {
            display.textContent = display.textContent.concat(6);
        }
        if(event.target.id === '7') {
            display.textContent = display.textContent.concat(7);
        }
        if(event.target.id === '8') {
            display.textContent = display.textContent.concat(8);
        }
        if(event.target.id === '9') {
            display.textContent = display.textContent.concat(9);
        }
        if(event.target.id === '0') {
            display.textContent = display.textContent.concat(0);
        }
      
    

    }));
  
 clear.addEventListener('mousedown', function() {
     display.textContent = '';
     a = null;
     b = null;
     operator1 = '';
     operator = '';
 });
 
 window.addEventListener('keydown', function(e) {
     if (/^[0-9]+$/i.test(e.key) === true)
     {display.textContent = display.textContent.concat(e.key);}
 });

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

function divide(a,b) {
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






operators.forEach(operator => operator.addEventListener('mousedown', function(event) {

    let a = display.textContent;
    let operator = event.target.innerHTML;
    display.textContent = a.concat(' ' + operator);
    let b = 34;

    alert(operate(a,plus,b));

}))





