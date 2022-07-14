//Level 1
//Creates a file with the functions add, subtract, multiply, and divide two or more operands. Test the correct execution of these functions.

let num = [1, 2, 3, 4, 5];
let add = ( num )=> num.reduce((a, b) => a + b, 0);

let subtract = ( num )=> num.reduce((a, b) => a - b, 0);
let multiply = ( num )=> num.reduce((a, b) => a * b, 0);
let divide = ( num )=> num.reduce((a, b) => a / b, 0);




console.log(add(num));
//Create the corresponding tests to verify the operation of the two functions of the exercise Promises and Callbacks N1 E2.
//Create the corresponding tests to verify the operation of the functions of the exercise Promises and Callbacks N2 E1 and Promises and Callbacks N2 E2 (getEmployee() and getSalary()).
//Create the corresponding tests to verify the operation of the Async/Await N1 E2 exercise.

module.exports = { add: add, subtract: subtract, multiply: multiply, divide: divide};