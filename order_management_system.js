// Coding Challenge 5: Customer Order Management System

// Task 1: Create an inventory array of product objects
let inventory = [
    {name: "latte", price: 4, quantity: 25},
    {name: "mocha", price: 5, quantity: 15},
    {name: "espresso", price: 3, quantity: 30},
    {name: "frappuccino", price: 7, quantity: 20}
];

// Task 2: Create an orders array of order objects
let orders = [];

// Task 3: Create a function to place an order
function placeOrder (cName, iOrdered) {
    // check if there are enough in stock
    for (let item of inventory) {
        if (item.name === iOrdered.name) {
            // if available, subtract ordered quantity from product stock
            if (item.quantity >= iOrdered.quantity) {
                item.quantity -= iOrdered.quantity;
                // add a new order to the order status set to pending
                orders.push({customerName: cName, itemsOrdered: iOrdered, status: "Pending"});
                return `Thank you, ${cName}. Order received.`
            }
            else {
                return `Not enough items in stock.`;
            };
        };
    };
    return `Item not found.`;
};    
// call placeOrder function
console.log(placeOrder("Sandy", {name: "latte", quantity: 4}));

