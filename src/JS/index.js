import '../CSS/styles.css';

const divElm = document.querySelector('div');
const htmlElm = document.querySelector(':root');

htmlElm.addEventListener('click', showHide);
document.addEventListener('keydown', showHide);

function showHide() {
  divElm.classList.toggle('showing');
}
