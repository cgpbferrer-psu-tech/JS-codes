// Value is stored in the stack



// let name = 'John';
// let newName = name;
// name = 'Jonathan';
// name = 'Johnny';
// name = 'Jed';

// console.log(name);




// Reference is stored in the heap
let person = {
  name: 'Brad',
  age: 40,
  address: {
    street: '123 Main St',
    country: 'China',
  },
  email_address: 'brad@gmail.com',
};


let newPerson = person;
newPerson.name = 'Johnny';
newPerson.age = 41;
newPerson.address = {
  street: 'Alevear St, PSU, Lingayen, Pangasinan',
  country: 'Philippines'
};

console.log(person.name,person.address.country);

















// newPerson.name = 'Bradley';
// newPerson.age = 41;

// console.log(name, age); 
// console.log(person);  
// console.log(person); 



























// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
