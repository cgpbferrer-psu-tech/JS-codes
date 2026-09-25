// callback is a function passed as an argument to another function
// which is then invoked inside the outer function to complete some kind of routine or action.

// used to handle  asynchronous operations
// also used to ensure that a function is not going to run before a task is completed

// also used: Reading files, Network requests, Interacting with databases

// function hello(){
//     console.log("Hello");
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// goodbye();
// hello();



setTimeout(function(){
    console.log("Hello World");
}, 5000);



function sample(){
    setTimeout(() => {
    console.log("This is a sample function");
    }, 2000);
}

function sample1(){
    setTimeout(function () {
    console.log("This is a sample function");
    }, 2000);
}

sample();
sample1();