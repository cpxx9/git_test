import orderTotal from '.';

const empty = () => {};

test('calls api if index specified', () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    expect(url).toBe('https://jsonplaceholder.typicode.com/users/1/todos');
    isFakeFetchCalled = true;
    return Promise.resolve({
      json: () => Promise.resolve({}),
    });
  };
  orderTotal(fakeFetch, {
    indexCode: 1,
    items: [{ name: 'Dragon waffles', price: 20, quantity: 2 }],
  }).then((result) => {
    expect(isFakeFetchCalled).toBe(true);
  });
});

test.skip('if coutnry code specified', () => {});

test('Quantity', () =>
  orderTotal(empty, {
    items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6)));

test('No quantity specified', () =>
  orderTotal(empty, {
    items: [{ name: 'Dragon candy', price: 3 }],
  }).then((result) => expect(result).toBe(3)));

test('Happy path (Example 1)', () =>
  orderTotal(empty, {
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808)));

test('Happy path (Example 2)', () =>
  orderTotal(empty, {
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60)));
