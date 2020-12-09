//callback to async await

//using callbacks
const request = require('request');
const axios = require('axios');

const makeRequest = (url, cb) =>{
    request({ url, json: true }, (err, res) => {
        if(err) {
            cb('something went wrong!', null);
        }
        else{
            let { body:{id} } = res;
            cb(null, id);
        }
    });
};


makeRequest('https://jsonplaceholder.typicode.com/todos/1', (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
        
});


/*
To avoid callback hell,let's use promise
*/

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(({data : {id}}) => console.log(id))
    .catch((e) => console.log(e));


/*
Using Async & Await
*/
const asyncAwaitReq = async() => {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    let {data:{id}} = res;
    return console.log(id);
}

asyncAwaitReq()