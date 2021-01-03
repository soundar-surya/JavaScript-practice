//Iterators and generators

/*
1. Iterators is a concept of iterating an element from a data source one by one.
2. any data structure that can be accessed by for of loop or ... operator is called an iterable.
3. The concept of iterable protocol is split into two
        * Iterable 
        * Iterator
    3.1 Iterable - an object itself is an iterable if it is accessed by for of/... or [Symbol.iterator]().
    3.2 An Iterable is an object that has a function/method with whose prop is [Symbol.iterator]  that
        returns an iterator object(sort of pointer like stuff) that moves over iterable to provide the data one by one
    3.3 Iterator - It is an object that return a method next() to get the next value of a DS.
4.Objects are not iterable by default
    4.1 because, it has two levels program level(Objects structure such as length, object.prototype.toString()) and
        data level(prop and its value). which leads to mixing up the two levels. so by default the plain object is not an iterable
    4.2 But, DS like array, map, set differentiates data level and program level. we use these thing to store data and do some operation with it
            so, these things are iterables by default
5. for of/.../promise.all - these things use iterables under the hood  
*/


//Examples

//Imperative way
const legends = {
    fighter: 'Alucard',
    magic: 'Eudora',
    support: 'Rafaela',
    assasin: 'Selena',
    [Symbol.iterator](){
        let count = 0
        let keys = Object.keys(this)
        return {
            next: function() {
                if(count < keys.length) {
                        return { value: this[keys[count++]], done: false }
                } 
                return {value: undefined, done: true}
            }.bind(this)
        }
    }
}

//for of
for(let value of legends){
console.log(value)
}

//spread
//only iterables can be converted into something(an array) written below. try doing sam for plain object it throws an errorlik It' s not an iterable 
console.log([...legends]);

//.next()
let iterable = legends[Symbol.iterator]()
let count = 0

while(count < 5){
    console.log(iterable.next())
    count++
}
console.log('____________________________________________________');


//Declarative way - using generators
//With generators we can pass the execution and resume it whenever we want. 
const littleLegends = {
    fighter: 'Yun Zhao',
    magic: 'Odette',
    marksman: 'Miya'
}

littleLegends[Symbol.iterator] = function* (){
   for(let i of Object.keys(this)){
       yield this[i]
   }
}

for(let i of littleLegends){
    console.log(i)
}