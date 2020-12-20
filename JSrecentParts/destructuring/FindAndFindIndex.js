//Find

let arr = [1, 2, 3, 4, 5]

const findElement = element => element > 3

//return the first match
console.log(arr.find(findElement))   //4


//FindIndex

const elementIndex = Element => Element === 3

console.log(arr.findIndex(elementIndex))    //2


//Includes
//returns a bool

console.log(arr.includes(1))   //true