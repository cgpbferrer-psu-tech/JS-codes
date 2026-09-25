const callMe = (message) => { 
  console.log(message); 
};

const orderCoffee = (callback) => {
  console.log('Ordering coffee...');
  // Simulate making coffee
  setTimeout(() => {
    callback('Your coffee is ready!');
  }, 10000); // Wait for 10 seconds
};

orderCoffee(callMe);

