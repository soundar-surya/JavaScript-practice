//Function Currying

const multiply = num1 => num2 => console.log(num1 * num2)

multiply(5)(5)  //25

//multiply function will be called only once. By using closures the first arg will exist in memory. then we can call the returned function whenever we want. 
const multiplayBy5 = multiply(5)

multiplayBy5(1)   //5
multiplayBy5(2)   //10  
multiplayBy5(3)   //15

/*--------------------------------------------------------------------------------*/

//Partial Application 
//Binding the function and storing that in a variable. We can pass args while binding also. and the remaining can be passed while calling it.
//bind() creates a new function and stores a reference to the original function
const sum = (a, b, c) => console.log(a+b+c)
const sumOfThree = sum.bind(null, 5)
sumOfThree(1, 2)  //8



/*
Bind implementation

function bind(fn, thisArg) {
  return function() {
    return fn.apply(thisArg, arguments);
  };
}
*/
