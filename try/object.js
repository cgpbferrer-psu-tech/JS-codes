const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "swimming"],
    address: {      
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};


const address = person.address;
console.log(address.city); // Output: Anytown
