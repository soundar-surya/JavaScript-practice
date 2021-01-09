//https://www.valentinog.com/blog/generator/#asynchronous-generator-functions-in-javascript
//https://jakearchibald.com/2017/async-iterators-and-generators/
//https://thecodebarbarian.com/async-generator-functions-in-javascript.html

/*
points to remember
    - A function defined with async always returns a promise.  If we return any other value that is 
        not a promise, it will be implicitly wrapped in a promise. 
    - it must be used with await/then to get the resolved value

*/
/*async generators - another approach
    here, yield acts in two ways
        1. line 16(yield similar to await) - pulls the data/makes network request
        2. line 17(yield) serves the data to the consumers
*/
function* gen(){
    let c = 1
    while (true){
        let data = yield axios.get(`https://jsonplaceholder.typicode.com/todos/${c++}`)
        yield data
    }
   
}
let g = gen()
//console.log(g.next())  -> { value: Promise { <pending> }, done: false }
//it returns an iterator obj that has promise as a value.
g.next().value
    .then(({data}) => console.log(data))


//to avoid the confusions with yield's behaviour we can use async await with generators
//async generators
async function* gen(){
    let c = 1
    while (true){
        let {data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${c++}`)
        yield data
    }
}

let g = gen()

//console.log(g.next()) -> Promise {}
//returns a promise instead of an iterator obj. Once the promise is resolved(use await/then to access the resolved result), it returns
//an obj that has {value: <>, done: false/true}
g.next()
    .then(({value}) => console.log(value))
    .then(() => g.next())
    .then(({value}) => console.log(value))
