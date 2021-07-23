
let hihihi;


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


const operators = document.querySelectorAll('#operators button');



const digits = document.querySelectorAll('#digits button');
digits.forEach(button => 
    button.addEventListener('mousedown', function(e) {
        hihihi = true;
        console.log(hihihi);
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
        if(e.target === dot) {
            display.textContent = display.textContent.concat('.');
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


let a = parseFloat(display.textContent);
let b = parseFloat(display.textContent);
let result;




let operator1;



operators.forEach(operator => operator.addEventListener('mousedown', function(event) {
    b = parseFloat(display.textContent);


if(operator1 == 'plus' && hihihi != false) {
     result = operate(a,plus,b);
     display.textContent = result;
     
    
}

else if (operator1 == 'per' && hihihi != false) {
    result = operate(a,per,b);
     display.textContent = result;
     

}

else if ( operator1 == 'divide' && hihihi != false) {
    result = operate(a,division,b);
    display.textContent = result;
    
}

else if ( operator1 == 'minus' && hihihi != false) {
    result = operate(a,minus,b);
    display.textContent = result;
    
}    




a = parseFloat(display.textContent);
console.log('first number is ' + a);
display.textContent = '';

    if(event.target.id === 'plus') {
        
          operator1 = 'plus';     
    }

    else if(event.target.id === 'divide') {      
          operator1 = 'divide';
    }

    else if(event.target.id === 'per') {   
          operator1 = 'per';
    }

    else {
          operator1 = 'minus';
    }

}))




equal.addEventListener('mousedown', function(){

    b = parseFloat(display.textContent);
    console.log('second number is ' + b);
    hihihi = false;
    console.log(hihihi);

    if(operator1 === 'plus') {

        result = operate(a,plus,b);
        display.textContent = result;
        console.log('result is ' + result);
    }

    else if(operator1 === 'divide') {
        result = operate(a,division,b);
        display.textContent = result;
        a = result;
    
    }

    else if(operator1 === 'per') {
        result = operate(a,per,b);
        display.textContent = result;     
        a = result;
    }
    
   else { 
    result = operate(a,minus,b);
    display.textContent = result;   
    a = result;
}

    })