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
thirdage = (res3.age !== undefined) ? res3.age : 2

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

//imperative
let first = numArr[0]
let Rest = numArr.slice(1)

console.log(first, Rest)  //1, [2, 3]

//declarative
let [one, ...rest] = numArr

console.log(one, rest)  //1, [2, 3]

//storing reference of the pattern in a temp
//here ref is a temp
let Arr = [{song: 'come see the wonder', duration: '4:55'}]

let ref;
//let [{song, duration}] = ref = Arr
let song, duration
ref = [{song, duration}] = Arr
song = 'glassHouse'
ref[0].duration = '5:00'

console.log(ref, song, duration)  //[ { song: 'come see the wonder', duration: 5:00 } ] glassHouse 4:55
console.log(Arr); //[ { song: 'come see the wonder', duration: 5:00 } ] 

//In case we want to neglect specific element,
let numbers = [1, 2, 0, 3]

//Imperative approach
let temp = numbers
let ElementOne, ElementTwo, ElementThree

ElementOne = temp[0]
ElementTwo = temp[1] 
ElementThree = temp[3]

console.log(ElementOne, ElementTwo, ElementThree)   // 1 2 3

//declaratie approach

let [
    One,
    Two,
    ,
    Three
] = numbers

console.log(One, Two, Three)           // 1 2 3

//swapping using temp

let x = 10
let y = 20
let tmp;

temp = x
x = y
y = temp

console.log(x, y)  //20 10

//using destructuring
let a = 1
let b = 0
try{
[b, a] = [a, b]
}
catch{}
console.log(a, b) //0 1