#!/usr/bin/env node
import '../CSS/styles.css';

import fetchData from './util';

const button = document.querySelector('button');

const loadTitle = () =>
  fetchData().then((extractedData) => {
    const { title } = extractedData;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });

const printTitle = () => {
  loadTitle().then((title) => {
    console.log(title);
  });
};

button.addEventListener('click', printTitle);

export default printTitle;
