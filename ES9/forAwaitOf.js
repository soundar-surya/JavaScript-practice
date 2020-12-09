const axios = require('axios')

let url = ['https://jsonplaceholder.typicode.com/posts/1',
            'https://jsonplaceholder.typicode.com/posts/2',
            'https://jsonplaceholder.typicode.com/posts/3'
          ];

const forAwaitOf = async() => {
    const p = url.map(req => axios.get(req));
    for await(let req of p){
        let {data} = await req;
        console.log(data.id)
    }
    console.log('Hi');
//     axios.get(url[0]).then((o) => {
//         console.log(o.data.id+'---');
//         axios.get(url[1]).then( (i) => console.log(i.data.id) ).catch(() => {})
//     }).catch(() => {})
//        console.log('Hi');

}

forAwaitOf()

Promise.all(url.map(req => axios.get(req)))
    .then(arr => arr.map(i => console.log(i.data.id+'i')))
    .catch(e => console.log(e))