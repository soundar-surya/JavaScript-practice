const fetch = require('node-fetch');

console.log('First');
fetch('https://jsonplaceholder.typicode.com/posts').then(json => console.log(json)).catch(e => console.log(e));
console.log('Rest')

console.log(module)