/*   Javascript primitiv types   

    1. Number
    2. String
    3. Undefined
    4. null
    5. Boolean
    6. Symbol
    7. BigInt
    8. Object

    1. Not everything in js is an object. things can behave like an object(eg: callable objects/funcitons)
*/

const number = 1        
const undef = undefined  
const string = 'Hey there!'
const bool = true
const nothing = null
const sym = Symbol('blabla')
const bigInteger = 10n
const obj = { love: 'JS' }
const arr = [1, 2, 3]
const fn = () => `I return nothing`

//Note : typeof guarantees to return a string
console.log(typeof typeof 1)
console.log('**************************')
console.log(typeof number)  //number
console.log(typeof undef)   //undefined
console.log(typeof string)  //string
console.log(typeof bool) //boolean

/*
Hmm...kyle says there's an historical reason behind this. also he addressed it as a bug
    - to deref the value the variable is pointing to, we can assign undefined to it
    - to deref the object's ref we have to use null. 'maybe' this was the reason for this weird behaviour, says kyle.
*/
console.log(typeof nothing)  //object
console.log(typeof sym)   //symbol
console.log(typeof bigInteger)  //bigInt
console.log(typeof obj)  //object


/*
Non- primitives - (special type of an object)

    1. function - often called as callabel objects
    2. Array - special object(not an obj but behaves like an object)
*/
console.log(typeof arr)  //object
console.log(typeof fn)  //function

/*******************************************************/

/*
kind of emptiness

undefined - currently no value/at the moment, there's nothing 
undeclared - a variable that doesn't exist
uninitialized(TDZ) - temporal dead zone - (let, const doesn't initialized with undefined like var. not hoisted like var. so, we can't access these things before the initialization like var)
*/

/*****************************************************/

/*
NaN & isNaN

NaN - Invalid number
NaN is the only thing that is not equal to itself
*/
console.log(NaN === NaN)   //false

//octal
let myAge = Number('0o24')     //20
let myNextAge = Number('21') //21

//n/a is not a valid number.
//first, the thing inside the parantheses is coerced into a number, which is invalid(n/a) in this case
let myCatsAge = Number('n/a') //NaN
console.log(myCatsAge);

//numeric operaors expects a numeric characters, so the operands are coerced into a number
//in this case myCatsAge is coerced into a number, which is invalid.
//when we do things with NaN we get "NaN back".
console.log(myAge - myCatsAge)  //NaN

//perplexingly, typeof NaN is a number. :o
console.log(typeof NaN)  //number

console.log(isNaN(myAge))  //false
console.log(isNaN(myCatsAge))  //true


//here, the string turns to an invalid number
//But, it's a string. the typeof NaN should be a number not a string
console.log(isNaN(`my son's age`)) //true

//to avoid the above conflict the below features're introduced in ES6
console.log(Number.isNaN(myCatsAge));  //true
console.log(Number.isNaN('hi there'));  //false