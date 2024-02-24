import { loadingDots } from './loading-dots';
import _ from 'lodash';
import myName from './myName';
import '../CSS/styles.css';
import Odin from '../img/odin.png'
import toml from '../data.toml';
import yaml from '../data.yaml';
import json from '../data.json5';

setInterval(loadingDots, 500);

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  element.textContent = myName('Cole');
  element.textContent += _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Odin;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());