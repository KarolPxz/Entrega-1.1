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
};

async function execFunc() {
    try {
        const call = await delayedFunc();
        console.log(call);
    } catch (error) {
        console.log(error);
    }
};
execFunc();