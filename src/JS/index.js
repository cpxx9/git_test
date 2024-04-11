import '../CSS/styles.css';

// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('cloudy');
//     }, 500);
//   });
// }

// function getWeahterIcon(weather) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       switch (weather) {
//         case 'Sunny':
//           resolve('☀️');
//           break;
//         case 'Cloudy':
//           resolve('☁️');
//           break;
//         case 'Raining':
//           resolve('🌧️');
//           break;
//         default:
//           reject('NO ICON FOUND');
//       }
//     }, 1000);
//   });
// }

// const onSuccess = (data) => {
//   console.log(`Success: ${data}`);
// };

// const onFail = (error) => {
//   console.log(`Error: ${error}`);
// };

// getWeather().then(getWeahterIcon).then(onSuccess).catch(onFail);

function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Good data');
    }, 200);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🥸');
    }, 500);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(errorCode) {
  console.log(`Error: ${errorCode}`);
}

function inTheEnd() {
  console.log('We be done');
}

fun1().then(fun2).then(onSuccess).catch(onError).finally(inTheEnd);
