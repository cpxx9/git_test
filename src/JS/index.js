import '../CSS/styles.css';

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'User Left',
//       message: ':(',
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WDS < Cat',
//     });
//   } else {
//     callback('Thumbs up and Subscribe');
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log(`Success: ${message}`);
//   },
//   (error) => {
//     console.log(`${error.name}: ${error.message}`);
//   }
// );

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left',
//         message: ':(',
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WDS < Cat',
//       });
//     } else {
//       resolve('Thumbs up and Subscribe');
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log(`Success: ${message}`);
//   })
//   .catch((error) => {
//     console.log(`${error.name}: ${error.message}`);
//   });

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded');
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded');
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded');
// });

// const promiseArr = [recordVideoOne, recordVideoTwo, recordVideoThree];

// Promise.race(promiseArr).then((message) => {
//   console.log(message);
// });

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra information: ${response}`);
  });
}

// makeRequest('Google')
//   .then((response) => {
//     console.log('Response has been received');
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   }).catch(err => {
//      console.log(err);
//   });

async function doWork() {
  try {
    const response = await makeRequest('google');
    console.log('response received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
