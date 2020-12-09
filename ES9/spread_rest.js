//Spread and rest operator


//Rest Example 1
//In destructuring pattern ...rest takes the remaining prop and puts that into another object.
let About = {
    name: 'surya',
    age:20,
    hobby: 'learning',
    FavLang: ['js', 'go']
}

const {name, ...rest} = About

console.log(name)   //surya
console.log(rest)   //{ age: 20, hobby: 'learning', FavLang: [ 'js', 'go' ] }

rest.hobby = 'building projects'  
console.log(rest, About);   //{ age: 20, hobby: 'building projects', FavLang: [ 'js', 'go' ] } { name: 'surya', age: 20, hobby: 'learning', FavLang: [ 'js', 'go' ] }

//Rest Example 2
//if the no of arguments are unknown we can simple use rest


const Rest = (...args) => console.log(args)


Rest(1, 2, 3, 4, 5);   //[1, 2, 3, 4, 5]


/*
-----------------------------------------------------------------------------------
*/

//spread

let me = {
    name: 'surya',
    goal: 'Explore tech'
}

let you = {...me, name:'soundar'}

console.log(you);   //{ name: 'soundar', goal: 'Explore tech' }