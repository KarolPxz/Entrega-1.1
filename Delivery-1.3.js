//Level 1
//- Exercise 1
//Creates a function that returns a Promise that invokes the resolve () or reject () function that it receives. Invoke it by passing the two functions to it so that they print a different message depending on whether the Promise is resolved or not.

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


/*
function returnPromise() {
    return new Promise((resolve, reyect) => {
        setTimeout(() => {
            let allOk = true;
            if (allOk) {
                resolve('All be Ok');
            } else {
                reyect('Somenting has gone wrong')
            }
        }, 2000)
    })
}
returnPromise()
    .then(resp => console.log(resp))
    .catch(error => console.error(error));

*/