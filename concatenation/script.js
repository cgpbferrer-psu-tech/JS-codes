// Concatenation in JavaScript is the process of joining two or more strings together. 
// This can be done using the `+` operator or the `concat()` method.

// Here is an example of string concatenation using the `+`
    
    // Example:

    // let firstName = "John";
    // let lastName = "Doe";
    // let fullName = firstName + " " + lastName;
    // console.log(fullName); // Output: John Doe

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

// The `concat()` method can also be used to concatenate strings:

    // Example:

    // let firstName = "John";
    // let lastName = "Doe";
    // let fullName = firstName.concat(" ", lastName);
    // console.log(fullName); // Output: John Doe
// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
    
// New way of concatenation is using template literals (backticks ``) which allows for easier string interpolation:

    // Example:  

    // let firstName = "John";
    // let lastName = "Doe";
    // let fullName = `${firstName} ${lastName}`;
    // console.log(fullName); // Output: John Doe
// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

    // Another example:

    // let firstName = "John";
    // let lastName = "Doe";
    // let age = 30;
    // let message = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
    // console.log(message); // Output: My name is John Doe and I am 30 years old.

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────


    // Additionally, you can concatenate strings with numbers and other data types using template literals:

    // Example:
    let score = 100;
    let exam = "Math";
    score = 50;
    console.log(`I scored ${score} in my ${exam} exam.`); // Output: I scored 100 in my Math exam.

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
