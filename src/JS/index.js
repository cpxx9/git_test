import '../CSS/styles.css';

const stock = {
  fruits: ['strawberry', 'grape', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

const isShopOpen = true;

function order(time, work) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Shop is closed'));
    }
  });
}

order(2000, () => console.log(`${stock.fruits[0]} was chosen.`))
  .then(() => order(0, () => console.log('Production has started')))
  .then(() => order(2000, () => console.log(`The fruit was chopped.`)))
  .then(() =>
    order(1000, () => {
      console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were chosen.`);
    })
  )
  .then(() => order(1000, () => console.log('Started the machine.')))
  .then(() =>
    order(2000, () => {
      console.log(`Ice cream placed on ${stock.holder[0]}.`);
    })
  )
  .then(() =>
    order(3000, () => {
      console.log(`${stock.toppings[0]} was selected.`);
    })
  )
  .then(() =>
    order(2000, () => {
      console.log('Ice Cream was served.');
    })
  )
  .catch(() => {
    console.log('Customer left');
  })
  .finally(() => {
    console.log('Day ended, shop closed');
  });
