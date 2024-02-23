import { loadingDots } from './loading-dots';
import _ from 'lodash';
import myName from './myName';
import '../CSS/styles.css';

setInterval(loadingDots, 500);

function component() {
  const element = document.createElement('div');

  element.textContent = myName('Cole');
  element.textContent += _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());