// Simulation of ordering a pizza online
let pizza = '🍕🍕🍕';
let restaurant = "Angel's Pizza";

function callRestaurant(callback) {
    setTimeout(() => {
        console.log(`Calling ${restaurant} to place an order...`);
        callback(); 
    }, 10000); // 10 secs
}


function orderPizza(callback) {
    setTimeout(() => {
        console.log('Ordering a pizza...');
    }, 5000); // 5 secs

    setTimeout(() => {
        console.log('Order placed successfully!');
    }, 8000); // 8 secs

    setTimeout(() => {
        console.log(`Here is your order: ${pizza}`);
        callback(pizza);
    }, 10000); // 10 secs
}

// Run the sequence 
callRestaurant(() => {
    orderPizza((pizza) => {
        console.log(`Enjoy your ${pizza}!`);
    });
});

