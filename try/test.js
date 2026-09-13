// Simulation of ordering a pizza online
let pizza = '🍕';
let restaurant = "Angle's Pizza";

function callRestaurant(callback) {
    setTimeout(() => {
        console.log(`Calling ${restaurant} to place an order...`);
        callback();
    }, 3000);
}

function orderPizza(callback) {
    setTimeout(() => {
        console.log('Ordering a pizza...');
    }, 3000);

    setTimeout(() => {
        console.log('Order placed successfully!');
    }, 8000); // 3 + 5 seconds

    setTimeout(() => {
        console.log(`Here is your order: ${pizza}`);
        callback(pizza);
    }, 10000); // 3 + 5 + 2 seconds
}

// Run the sequence
callRestaurant(() => {
    orderPizza((pizza) => {
        console.log(`Enjoy your ${pizza}!`);
    });
});
