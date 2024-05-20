import orderTotal from '.';

test('calls api if index specified', () => {
  let isFakeFetchCalled = false;
  const fakeFetch = (url) => {
    isFakeFetchCalled = true;
  };
  orderTotal(fakeFetch, {
    indexCode: 0,
    items: [{ name: 'Dragon waffles', price: 20, quantity: 2 }],
  }).then((result) => {
    expect(isFakeFetchCalled).toBe(true);
  });
});

test('Quantity', () =>
  orderTotal({
    items: [{ name: 'Dragon candy', price: 2, quantity: 3 }],
  }).then((result) => expect(result).toBe(6)));

test('No quantity specified', () =>
  orderTotal({
    items: [{ name: 'Dragon candy', price: 3 }],
  }).then((result) => expect(result).toBe(3)));

test('Happy path (Example 1)', () =>
  orderTotal({
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(808)));

test('Happy path (Example 2)', () =>
  orderTotal({
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ],
  }).then((result) => expect(result).toBe(60)));
