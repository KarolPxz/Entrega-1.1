//Level 1
//Creates a file with the functions add, subtract, multiply, and divide two or more operands. Test the correct execution of these functions.

let num = [100, 10, 5, 0];
let add = ( num )=> num.reduce((a, b) => a + b, 0);
let subtract = ( num )=> num.reduce((a, b) => a - b, 0);
let multiply = ( num )=> num.reduce((a, b) => a * b, 0);

//let divided = ( num )=> num.reduce((a, b) => a / b, 0); 

let divide = num => {
let i = 0;
let aux = num[0]; 

while ( ++i, num[i] > 0 ){   
   aux = aux / num[i];
  }   
if (num[i] == 0) {
    console.log( 'cannot divided by zero' );
    aux = 0;
   }
return aux; 
}
   


console.log(divide(num));
//Create the corresponding tests to verify the operation of the two functions of the exercise Promises and Callbacks N1 E2.
//Create the corresponding tests to verify the operation of the functions of the exercise Promises and Callbacks N2 E1 and Promises and Callbacks N2 E2 (getEmployee() and getSalary()).
//Create the corresponding tests to verify the operation of the Async/Await N1 E2 exercise.

module.exports = { add: add, subtract: subtract, multiply: multiply, divide: divide};