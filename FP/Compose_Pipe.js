//Composing multiple function which returns single function
// The objective is to multiple the number by n and convert it to positive
//Ramda - refer this lib

const multiply = num => num * 3
const makePositive = num => Math.abs(num)


//compose - right -> left
//first g will be executed and then f will be executed.
const compose = (f, g) => num => f(g(num))

//Pipe 
//inverse of compose
//Executes from left -> right
const pipe = (f, g) => num => g(f(num))

const MultiplyAndPositive = compose(multiply, makePositive)

console.log(MultiplyAndPositive(-5))


//Pipe vs Compose
//common method = f1(f2(f3(10)))
//pipe =  pipe(f3, f2, f1)(10)
//compose = pipe(f1, f2, f3)(10)