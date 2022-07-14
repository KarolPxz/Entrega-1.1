//************************************ Level 1 ***************************************//
//Exercise 1
//Creates a function that displays the username on the console when invoked by passing the name as a parameter.

function seeName(name) {

    console.log(name);

}

seeName('Maria');

//************************************ Level 2 ***************************************//
// Exercise 1
//Displays the username and surname of the user using literal templates, saving them in variables and referencing them in the printing of the message.

function seeNameSurn(name, surname) {

    console.log(`The user name is: ${name}; and the user surname is: ${surname}`);

}

seeNameSurn('Maria', 'Pelaez');

// Exercise 2
// Invokes a function that returns a value from within a literal template

function returnTemplate() {
    return 'Antonio Daiwa';
}

console.log(`The new user is: ${returnTemplate()}`);


//************************************ Level 3 ***************************************//
// Create an array of ten functions and fill it with a loop so that each function counts from 0 to 9 for the console. Invokes each function in the array iteratively. The 0 to 9 count must be displayed ten times on the console.
let array = [10];

function numbers() {
   for (let i = 0; i <= 9; i++) {
   console.log(`i`);
   } 
}

function print(numbers) {
    for (let i = 0; i <= 9; i++) {
        let name = `funtion${i}`;
          array[i] = name;
          name= numbers();
        console.log(array[i]);
        }
}
print(numbers);    

//Exercises 2
//Creates a self-invoking anonymous function equal to a variable that displays the user name received as a parameter as a console.

const displayName = (function(name){
    console.log(name);
})(`Toni`);
