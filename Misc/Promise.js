//Promise
const axios = require('axios');

const promise = new Promise((resolve, reject) => {
    if((Math.random() * 10) > 2) {
        return resolve('promise resolved');
    }
    return reject('promise rejected')
});


promise.then( data => console.log(data)).catch(e => console.log(e));


/*------------------------------*/

const URLs = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];


Promise.all(URLs.map(url => axios.get(url)))
    .then(res => res.map(({data: {id}}) => console.log(id)))
    .catch(e => console.log(e));


//axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => console.log(data)).catch(e => console.log(e))