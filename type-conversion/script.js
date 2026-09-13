// Conversion of data types

// typeof variable_name it tells what datatype

// if the output is = NaN it stands for Not a Number

// Convert string to number
// variable_name = parseInt(variable_name);
// variable_name = +variable_name;
// variable_name = Number(variable_name);

// // Convert number to string
// variable_name = variable_name.toString;
// variable_name = String(variable_name);


// // Convert string to decimal
// variable_name = parseFloat(variable_name);

// // Convert number to boolean
// variable_name = Boolean(variable_name);


//samples

let amount = '100';

amount = parseInt(amount);

console.log(amount, typeof amount);


let age = 30;

age = String(30);

console.log(age, typeof age);



let number = 'hello';

number = parseInt(number);

console.log(number, typeof number);

let score = 30;

score = Boolean(score);

console.log(score, typeof score);