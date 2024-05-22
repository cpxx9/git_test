#!/usr/bin/env node
// import '../CSS/styles.css';
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('peanut butter'), 1000);
  });
}

export default fetchData;
