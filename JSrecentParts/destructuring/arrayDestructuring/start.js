//destructuring pattern - arrays

const response = [{name:"surya", age: 20}, {name: 'veronica', age: undefined}, {name: 'georgie',age: null}]

//Imperative
let res1 = response[0]
let res2 = response[1]
let res3 = response[2]

firstname = res1.name
//                                                                          default value(if the prop is undefined)
firstage = (res1.age !== undefined) ? res1.age : 20

secondname = res2.name
secondage = (res2.age !== undefined) ? res2.age : 18

thirdname = res3.name
// if the prop is null, then the value will be null
thirdage = (res3.age !== undefined || null) ? res3.age : 2

console.log(firstname, firstage, secondname, secondage, thirdname, thirdage);


//declarative
// here, 2 is default values for age.
let [
    {name: fname, age: fage = 2},
    {name: sname, age: sage = 2},
    {name: tname, age: tage = 2}
] = response

console.log(fname, fage,sname, sage, tname, tage);


//assigning new prop
let arr = [{name: 'sheldon'}]

let [{name: character, age: charAge = 10}] = arr

console.log(character, charAge);   //sheldon 10

//mixing up with rest
let numArr = [1, 2, 3]

let [one, ...rest] = numArr

console.log(one, rest);  //1, [2, 3]