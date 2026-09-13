function Person(firstName,lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName; 3
    this.dob = new Date(dob);

}

// dob = date of birth

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}   

const person1 = new Person('John', 'Doe', '4-5-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');


console.log(person2);
console.log(person1);

