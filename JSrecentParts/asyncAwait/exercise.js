//exercise 1

let axios = require('axios');

async function fetch(urls){
    //making req concurrently
    let res = urls.map(url => axios.get(url))
    // and logging thm sequentially
   for await (let i of res){
       console.log(i.data)
   }
}

fetch(['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3'])