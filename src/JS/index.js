import '../CSS/styles.css';

async function showAvatar() {
  const user = { name: 'cpxx9' };
  const githubResponse = await fetch(
    `https://api.github.com/users/${user.name}`
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
