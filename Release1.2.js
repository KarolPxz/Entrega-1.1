//Level 1
//- Exercise 1
//Displays the result of a self-invoking arrow function that adds two numbers to the console.

 console.log((num1, num2) => (num1 + num2)(1,7));

//Level 2
//- Exercise 1
//Create an arrow function that, receiving a parameter, returns an object with an attribute that has the value of the received parameter.

let person = {
    name : 'Toni',
    surname: 'Rodrigu',
    age: 5,
}

let newAge = 0;

//((newAge) => console.log(person))(45); ????
 let swhowNewAge = (newAge)=> {
    person.age = newAge;
    console.log(person);
 };
swhowNewAge(20);
//- Exercise 2
//Create a class "Person" that receives a 'name' parameter when instantiated. The class will include a method called Name that prints the 'name' parameter to the console. Invoke the method named Name from outside the class.

class Person {
    constructor(personName){
        this.personName = personName;
    }

  showName() {
    console.log(this.personName);
  } 
}

const person1 = new Person('Antonio');
console.log(person1);
person1.showName();

//Level 3
//- Exercise 1
//Write an object creator function that instantiates an abstract class. Label it with different definitions.
class Human {
  constructor () {
    if (this.constructor == Human) {
      throw Error('This is an abstract class, Human cannot be created');
    }
  }
}
try {
  let human = new Human();
   console.log(human);
} catch (error) {
  console.error(error);
}


const Men = function (name) {
  this.name = name;
  console.log('this is an instance of an abstract class');
}

Men.prototype = Object.create(Human.prototype);
let men = new Men('Toni');
console.log(men);
console.log(men instanceof Men);
console.log(men instanceof Human );

