What is a Promise in JavaScript?
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more manageable and readable way, avoiding the so-called "callback hell" that can occur with nested callbacks.

Promises have three states:
1. Pending: The initial state of a Promise. The operation has not completed yet.
2. Fulfilled: The operation completed successfully, and the Promise has a resulting value.
3. Rejected: The operation failed, and the Promise has a reason for the failure.




Promise example:

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
            const kitchenCleaned = true;

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
            const trashTakenOut = false;

            if (trashTakenOut) {
                resolve("You take out the trash 🚮");
            } else {
                reject("You DIDN'T take out the trash");
            }
        }, 500);
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



// Promise Program flow:
// walkdog() -> cleanKitchen() -> takeOutTrash() -> catch()

// Analogy: 
// Think of a Promise as a "promise" you make to someone. 
// When you make a promise, you are saying that you will do something in the future. 
// If you keep your promise, it is fulfilled (resolved). If you break your promise, it is rejected. 
// In JavaScript, Promises work similarly, 
// allowing you to handle asynchronous operations and their outcomes in a structured way.