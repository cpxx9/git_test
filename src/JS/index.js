import '../CSS/styles.css';

const links = [
  'https://jsonplaceholder.typicode.com/posts/1/comments',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/posts',
];

function getTodos(resource) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        // console.log(request.responseText);
        const data = JSON.parse(request.responseText);
        console.log(data);
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log('Couth not fetch data');
        reject('Could not fetch data');
      }
    });

    request.open('GET', resource);
    request.send();
  });
}

getTodos(links[0])
  .then((data) => {
    console.log(`Promise resolved: ${data}`);
  })
  .catch((err) => {
    console.log(`Promise rejected: ${err}`);
  });
