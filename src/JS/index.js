#!/usr/bin/env node
import '../CSS/styles.css';

import { printTitle } from './util';

const button = document.querySelector('button');

button.addEventListener('click', printTitle);

export default printTitle;
