let operations = require("./Delivery-1.3");
//Level 1
//- Exercise 1
//Create an asynchronous function that receives an employee id and prints the employee's name and salary to the screen, using the getEmployee() and getSalary() functions that you defined in the previous task.
operations.getEmployee(0)
    .then(employee => {
        getSalary(employee)
            .then(res => console.log(`The user is: ${employee.name },`, `and the salary is: ${res.salary}`));
    })
    .catch(err => console.error(err));



//- Exercise 2
//Create a new asynchronous function that calls another that returns a Promise that performs its resolve() function 2 seconds after its invocation.

