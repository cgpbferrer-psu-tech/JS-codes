// What is a Promise in JavaScript?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value. It allows you to write asynchronous code 
// in a more manageable and readable way, avoiding the so-called "callback hell" 
// that can occur with nested callbacks.

// A promise is also an object that manages asynchronous operations. 
// That you can wrap a promise object around asynchronous code 
// It would return a value "I promise to return a value"
// The promise object would be:
// PENDING > RESOLVED OR REJECTED
// syntax: new Promise((resolve, reject) => (asynchronous code)



// Promises have three states:
// 1. Pending: The initial state of a Promise. The operation has not completed yet.
// 2. Fulfilled: The operation completed successfully, and the Promise has a resulting value.
// 3. Rejected: The operation failed, and the Promise has a reason for the failure.


// WE ARE GOING TO DO SOME TASK THAT ARE IN ORDER / CHORES
// 1. walkTheDog
// 2. cleanTheKitchen
// 3. takeTheTrash


// asynchronous programming

/*

function walkTheDog(){
    setTimeout(()=> {
        console.log("You walk the dog");
    }, 5000);
}


function cleanTheKitchen(){
    setTimeout(()=> {
        console.log("You clean the kitchen");
    }, 5000);
}

function takeTheTrash(){
    setTimeout(()=> {
        console.log("You take out the trash");
    }, 5000);
}



walkTheDog();
cleanTheKitchen();
takeTheTrash(); 

*/



/*

// passing through our callback

function walkTheDog(callback){
    setTimeout(()=> {
        console.log("You walk the dog");
        callback();
    }, 5000);
}

function cleanTheKitchen(callback){
    setTimeout(()=> {
        console.log("You clean the kitchen");
        callback();
    }, 5000);
}

function takeTheTrash(callback){
    setTimeout(()=> {
        console.log("You take out the trash");
        callback();
    }, 5000);
}

// invoking the functions/calling the functions
// using callback hell


walkTheDog(() => {
    cleanTheKitchen(() => {
        takeTheTrash(() => console.log ("You finished all the chores"));
    })
});

*/


/*

// Promise without reject example:


// promise code

function walkTheDog(){
    return new Promise((resolve, reject) => {    
        setTimeout(()=> {
            resolve("You walk the dog");
        }, 5000);
    });
}

function cleanTheKitchen(){
    return new Promise((resolve, reject) => {    
        setTimeout(()=> {
            resolve("You clean the kitchen");
        }, 5000);
    });
}

function takeTheTrash(){
    return new Promise((resolve, reject) => {    
        setTimeout(()=> {
            resolve("You take out the trash");
        }, 5000);
    });
}

// invoking the functions/calling the functions
// using promise

// as you can see there's a resolve inside the message 
// it provides a value parameter
// which will be stored as (value => console.log(value)); 

walkTheDog()
    .then(value => { 
        console.log(value); 
        return cleanTheKitchen();
    })
    .then(value => {
        console.log(value); 
        return takeTheTrash();
    })
    .then(value => {
        console.log(value);
        console.log("You finished all the chores!");
    });


    // we are method chaining ".then" methods for us to continue our process

*/


// Promise example using conditional statements with reject value

// /*


function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("You walk the dog 🐕");
            } else {
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;

            if (kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            } else {
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if (trashTakenOut) {
                resolve("You take out the trash 🚮");
            } else {
                reject("You DIDN'T take out the trash");
            }
        }, 1000);
    });
}

walkDog()
    .then(value => {
        console.log(value);
        return cleanKitchen();
    })
    .then(value => {
        console.log(value);
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("You finished all the chores!");
    })
    .catch(error => console.error(error));

// you can also code it like this

// */ 

/*

walkDog().then(value => {console.log(value);return cleanKitchen();})
            .then(value => {console.log(value);return takeOutTrash();})
                .then(value => {console.log(value);console.log("You finished all the chores!");})
                    .catch(error => console.error(error));

*/



/* 

// this method ".catch" is for us to catch all errors
// basically it handles all the errors for us
// it is similar with try catch in JS



Feature	try...catch
Primary Job	Handles exceptions (errors) so the application doesn't crash.
Code Type	Traditionally handles synchronous code (but can handle async code when paired with async/await).
Error Syntax	Uses catch (error) { ... } blocks.


Promise
Manages the lifecycle of an asynchronous action (Pending, Fulfilled, Rejected).
Built natively for asynchronous operations.
Uses .catch(error => { ... }) methods chained to the object.

*/




// Promise Program flow:
// walkDog() -> cleanKitchen() -> takeOutTrash() -> catch()

// Analogy: 
// Think of a Promise as a "promise" you make to someone. 
// When you make a promise, you are saying that you will do something in the future. 
// If you keep your promise, it is fulfilled (resolved). If you break your promise, it is rejected. 
// In JavaScript, Promises work similarly, 
// allowing you to handle asynchronous operations and their outcomes in a structured way.