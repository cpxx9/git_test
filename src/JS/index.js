import '../CSS/styles.css';

const stock = {
  fruits: ['strawberry', 'grape', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

const isShopOpen = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('Shop is closed.'));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.fruits[0]} was selected`);

    await time(0);
    console.log('Start the production.');

    await time(2000);
    console.log('cut the fruit');

    await time(1000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were added.`);

    await time(1000);
    console.log('Starting machine.');

    await time(2000);
    console.log(`Ice cream placed on ${stock.holder[0]}.`);

    await time(3000);
    console.log(`${stock.toppings[0]} was selected.`);

    await time(2000);
    console.log('Served ice cream.');
  } catch (error) {
    console.log('Customer left.', error);
  } finally {
    console.log('Shop is closed for the day.');
  }
}

kitchen();
