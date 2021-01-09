/*async programming in js
    1. callbacks
    2. promises
    3. async & await(generators)
*/

const { mainModule } = require("process")

//quick recap
//callbacks - example
function getResponse(url, cb){
    request('http://jsonplaceholder.typicode.com/todos/1', () => {
        if(res) return cb(res)
        return 'Oops. something wet wrong'
    })
}

// getResponse('https://jsonplaceholder.typicode.com/todos/1', res => {
//     console.log(res)   // {...}
// })


//promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


//async await
//it is an implementation of  generators 
//before official async await release, the generators are used with runner/bluebird/co
//eg: 

//explanation
//runner is a library that is used to resume and stop the execution of the generator function based on the completion of previously yielded promise
//here, the promise in line 38 will be yielded by the generator. Then, the runner library takes care of pausing the execution and resuming(calling .next())
// the generator to proceed further 
runner(function *main(){
    yield fetch('https://jsonplaceholder.typicode.com/todos/1')
    yield Promise.all([fakeAjax(id), fakeAjax(id)])
})
main()

//ES8 introduced async & await - a syntactic sugar
async function main(){
    let res = await fakeAjax('http://someurl.com/posts/1')
    return res
}

main()