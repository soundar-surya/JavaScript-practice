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

multipleBy2(addOne(num))   //22
multipleBy2(11)   //22
console.log(num)  //10