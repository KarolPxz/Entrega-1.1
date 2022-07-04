//Level 1
//- Exercises 1
//Creates a function that returns a Promise that invokes the resolve () or reject () function that it receives. Invoke it by passing the two functions to it so that they print a different message depending on whether the Promise is resolved or not.
let greeting = name => console.log(`Hello ${name}!`);
const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
if (!hasMeeting) {
    const meetingDetails = {
        name: 'Marketing Meeting',
        location: 'Skype',
        time: '1:00 PM'
    }
    resolve(meetingDetails);
} else {
    reject(new Error('Meeting already scheduled'))
}
});

meeting
    .then( res => {
        //resolve data
        console.log('Meeting Scheduled');
        console.log(res);
    })
    .catch( err => {
        console.log(err.message);
    });