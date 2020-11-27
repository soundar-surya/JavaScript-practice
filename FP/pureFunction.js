/*
Pure function
    - No side effects.
    - React & redux use pure function
*/

//functions with side effects

const arr = [1, 2, 3]

//This mutateArray function modifies something outside of itself. so, it results in side effects. 
const mutateArray = arr => {
    arr.pop()
}

const removeLastItem = arr => {
    const newArr = [].concat(arr)
    newArr.pop()
    return console.log(newArr)
}

//Here we are mutating the array.
//mutateArray(arr)    

//no side effects
removeLastItem(arr) //1, 2

console.log(arr)    // 1, 2, 3


//side effects
function random(){
    console.log(1);
}
//It has side effects, here we are using browser to log something in the browser
random()

/*--------------------------------------------------------------------------------------------------------------------*/

//no side effect functions
// input -> output

const num = 10

const addOne = num => num+1

const multipleBy2 = num => console.log(num * 2)

// //referencial transparency. if the input is same then the output is also same
// In mathematics, Referential Transparency is the property that lets you replace an expression with its value, and not change the results of whatever you were doing.

// The counterpart of Referential Transparency is, appropriately enough, Referential Opacity. A referentially opaque function cannot guarantee always producing the same result, even when called with the same arguments.
// To give a simple example, when an optimizing compiler decides to do constant folding and replace a sentence like:

// var x = 1 + 2 * 3;
// with:

// var x = 1 + 6;
// or, even better, directly with:

// var x = 7;
// to save execution time, it's taking advantage of the fact that all mathematical expressions and functions are (by definition) referentially transparent. ...

//Here the expressionaddOne(num) returns 11. so, the input matches with the line 65. so, it is referncial transparency
multipleBy2(addOne(num))   //22
multipleBy2(11)   //22

console.log(num)  //10


//Idempotent - pure functions are Idempotent
//If the input's identical then the output's identical too


//The following function is not idempotent. the input's same but the output's not.

const rand = num => Math.random()+num

for(let i = 0; i < 5; i++){
    console.log(rand(5))   //Not Idempotent
}

//Idempotent examples  - HTTP methods
/*
    GET, PUT, DELETE are Idempotent. because, if it's called again & again the result would be same.
    POST - each and every request changes the state. So, it's not Idempotent
*/