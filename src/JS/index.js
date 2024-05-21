#!/usr/bin/env node
// import '../CSS/styles.css';
function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter');
  }, 1000);
}

export default fetchData;
