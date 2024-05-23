import axios from 'axios';

const fetchData = () => {
  console.log('Fetching data...');
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.data);
};

export default fetchData;
