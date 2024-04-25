#!/usr/bin/env node

// import '../CSS/styles.css';

// const company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: 'John', salary: 1000 },
//     { name: 'Alice', salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: 'Peter', salary: 2000 },
//       { name: 'Alex', salary: 1800 },
//     ],
//     internals: [{ name: 'Jack', salary: 1300 }],
//   },
// };

// function sumSalaries(deparment) {
//   if (Array.isArray(deparment)) {
//     return deparment.reduce((prev, curr) => prev + curr.salary, 0);
//   }
//   let sum = 0;
//   for (const subDep of Object.values(deparment)) {
//     sum += sumSalaries(subDep);
//   }
//   return sum;
// }

// console.log(sumSalaries(company));

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;

// const secondList = list.next.next;
// list.next.next = null;

// console.log(list);
// console.log(secondList);

// list.next.next = secondList;

// console.log(list);

// list = { value: 'new', next: list };

// console.log(list);
// const test = list.next;
// console.log(test);
// list.next = list.next.next;
// console.log(list);

// function sumTo(x) {
//   let sum = 0;
//   for (let i = 1; i <= x; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumTo(x) {
//   if (x === 1) {
//     return x;
//   }
//   return x + sumTo(x - 1);
// }

// function sumTo(x) {
//   return (x * (1 + x)) / 2;
// }

// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(100));

// function factorial(x) {
//   if (x === 1) {
//     return x;
//   }
//   return x * factorial(x - 1);
// }

// console.log(factorial(5));

// const list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function reverseList(lst) {
//   let tmp = lst;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// reverseList(list);

// function powerInt(base, power) {
//   if (power === 0) {
//     return 1;
//   }
//   return base * powerInt(base, power - 1);
// }

// console.log(powerInt(2, 0));

// function replicate(count, x) {
//   if (count <= 0) {
//     return [];
//   }
//   return [x].concat(replicate(count - 1, x));
// }

// console.log(replicate(-1, 9));
