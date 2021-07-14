


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
const clear = document.querySelector('#clear');


const operators = document.querySelectorAll('#operators button');



const digits = document.querySelectorAll('#digits button');
digits.forEach(button => 
    button.addEventListener('mousedown', function(e) {
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
    }));
  
 clear.addEventListener('mousedown', function() {
     display.textContent = '';
 });
 
 window.addEventListener('keydown', function(e) {
     if (/^[0-9]+$/i.test(e.key) === true)
     {display.textContent = display.textContent.concat(e.key);}
 });

//try experiment

let firstNumber;
let secondNumber;







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






operators.forEach(operator => operator.addEventListener('mousedown', function() {
    let  a = display.textContent;

    console.log('a is ' + a);

    if(plus) {
        display.textContent = '';
        let e;
        
        let b = display.textContent;    
        equal.addEventListener('mousedown', function(){
            
            

            console.log('b is ' + b);
            return display.textContent = operate(a,plus,b);

        });
    };
        
        
}));
    

















// // multiplication code

// let firstNumber1 ;
// let secondNumber1 ;

// per.addEventListener('mousedown', function() {
//     firstNumber = display.textContent;
//     // console.log('firstNumber is ' + firstNumber1);

//     if(per) {
//         display.textContent = '';
        
//     }

//     function operate() {
//         // secondNumber1 = display.textContent;
//         // console.log(secondNumber1);
//         equal.addEventListener('mousedown', function(){
//             secondNumber = display.textContent;
//             // console.log('secondNumber is ' + secondNumber1);
//             function multiply() {
//                 console.log('first number is ' + firstNumber, 'second number is ' + secondNumber);
//                 display.textContent = '';
//                 let result = parseInt(firstNumber) * parseInt(secondNumber);
//                 display.textContent = result;
//                 console.log('result is '+ result);
                 
//                 //  secondNumber1 = firstNumber1;
//                 //  if(clear) {
//                 //     secondNumber1 = firstNumber1;                
//                 //      }
//                  }
//             multiply();
//         });

//     }
//     operate();
// });


// //SUBTRACTION CODE 

// minus.addEventListener('mousedown', function() {
//     firstNumber = display.textContent;
//     console.log('firstNumber is ' + firstNumber);

//     if(minus) {
//         display.textContent = '';
        
//     }

//     function operate() {
//         secondNumber = display.textContent;
//         equal.addEventListener('mousedown', function(){
//             secondNumber = display.textContent;
//             // console.log('secondNumber is ' + secondNumber);
//             function subtract() {
//                 console.log('first number is ' + firstNumber, 'second number is ' + secondNumber);
//                 display.textContent = '';
//                  display.textContent = parseInt(firstNumber) - parseInt(secondNumber);
//                  if(clear) {
//                     firstNumber = 0;
//                     secondNumber = 0;

//                  }

                 
//             }
//             subtract();
//         });

//     }
//     operate();
// });


// //DIVISION CODE

// division.addEventListener('mousedown', function() {
//     firstNumber = display.textContent;
//     console.log('firstNumber is ' + firstNumber);

//     if(division) {
//         display.textContent = '';
        
//     }

//     function operate() {
//         secondNumber = display.textContent;
//         equal.addEventListener('mousedown', function(){
//             secondNumber = display.textContent;
//             // console.log('secondNumber is ' + secondNumber);
//             function divide() {
//                 console.log('first number is ' + firstNumber, 'second number is ' + secondNumber);
//                 display.textContent = '';
//                  display.textContent = parseInt(firstNumber) / parseInt(secondNumber);
//                  if(clear) {
//                     firstNumber = 0;
//                     secondNumber = 0;

//                  }

                 
//             }
//             divide();
//         });

//     }
//     operate();
// });
