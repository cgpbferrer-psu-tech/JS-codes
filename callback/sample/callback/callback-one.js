function hello() {
    setTimeout(() => {
    console.log("Hello from callback-one.js");
}, 10000); //2 seconds 
}

function goodbye() {
    console.log("Goodbye from callback-one.js");
}

hello();
goodbye();


// function sample() {
//     setTimeout(() => {
//     console.log("this is an example");
// }, 5000); //5 seconds
// }

// function sampleone() {
//     setTimeout(function () {
//     console.log("this is an example");
// }, 10000); //10 seconds
// }

// sampleone();
// sample();



