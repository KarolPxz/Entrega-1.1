//Level 1
//- Exercise 1
//Creates a function that returns a Promise that invokes the resolve () or reject () function that it receives. Invoke it by passing the two functions to it so that they print a different message depending on whether the Promise is resolved or not.
//let feedTheDOg = true;
function eaten(feedTheDOg) {
    return new Promise((resolve, reyect) => {
        if (!feedTheDOg) {
            const eatenDetails = {
                name: 'Breakfast',
                ingredients: ' Chicken and apple ',
                time: ' at 8:00 AM '
            }
            resolve(`To eat ${ Object.values( eatenDetails ) }, yum yum.`);
        } else {
            reyect('The dog had already eaten')
        }
    });
}

eaten(false)
    .then(resp => console.log(resp));
eaten(true)
    .catch(error => console.error(error));

//- Exercise 2
//Creates an arrow function that receives a parameter and a callback function and passes a message or another to the function (which will be printed by console) depending on the parameter received.
const showUser = (userExists, callBack) => {
    let userDetails = " "; 
    if (!userExists) {
        userDetails = `user does not exist, collect data and create it`;
    } else {
         userDetails = {
            name: ' Toni',
            age: ' 35',
            id: ' 001'
        }
    }
    callBack(userDetails);
};

function showLog( userDetails ) {
    console.log(userDetails);
}
showUser(true, showLog);
showUser(false, showLog);

//Level 2
//- Exercise 1
//Given the employee and salary objects, create an arrow function getEmployee() that returns a Promise by looking up the object by its id.
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (employees, id) => {
    let encontrado;

    if (employees.id == id) {
       encontrado = true;
    } else {
       encontrado = false;
    }
  console.log(encontrado); 
   
};

let filter = employees.filter(getEmployee);

getEmployee(employees, 1);
