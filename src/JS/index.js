import '../CSS/styles.css';

const img = document.querySelector('img');
const changeGifBtn = document.querySelector('#changeGif');
const searchBox = document.querySelector('#search');

function getGif(searchTerm) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=niJ4T4l1OG8uS68mGo6Qr5m5nkvVbOLc&s=${searchTerm}`,
    {
      mode: 'cors',
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.data.images) {
        img.src = response.data.images.original.url;
      } else {
        console.log(new Error('No items found!'));
      }
    })
    .catch((err) => {
      console.log(new Error(err));
    });
}

getGif('cats');

changeGifBtn.addEventListener('click', () => {
  getGif(searchBox.value);
});
