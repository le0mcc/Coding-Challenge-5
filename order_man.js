

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
// Task 4: Create a function to calculate total 
function calculateOrderTotal(order) {
    // find item in inventory to get price and calculate total
    let findItem = inventory.find(item => item.name === order.itemsOrdered.name);
    if (findItem) {
        let total = findItem.price * order.itemsOrdered.quantity;
        return `Total bill for ${order.customerName}: $${total}`;
    }
    else {
        return `Item not found.`
    };
};
// call function for latest order
console.log(calculateOrderTotal(orders[orders.length-1]));

// Task 5: Create a function to mark an order as completed
function completeOrder (custName) {
    let findCustomer = orders.find(customer => customer.customerName === custName);
    if (findCustomer) {
        findCustomer.status = "Completed";
        return `Order for ${custName}: completed`
    };
};
console.log(completeOrder("Sandy"));

// Task 6: Create a function to check pending orders
function checkPendingOrders () {
    let pendingOrders = orders.filter(order => order.status === "Pending");
    
};

let runCheck = checkPendingOrders