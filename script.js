


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



// addition code

let firstNumber;
let secondNumber;

plus.addEventListener('mousedown', function() {
    firstNumber = display.textContent;
    console.log('firstNumber is ' + firstNumber);

    if(plus) {
        display.textContent = '';
        
    }

    function operate() {
        secondNumber = display.textContent;
        console.log(secondNumber);
        equal.addEventListener('mousedown', function(){
            secondNumber = display.textContent;
            console.log('secondNumber is ' + secondNumber);
            function add() {
                console.log(firstNumber, secondNumber);
                display.textContent = '';
                 display.textContent = parseInt(firstNumber) + parseInt(secondNumber);
                 if(clear) {
                    firstNumber = 0;
                    secondNumber = 0;

                 }

                 
            }
            add();
        });

    }
    operate();
});



// multiplication code

let firstNumber1 ;
let secondNumber1 ;

per.addEventListener('mousedown', function() {
    firstNumber1 = display.textContent;
    console.log('firstNumber is ' + firstNumber1);

    if(per) {
        display.textContent = '';
        
    }

    function operate1() {
        secondNumber1 = display.textContent;
        console.log(secondNumber1);
        equal.addEventListener('mousedown', function(){
            secondNumber1 = display.textContent;
            console.log('secondNumber is ' + secondNumber1);
            function multiply() {
                console.log(firstNumber1, secondNumber1);
                display.textContent = '';
                let result = parseInt(firstNumber1) * parseInt(secondNumber1);
                display.textContent = result;
                console.log('result is '+ result);
                 
                //  secondNumber1 = firstNumber1;
                //  if(clear) {
                //     secondNumber1 = firstNumber1;                
                //      }
                 }
            multiply();
        });

    }
    operate1();
});



// function add() {
//     display.textContent = '';
//     return display.content = firstNumber + secondNumber;
    
  
// }
function subtract(a,b) {
    return a-b;
 }
 
//  function multiply(a,b) {

//     return a*b;
//  }

 function divide(a,b) {
    return a/b;
 }


 

//  function operate (a,operator,b) {

    
//     if (plus) {

//         secondNumber = display.textContent;
//         equal.addEventListener('mousedown', add);
//     }

//     if(operator === minus) {
//         return subtract(a,b);
//     }

//     if(operator === per) {
//         return multiply(a,b);
//     }

//     if(operator === division) {
//         return divide(a,b);
//     }
        
    
//  }


// one.addEventListener('click', function(e) {
//     console.log(e.target.textContent);
// });

// two.addEventListener('click', function(e) {
//     console.log(e.target.textContent);
// });




// digits.addEventListener('mousedown', function(e) {
//     if(e.target === one) {
//         display.textContent = display.textContent.concat(1);
//     }
//     if(e.target === two) {
//         display.textContent = display.textContent.concat(2);
//     }



// });



// one.addEventListener('mousedown', function() {
    
//     display.textContent = display.textContent.concat(1);
    
 
//  });
 
//  two.addEventListener('mousedown', function() {
    
//    display.textContent = display.textContent.concat(2);
 
//  });
 
//  three.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(3);
 
//  });
 
//  four.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(4);
 
//  });
 
//  five.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(5);
 
//  });
 
//  six.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(6);
 
//  });
 
//  seven.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(7);
 
//  });
 
//  eight.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(8);
 
//  });
 
//  nine.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(9);
 
//  });
 
//  zero.addEventListener('mousedown', function() {
    
//      display.textContent = display.textContent.concat(0);
 
//  });



