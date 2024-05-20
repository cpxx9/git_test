#!/usr/bin/env node
// import '../CSS/styles.css';
function orderTotal(order) {
  return order.items.reduce(
    (prev, curr) => curr.price * (curr.quantity || 1) + prev,
    0
  );
}

const result = fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  .then((response) => response.json())
  .then((data) => console.log(data[0].title.length));

export default orderTotal;
