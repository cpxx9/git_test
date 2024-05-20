#!/usr/bin/env node
// import '../CSS/styles.css';
function orderTotal(order) {
  return order.items.reduce(
    (prev, curr) => curr.price * (curr.quantity || 1) + prev,
    0
  );
}

export default orderTotal;
