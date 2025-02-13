// Task 5

// let orders = [
//     { id: 101, customer: "Alice", total: 300 },
//     { id: 102, customer: "Bob", total: 450 },
//     { id: 103, customer: "Charlie", total: 200 }
// ];

// function findOrder(orders, orderId) {
//     return orders.find(order=> order.id === orderId);
// }

// console.log(findOrder(orders, 102));
// console.log(findOrder(orders, 103));

// // Task 6

// let inventory = {
//     items: [],
//     additem(name,quantity) {
//         this.items.push({name, quantity});
//     },
//     removeFirstItem() {
//         this.items.shift();
//     }
// };

// inventory.additem("Monitor", 5);
// inventory.additem("Keyboard", 10);
// inventory.additem("Mouse", 3);
// console.log(JSON.stringify(inventory.items));
// inventory.removeFirstItem();
// console.log(JSON.stringify(inventory.items));

// Task 7

// let employees = [
//     { Position: "Developer", Name: "Alice", salary: 300 },
//     { Position: "Designer", Name: "Bob", salary: 450 },
//     { Position: "Manager", Name: "Charlie", salary: 200 }
// ];

// function findOrder(employees, employeePosition) {
//     return employees.find(employee=> employee.position === employeePosition);
// }

// console.log(findOrder(Position, "Alice"));

// Task 8

// let orders1 = [{ id: 1, customer: "Alice"}, { id: 2, customer: "Bob"}];
// let orders2 = [{ id: 3, customer: "Charlie:" }, { id: 4, customer: "David"}];

// function mergeOrders(orderA, orderB) {
//     return [...orderA, ...orderB];
// };

// console.log(mergeOrders(orders1, orders2));

// Extra:

let employee = { name: "Alice", position: "Developer", salary: 70000};

console.log(`${employee.name} is a developer and makes $${employee.salary}`)