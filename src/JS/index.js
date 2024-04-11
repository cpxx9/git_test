import '../CSS/styles.css';

function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cloudy');
    }, 500);
  });
}

function getWeahterIcon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case 'Sunny':
          resolve('☀️');
          break;
        case 'Cloudy':
          resolve('☁️');
          break;
        case 'Raining':
          resolve('🌧️');
          break;
        default:
          reject('NO ICON FOUND');
      }
    }, 1000);
  });
}

const onSuccess = (data) => {
  console.log(`Success: ${data}`);
};

const onFail = (error) => {
  console.log(`Error: ${error}`);
};

getWeather().then(getWeahterIcon).then(onSuccess).catch(onFail);
