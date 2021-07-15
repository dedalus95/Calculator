


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
        if(e.target === one) {
            display.textContent = display.textContent.concat('1');
        }
        if(e.target === two) {
            display.textContent = display.textContent.concat('2');
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



let operator1;
operators.forEach(operator => operator.addEventListener('mousedown', function(event) {
  
    

    if(event.target.id === 'plus') {
        a = parseFloat(display.textContent);
        console.log('first number is ' + a);
        display.textContent = '';
          operator1 = 'plus';
    }

    if(event.target.id === 'divide') {
        a = parseFloat(display.textContent);
        console.log('first number is ' + a);
        display.textContent = '';
          operator1 = 'divide';
    }

    if(event.target.id === 'per') {
        a = parseFloat(display.textContent);
        console.log('first number is ' + a);
        display.textContent = '';
          operator1 = 'per';
    }

    if(event.target.id === 'minus') {
        a = parseFloat(display.textContent);
        console.log('first number is ' + a);
        display.textContent = '';
          operator1 = 'minus';
    }
  
}));


// operators.forEach(operator => operator.addEventListener('mousedown', function(){
  
    
//     if(a && b && operator1 === 'plus') {
        
    
//            display.textContent = operate(a,plus,b);
           
    
//         }
    
    
        
  
// }));





    

equal.addEventListener('mousedown', function(){

  
    if(operator1 === 'plus') {
    b = parseFloat(display.textContent);
    
        console.log('second number is ' + b)

        return display.textContent = operate(a,plus,b);

    }


    if(operator1 === 'divide') {
        b = parseFloat(display.textContent);
        
            console.log('second number is ' + b)
    
            return display.textContent = operate(a,division,b);
    
        }

    if(operator1 === 'per') {
        b = parseFloat(display.textContent);
        
            console.log('second number is ' + b)
    
            return display.textContent = operate(a,per,b);
    
        }
    
    if(operator1 === 'minus') {
        b = parseFloat(display.textContent);
        
            console.log('second number is ' + b)
    
            return display.textContent = operate(a,minus,b);
    
        }


    

   

    });














