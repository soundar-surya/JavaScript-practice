//writing promise in various ways.


const promisify = (item, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(item), delay);
    });
} 

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 3000) 


//Parallel
const Parallel = async() => {
    let promise = [a(), b(), c()]
    const [p1, p2, p3] = await Promise.all(promise)
    return `Parallel is done: ${p1} ${p2} ${p3}`
}

Parallel().then(chunk => console.log(chunk))


//Race
//Returns the first promise.

const Race = async () => {
    let promise = [a(),b(),c()]
    const Race = await Promise.race(promise)
    return `Race is done: ${Race}`
}

Race().then(chunk => console.log(chunk))

//Sequence
//Executing Promise in a sequence order. One by One

const Sequence = async () => {
    let p1 = await a();
    let p2 = await b();
    let p3 = await c();
    return `Sequence is done: ${p1} ${p2} ${p3}`
}

Sequence().then(chunk => console.log(chunk))
