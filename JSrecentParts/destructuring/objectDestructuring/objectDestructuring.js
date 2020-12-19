//Object destructuring
const obj = {
    name: 'surya',
    hobby: 'learninng'
}

let {
    name: userName = 'default',
    hobby: userHobby = 'deafult'
} = obj

console.log(userName, userHobby);   //surya learninng
/*-----------------------------------------------------------------------------*/

const nothing = null

let {name} = nothing || {}

console.log(name); //undefined
/*-----------------------------------------------------------------------------*/

const callMe = ({name, hobby} = {}) =>
            console.log(`I am ${name} and my hobby is ${hobby}`)

callMe(obj)             //I am surya and my hobby is learninng

/*-----------------------------------------------------------------------------*/

/*
Object literal:

    obj = {
        prop : values
        target : source
    }

destructuring:

  let {
      prop : value,
      source : target
  } = obj



*/