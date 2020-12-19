//nested object destructuring

const nestedObject = {
    obj1: {
        one: 1
    },
    two: 2
}

let { obj1:{one}, two } = nestedObject || {}

console.log(one, two)    //1 2


//Example 2

let obj = { }

//if the default is not provided for x. then TypeError will be thrown
let {
    x: {
        y = 1  //default value (1)
    } = {y: 10}   //default  value (empty obj)
} = obj || {}

console.log(y)    //10

//Example 3

let Obj = {X: {}}

let {
    X: {
        Y = 1  //default value (1)
    } = {Y: 10}   //default  value (empty obj)
} = Obj || {}

console.log(Y)   //1


//multiple destructuring

let Me = {
    name: 'surya',
    hobby: 'learning'
}

let {
    name,
    name: username,
    hobby,
    hobby: userHobby
} = Me


console.log(name, hobby, username, userHobby)   //surya learning surya learning