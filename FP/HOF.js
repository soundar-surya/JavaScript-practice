//Higher Order Functions

const HOF = func => func(5)

const Func = param => console.log(param)

HOF(Func)   //5


//closures
const closure = () => {
    //this variable is referenced inside other function. so, It will be marked as a closure.
    let count = 0;

    //Here, we are mutating the data of other function. FP 
    return () => {
        count++
        return count
    }

}


const counter = closure()

console.log(counter())  //1
console.log(counter())  //2