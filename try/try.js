class Bank {
    constructor() {
        this.line = [];
    }

    bankIn(customer) {
        this.line.push(customer);
    }

    bankOut() {
        return this.line.shift();
    }

    whoIsInTheFront() {
        return this.line[0];
    }
}

let bankQueue = new Bank();  

bankQueue.bankIn("Customer 1");
bankQueue.bankIn("Customer 2");
bankQueue.bankIn("Customer 3");

console.log(bankQueue.bankOut()); 
console.log(bankQueue.whoIsInTheFront());