import '../CSS/styles.css';

let stock = {
  fruits: ['strawberry', 'grape', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

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

order(2000, () => console.log(`${stock.fruits[0]} was chosen.`)).then();
