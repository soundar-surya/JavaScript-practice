//Primitive
//Primitives has an Object wrapper under the hood. So, numbers, bool, strings are also an object.

console.log(typeof 5)     //number
console.log(typeof true)  //boolean
console.log(typeof 'Hello there') //string
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof Symbol('Hmm')) //Symbol

/*-------------------------------------------------------------------------------------------*/

//Non-primitive
console.log(typeof {}) //object
console.log(typeof function(){}) //object 
//under the hood function is an object
//eg:
function random(){
    return 1;
}

random.x = "Voila"
console.log(random.x)     //Voila

console.log(typeof []) //object

/*-------------------------------------------------------------------------------------------*/

console.log(typeof Math) //object
console.log(typeof Date) //fucntion


