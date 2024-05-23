const axios = require('axios');

const fetchData = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.data);

export default fetchData;
