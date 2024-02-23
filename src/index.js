import { loadingDots } from './loading-dots';
import _ from 'lodash';
import myName from './myName';

setInterval(loadingDots, 500);

function component() {
  const element = document.createElement('div');

  element.textContent = myName('Cole');
  return element;
}

document.body.appendChild(component());