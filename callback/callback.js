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


/*

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


*/

/*

// simple callback


// function 1
function hello(callback){
    console.log("Hello");
        callback();
}
// function 2
function order(){
    console.log("What is your order?");
}

hello(order);


function hello1(){
    console.log("Hello");
}
// function 2
function order1(){
    console.log("What is your order?");
}

hello1();
order1();


*/
// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────










/*

// function 1
function hello1(){
    console.log("Hello");
}
// function 2
function order2(){
    console.log("What is your order?");
}

hello1();
order2();

/*



/*

// function 3
function serve(){
    console.log("Order is served!");
}

// function 4
function payment(){
    console.log("You paid your order!");
}


payment();
serve();

/*

// */












/*

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayOutput(result){
    console.log(result);
}

// invoke the output
sum(displayOutput, 5, 10);

// stop this since you'll be invoking it right away
// sum(displayOutput());



// what we did here is we calculate the result first then 
// after that process is finish then we're going to display the output

*/
