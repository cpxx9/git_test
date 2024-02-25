import { loadingDots } from './loading-dots';
import _ from 'lodash';
import myName from './myName';
import Odin from '../img/odin.png';
import '../CSS/styles.css';
import printMe from './print.js';

setInterval(loadingDots, 500);

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.textContent = myName('Cole');
  element.textContent += _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Odin;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());