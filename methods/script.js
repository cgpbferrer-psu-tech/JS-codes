// What is a Method in JavaScript?
// In JavaScript, a method is a function that is associated with an object. 
// Methods are used to define behaviors or actions that can be performed on the object. 
// They are defined as properties of the object, 
// where the property name is the method name and the value is a function.

// methods can be defined within an object like this:

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person3 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullName()); // Output: John Doe 
console.log(person2.fullName()); // Output: Jane Smith
console.log(person3.fullName()); // Output: Alice Johnson


/*

Logic behind the code:
The code defines three objects (person1, person2, person3) each with a fullName method. 
When the fullName method is called on each object, 
it returns the concatenation of the object's firstName and lastName properties. 
The this keyword refers to the object on which the method is called, 
allowing each object to have its own unique fullName output. 

The . is for accessing the method, and the () is for invoking the method.

*/
