// => arrow function = a concise way to write function expressions 
// good for simple functions that you use only once 
// (parameters) => some code

// our normal and traditional way of writing functions is like this:

function halo (){
    console.log("hello world");
}

halo();

// to be converted as function expressions
const hello1 = function(){
    console.log("hello");
}

hello1();

// the const hello is basically what we would use for our function expressions

// what is a function expressions?
// a way to define a function by assigning it to a 
// variable or passing it inside another piece of code

// for example 

const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5


// ----------------------------------------------


// converted arrow function
const hello2 = () => console.log("hello");

hello2();

// if you don't have any parameters, leave it blank.
// the open and close parenthesis stands for you're putting a parameter inside
// but you don't have one, just leave it blank just as stated above

// -------------------------------------

// now let's have an example of a arrow function that has parameter inside 

const hello3 = (name) => console.log(`Hello ${name}`);

hello3("Carl");

// the parameter (name)
// ("Carl") we are passing the parameter into an argument
// The parameter (name) > argument which is the ("Carl")
// basically we are giving a value of the parameter "(name)" 
// since it has no value given yet

function hello4(fName){
    console.log(`Hello ${fName}`);
}

hello4("Carlo")


// using settime out as a normal function

setTimeout(hello5, 3000);

function hello5(){
    console.log("Hello");
}



setTimeout(function hello6(){
    console.log("Hello");
}, 3000);


setTimeout(() => {
    console.log("Hello");
}, 3000);

