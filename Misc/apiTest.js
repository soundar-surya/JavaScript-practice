const fetch = require('node-fetch');

console.log('First');
fetch('https://jsonplaceholder.typicode.com/todos/1').then(json => console.log(json)).catch(e => console.log(e));
console.log('Rest')