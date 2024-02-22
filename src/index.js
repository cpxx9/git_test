import _ from 'lodash';
import { loadingDots } from './loading-dots';

setInterval(loadingDots, 500);

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());