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

//numeric operators expects a numeric characters, so the operands are coerced into a number
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
//robust version
//true if the given value is NaN and its type is Number; otherwise, false.
console.log(Number.isNaN(myCatsAge));  //true
console.log(Number.isNaN('hi there'));  //false
console.log(Number.isNaN(NaN)) //true

//use case 

/*
if we design a system, and somebody expects to get a number, and we wanna 
signal to them there's no valid number to give, there is only one value that makes any sense 
at all is  NaN
*/ 

//why Number.isNaN? instead of isNaN?

const returnString = () => `Some data`
const returnNaN = () => NaN

//isNaN
//in line 121, the string that returned is coerced to NaN, to avoid such conflicts, use Number.isNaN 
isNaN(returnString()) ?  console.log('Oops') : console.log(`It's fine`)                //Oops
isNaN(returnNaN()) ?  console.log('Oops') : console.log(`It's fine`)                  //Oops

//Number.isNaN
Number.isNaN(returnString()) ? console.log('Oops') : console.log(`It's fine`)   //It's fine
Number.isNaN(returnNaN()) ? console.log('Oops') : console.log(`It's fine`)      //Oops


/*********************************/
//https://abdulapopoola.com/2016/12/19/why-javascript-has-two-zeros-0-and-0/
/*
negative zero
    - the default 0 value in js is +0
    - part of IEEE 754 spec. so, js implements signed 0. 
*/

const negativeZero = -0
//Oops 🤥
console.log(negativeZero.toString())   //0   🤥
console.log(-0 === 0)                        //true  😐
console.log(0 < -0)                             //false  😑
console.log(0 > -0)                             //false  😵

//a better utility to check the equality of zeros.
//using Object.is😆
console.log(Object.is(-0, 0))                //false 🤗

//Math.sign utility - indicates the sign of the number
//returns -1 if it is negative & 1 for positive
console.log(Math.sign(-5))    //-1
console.log(Math.sign(5))     //1

//weird behaviour
console.log(Math.sign(-0))  //-0
console.log(Math.sign(0))   //0

//fixing Math.sign utility
function sign(v){
    let val = (v !== 0) ? Math.sign(v) : (Object.is(v, -0) ? -1 : 1 )
    console.log(val)
    return val
}

sign(-3)  //-1
sign(3)    //1
sign(-0)  //-1
sign(0)   //1

/*
usecase:
eg:      lets take stock price as an example
case :  even if the stock price is 0 we get to know whether it is rising or falling with +0 & -0
*/

track(-3)   //⬇ 3
track(5)    //⬆ 5
track(-0)   //⬇ 0
track(0)   //⬆ 0

function track(v){
    let val = ( v < 0 || Object.is(v, -0) ) ? "⬇" : "⬆"
    console.log(`${val} ${Math.abs(v)}`)
    return `${val} ${Math.abs(v)}`
}


/*
Fundamental objects/built-in objects/native functions

    Object representation of primitives

*/

let date = new Date()
let regex = new RegExp()
let err = new Error()
let Obj = new Object()
let array = new Array()
let func = new Function()

let num = new Number()
let Bool = new Boolean()
let str = new String("hi")
//right way
//using primitives in a function representation diretly coerces the value to its respective primitive type 
//eg:
console.log(typeof Number("12"), typeof String(12))    //number string

//String() is like boxing(wrapping the primitive by native object and calling toString(coercion) on it) 
let Num = Number()
let boolean = Boolean()
let Str = String("hi")

console.log(new String("hi") === new String("hi"))   //false, because these're 2 different objects
console.log(String('hi') === String('hi'))  //true, it returns the primitive string, so the value will be compared here

//when we use valueOf with both , it returns true
console.log(new String("hi").valueOf() === String("hi").valueOf())

//instanceOf is used with string object.
console.log(str instanceof String)   //true
console.log(str instanceof Object)  //true

//since, String() is not an obj/funciton constructor it returns false for primitives
console.log(String('hi') instanceof Object)   //false

//https://stackoverflow.com/questions/50082312/difference-between-string-and-new-string-in-javascript