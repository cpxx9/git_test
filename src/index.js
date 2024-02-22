import { loadingDots } from './loading-dots';
import _ from 'lodash';

setInterval(loadingDots, 500);

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());