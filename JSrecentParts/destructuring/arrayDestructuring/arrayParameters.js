//default values

let arr = null
//let [one, two] = arr  -> this throws TypeError. because the value of arr is null. to avoid that we can do something like this
let [one, two] = arr || []

console.log(one) //undefined

//Array parameters.
//what if the params of a function is null? to avoid the error we can set default value

function ret( [one, two] = [] ){
    return console.log(`Welcome ${one+two}!`)  //Welcome soundarsurya!
}

ret(['soundar', 'surya'])
ret([null])  //Welcome NaN!

/*-------------------------------------------------------------------------------------*/


