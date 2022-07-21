let operations = require("./Release1.3");
//Level 1
//- Exercise 1
//Create an asynchronous function that receives an employee id and prints the employee's name and salary to the screen, using the getEmployee() and getSalary() functions that you defined in the previous task.

async function showEmployee( id ) {
    try {
        const getEmpl = await operations.getEmployee( id );
        const getSal = await operations.getSalary( getEmpl );
 
        console.log(`The user (from release 1.4) is: ${getEmpl.name },`, `and the salary is:  ${getSal.salary }`)
    } catch (error) {
        console.error('...no data');    
   }
}
showEmployee(1);

//- Exercise 2
//Create a new asynchronous function that calls another that returns a Promise that performs its resolve() function 2 seconds after its invocation.

function delayedFunc() {
    console.log( 'waiting...' );
    return new Promise(( res, rej ) => {
        setTimeout( () => res ("I'm here now"), 2000 )
    });
}

async function execFunc() {
    try {
        const call = await delayedFunc();
        console.log(call);
    } catch (error) {
        console.log(error);
    }
}
execFunc();
// Level 2
//- Exercise 1
//Create a function that returns twice the number passed to it as a parameter after 2 seconds.
 const twiceNumber = function( num ) {
    return new Promise(res => {
        setTimeout(() => res(console.log( 2 * num )  ), 2000); //remove the console log?
    });
}

twiceNumber(3);
console.log(`hhh`, twiceNumber(6));
//Create another function that receives three numbers and calculates the sum of their doubles using the previous function.

const sumNumbers = async function( num1, num2, num3 ) {
    let numbers = [ num1, num2, num3 ];
    let sum = 0;
    let i = 0; 
 do {
  
    let aux=  await twiceNumber( numbers[i] );  
    sum =  sum +await aux;
     // sum += await numbers[i];
      console.log(sum);
      sum =  numbers.reduce(( a, b ) =>( a +  b ), 0 );
     // console.log(sum);
      i++; 
      console.log(sum);
 } while (i < numbers.length);
 //sum +=numbers[i]
   
    //  await numbers[i]
     // sum += numbers[i];
      

    
    
    console.log(numbers);
    console.log( `the sum is`, sum );
    
    sum = numbers.reduce(( a, b ) =>( a + b ), 0 );
    console.log(`the sum is`, sum);
    return sum
}
sumNumbers( 10, 10, 10 );