/*
Generators
Generator is a function that returns an iterator. eg: some types in JS are iterables from ES6. eg: array, map, st. but, not object
spread operator also uses the iterator pattern
use case: when we have infinite number of data. we can use use generator functions.
memory efficient. only the required part occupies the memory.
we can stop & resume the execution whenever we want with th use of .next()
... && for of associated with iterators
https://dev.to/developertharun/4-ways-to-use-generator-functions-in-javascript-examples-advantages-2ohd
*/

//generator function for creating infinite number of natural numbers
function* generator(){
    let num = 1
    while(true){
        yield num++
    }
}

let gen = generator()

console.log(gen.next())  //{ value: 1, done: false }
console.log(gen.next())  //{ value: 2, done: false }
console.log(gen.next())  //{ value: 3, done: false }

//Calling a generator function inside a generator function
function* anotherGenerator(name){
    yield `I'am ${name}`
}

function* myGenerator(name){
    yield `Hi!`;
    yield* anotherGenerator(name);
    yield 'Bye!';

}

let Gen = myGenerator('surya')

console.log(Gen.next())
console.log(Gen.next())
console.log(Gen.next())
console.log(Gen.next())
// { value: 'Hi!', done: false }
// { value: "I'am surya", done: false }
// { value: 'Bye!', done: false }
//{ value: undefined, done: true }


//We can also pass arguments to generators
function* randomGenerator(){
    console.log(`Hey ${yield}`)
    console.log(`Are you from ${yield}?`)
}

let random = randomGenerator()
console.log(random.next())
random.next('SoundarSurya');
random.next('Oklahoma');

//Hey SoundarSurya
//Are you from Oklahma?

/*random workouts*/

function* Random(){
    yield 1
     console.log(yield)
    yield 2
}

/*
output: 
{ value: 1, done: false }
{ value: undefined, done: false }
2
{ value: 2, done: false }
*/

let v = Random()
console.log(v.next())
console.log(v.next())
console.log(v.next(2))


console.log('*******************');


function *G(){
    console.log(yield,'first')
    console.log(yield,'secnd')
}

l = G()
// l.next()
l.next(1)
l.next(2)
//2 first