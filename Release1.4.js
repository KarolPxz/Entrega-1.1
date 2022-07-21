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
        console.error('...no data,', error.name);    
   }
}
showEmployee(1);

//- Exercise 2
//Create a new asynchronous function that calls another that returns a Promise that performs its resolve() function 2 seconds after its invocation.

function delayedFunc() {
    console.log( '...waiting' );
    return new Promise(( res ) => {
        setTimeout( () => res ("I'm here now"), 2000 )
    });
}

async function execFunc() {
    try {
        const call = await delayedFunc();
        console.log(call);
    } catch (error) {
        console.log(`...The following error has occurred`, error);
    }
}
execFunc();
// Level 2
//- Exercise 1
//Create a function that returns twice the number passed to it as a parameter after 2 seconds.
 const twiceNumber = function( num ) {
    return new Promise(res => {
        setTimeout(() => res( console.log( `The twice number of ${num} is: `, 2 * num )  ), 2000 ); //remove the console log?
    });
}

twiceNumber( 3 );

//Create another function that receives three numbers and calculates the sum of their doubles using the previous function.

const sumNumbers = async function( num1, num2, num3 ) {
    let numbers = [ num1, num2, num3 ];
    let sum = 0;
    let i = 0; 
    for ( let i = 0; i < numbers.length; i++ ) {
        await twiceNumber( numbers[i] );
        if ( twiceNumber && i > 0 ) {
            sum +=  numbers.reduce(( a, b ) =>( a +  b ), 0 );
        }
    }
    console.log( `The doubles sum  of ${ numbers } is : `, sum );
    return sum
}
sumNumbers( 2, 4, 10 );

// Level 3
// - Exercise 1
// Force and catch as many bugs as you can from levels 1 and 2.

try {
        //level 1
        let id = 1; //Change the id to a non numeric character
    
        if (isNaN(id)) {
            throw new Error( "The id must be a number" ); 
        } else {
          showEmployee(id);   
        }
       
        //Level 2
        let num = 5; //Change the num variable to a non numeric or undefined character
        if ( isNaN(num) || undefined ) {
            throw new Error( "This is an error test, of data type" ); 
        }else{
        twiceNumber( num );   
        }

        let num1 = 0; //change numeric variables to a non-numeric character or leave them empty for undefined
        let num2;
        let num3 = 1;

        if ( isNaN || undefined ( num1 || num2 || num3) ){
            throw new Error( "The number of parameters must be 3, and all must be numeric" ); 
            
        } else {
            sumNumbers( num1, num2, num3 ); 
        }
    }
    catch (err) {
       console.log( " The following error has occurred: ", err );
    }