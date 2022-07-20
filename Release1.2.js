//Level 1
//- Exercise 1
//Displays the result of a self-invoking arrow function that adds two numbers to the console.

 console.log((num1, num2) => (num1 + num2)( 1, 7 ));
//Level 2
//- Exercise 1
//Create an arrow function that, receiving a parameter, returns an object with an attribute that has the value of the received parameter.

 let swhowNewAge = (newAge)=> {
    let person = {
      name : 'Toni',
      surname: 'Rodriguez',
      age: 5,
  }
  console.log(`the person age is: ${person.age}`);
    person.age = newAge;
    return person;
 };

console.log(` the person with the changed age:`, swhowNewAge(20));
//- Exercise 2
//Creates a "Person" class that receives a 'name' parameter when instantiated. The class will include a dirName method that prints the 'name' parameter to the console. Invokes the dirName method from outside the class.

class Person {
    constructor(name){
        this.name = name;
    }

    dirName() {
    console.log(`The person name of the exercise 2 is:`, this.name);
  } 
}

const person1 = new Person('Antonio');
console.log(person1);
person1.dirName();

//Level 3
//- Exercise 1
//Write an object creator function that instantiates an abstract class. Label it with different definitions.
class Human {
  constructor () {
    if (this.constructor == Human) {
      throw new Error('This is an abstract class, Human cannot be created');
    }
  }
}


function createInstance(name, gender) {
let person = Human.prototype = Object.create(Human.prototype);
//let human = new Human();
  //  human.name= name;
    person.name = name;
    person.gender = gender;
    console.log('This is an instance of an abstract class');
    return person;
}
let person2 = createInstance('Toni', `boy`);
let person3 = createInstance('Karol', `girl`);

console.log(`the ${person2.gender}  ${person2.name} is a instance of Hunan:`, person2 instanceof Human );
console.log(`the ${person3.gender}  ${person3.name} is a instance of Hunan:`, person3 instanceof Human);


