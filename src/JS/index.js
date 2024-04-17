import '../CSS/styles.css';

const img = document.querySelector('img');
const changeGifBtn = document.querySelector('#changeGif');
const searchBox = document.querySelector('#search');

async function getGif(searchTerm) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=niJ4T4l1OG8uS68mGo6Qr5m5nkvVbOLc&s=${searchTerm}`,
    {
      mode: 'cors',
    }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

getGif('cats').catch((err) => {
  console.error(err);
});

changeGifBtn.addEventListener('click', () => {
  getGif(searchBox.value).catch((err) => {
    console.error(err);
  });
});
