import '../CSS/styles.css';

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch(console.error);

function double(x) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(x * 2), 2000);
  });
}

async function addTotals(x) {
  const a = await double(10);
  const b = await double(30);
  const c = await double(20);
  return x + a + b + c;
}

const safeAddTotals = handleError(addTotals);
// safeAddTotals(new Error('test')).then((result) => console.log(result));
addTotals(new Error('test')).then((result) => console.log(result));
