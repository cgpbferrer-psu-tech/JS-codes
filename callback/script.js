// callback = a function that is passed as an argument to another function
// basically, after executing/invoking the first function then we call out the next function 
// callback in javascript

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

// This program simulates of ordering system
// The program will simulate the following process:


// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

// PROGRAM FLOW
// 1. Greet the customer.
// 2. Ask for the customer's order.
// 3. Confirm the order.
// 4. Process the payment.
// 5. Prepare the food.
// 6. Serve the order.

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

// MCDO / JOLLIBEE / KFC  ORDERING SYSTEM
// Using Callback Functions


// /*

// FUNCTION 1: Greet the Customer

function greetCustomer(callback) {
    console.log("Hello! Welcome to McDonald's.");
    // Call the next function
    callback();
}


// FUNCTION 2: Take the Customer's Order

function takeOrder(callback) {

    console.log("\n--- ORDERING ---");

    let food = "1pc Chicken McDo";
    let drink = "Coke";
    let quantity = 2;

    console.log("Food: " + food);
    console.log("Drink: " + drink);
    console.log("Quantity: " + quantity);
    console.log(`Quantity: ${food}`);
    // Call the next function
    callback(food, drink, quantity);

}


// FUNCTION 3: Confirm the Order

function confirmOrder(food, drink, quantity, callback) {

    console.log("\n--- ORDER CONFIRMATION ---");

    console.log("Your order is:");
    console.log(quantity + "x " + food);
    console.log("Drink: " + drink);

    console.log("Order confirmed!");

    // Call the next function
    callback();

}


// FUNCTION 4: Process Payment

function processPayment(callback) {

    console.log("\n--- PAYMENT ---");

    let total = 300;
    let payment = 500;
    payment = 200;

    console.log("Total amount: ₱" + total);
    console.log("Payment: ₱" + payment);

    if (payment >= total) {

        let change = payment - total;

        console.log("Payment successful!");
        console.log("Change: ₱" + change);

        // Call the next function
        callback();

    } else {

        console.log("Insufficient payment.");

    }

}


// FUNCTION 5: Prepare the Food
// without settimeout

/*

function prepareFood(callback) {

    console.log("\n--- FOOD PREPARATION ---");

    console.log("Your food is being prepared...");
    console.log("Please wait for your order.");
    // Call the next function
    callback();
}

*/

// FUNCTION 5: Prepare the Food with set time out


// /*
function prepareFood(callback) {

    console.log("\n--- FOOD PREPARATION ---");

    console.log("Your food is being prepared...");
    console.log("Please wait for your order for  1 minute!");


    setTimeout(function(){
    console.log("Order is prepared");
    callback();
    // Call the next function
    // waiting time 60 secs // 1 minute
    }, 60000);
}

// */



// FUNCTION 6: Serve the Food

function serveFood() {

    console.log("\n--- SERVING ---");

    console.log("Your order is ready!");
    console.log("Thank you for ordering at McDonald's!");
    console.log("Enjoy your meal!");

}

// PROGRAM FLOW

greetCustomer(function() {

    takeOrder(function(food, drink, quantity) {

        confirmOrder(food, drink, quantity, function() {

            processPayment(function() {

                prepareFood(function() {

                    serveFood();

                });

            });

        });

    });

});



// ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────



/*

5. Understanding the Program Flow

Let's examine the most important part of the program.

greetCustomer(function() {

    takeOrder(function(food, drink, quantity) {

        confirmOrder(food, drink, quantity, function() {

            processPayment(function() {

                prepareFood(function() {

                    serveFood();

                });

            });

        });

    });

});

This is called callback nesting because one callback contains another callback.

Let's break it down.

STEP 1: Call greetCustomer()
greetCustomer(function() {

    // Next step

});

We pass a function as an argument.

Inside greetCustomer():

console.log("Hello! Welcome to McDonald's.");

callback();

The callback is invoked, so the next step begins.

STEP 2: Call takeOrder()
takeOrder(function(food, drink, quantity) {

    // Next step

});

The takeOrder() function displays the customer's order.

Then it executes:

callback(food, drink, quantity);

The order details are passed to the next function.

STEP 3: Call confirmOrder()
confirmOrder(food, drink, quantity, function() {

    // Next step

});

The order details are received by confirmOrder().

function confirmOrder(food, drink, quantity, callback) {

    console.log("Order confirmed!");

    callback();

}

After confirming the order, the callback is invoked.

STEP 4: Process the Payment
processPayment(function() {

    // Next step

});

The payment is processed.

If the payment is sufficient:

callback();

The program proceeds to food preparation.

If the payment is insufficient, the callback is not called.

This means the program stops at the payment stage.

STEP 5: Prepare the Food
prepareFood(function() {

    serveFood();

});

The food preparation function runs.

Afterward, the callback invokes serveFood().

STEP 6: Serve the Food
serveFood();

The final function executes.

The ordering process is complete.

6. Program Flow Diagram
             START
               │
               ▼
     greetCustomer()
               │
               │ callback()
               ▼
        takeOrder()
               │
               │ callback(food, drink, quantity)
               ▼
       confirmOrder()
               │
               │ callback()
               ▼
      processPayment()
               │
        ┌──────┴──────┐
        │             │
        ▼             ▼
   Insufficient    Successful
    Payment         Payment
        │             │
        ▼             │ callback()
       END            ▼
               prepareFood()
                     │
                     │ callback()
                     ▼
                 serveFood()
                     │
                     ▼
                    END
7. Analogy: Ordering at a Fast-Food Restaurant

Imagine that you are a customer at Jollibee.

You approach the counter and say:

"Good morning!"

The cashier responds:

"Hello! What would you like to order?"

You give your order.

The cashier then asks:

"Would you like to confirm your order?"

After confirming, the cashier processes your payment.

Once your payment is successful, the cashier tells the kitchen:

"Please prepare this order."

After the food is prepared, the staff calls your number.

How does this relate to callbacks?

Think of each employee or process as a function.

Real-World Action	JavaScript Function
Greet the customer	greetCustomer()
Take the order	takeOrder()
Confirm the order	confirmOrder()
Process payment	processPayment()
Prepare the food	prepareFood()
Serve the food	serveFood()

The callback is like saying:

"After you finish your task, proceed to the next person or step."

For example:

function takeOrder(callback) {

    console.log("Your order has been taken.");

    callback();

}

This means:

"After taking the order, execute the next task."

8. Important Concept: Why Use Callbacks?

Callbacks are useful when you want one function to execute another function after a particular action or task.

Example without a callback
function greetCustomer() {

    console.log("Hello!");

}

function takeOrder() {

    console.log("What is your order?");

}

greetCustomer();
takeOrder();

This works, but the execution order is controlled from outside the functions.

Example with a callback
function greetCustomer(callback) {

    console.log("Hello!");

    callback();

}

function takeOrder() {

    console.log("What is your order?");

}

greetCustomer(takeOrder);

Here, greetCustomer() controls when the next function executes.

Main difference
Without Callback	With Callback
Functions are called separately.	A function can trigger another function.
The execution flow is managed externally.	The function can determine when to invoke the next step.
Less flexible for certain workflows.	Useful for passing behavior and controlling task sequences.
9. Important: callback Is Just a Parameter

Consider this code:

function greetCustomer(callback) {

    console.log("Hello!");

    callback();

}

You might ask:

"Where did callback come from?"

The answer is that callback is simply a parameter.

You can name it anything.

For example:

function greetCustomer(nextFunction) {

    console.log("Hello!");

    nextFunction();

}

This works the same way.

Example
function greetCustomer(nextFunction) {

    console.log("Hello!");

    nextFunction();

}

function takeOrder() {

    console.log("What is your order?");

}

greetCustomer(takeOrder);

Output:

Hello!
What is your order?

Remember: The name callback is not a special JavaScript keyword. It is simply a common name used for a function passed as an argument.

10. Important: Do Not Add Parentheses When Passing a Callback

This is a common beginner mistake.

❌ Incorrect
greetCustomer(takeOrder());

This immediately executes takeOrder() before greetCustomer() receives its argument.

✅ Correct
greetCustomer(takeOrder);

Here, you are passing the function itself.

The greetCustomer() function decides when to execute it:

callback();
Remember the difference
Code	Meaning
takeOrder	Refers to the function itself
takeOrder()	Executes the function immediately
11. Simple Callback Example for Beginners

Before introducing the complete ordering system, you can demonstrate this simpler example to your students.

function greetCustomer(callback) {

    console.log("Hello! Welcome to Jollibee.");

    callback();

}

function takeOrder() {

    console.log("What would you like to order?");

}

greetCustomer(takeOrder); 

*/