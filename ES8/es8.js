/*
    - Async Await
    - Object.values, entries
    - padStart, padEnd
*/


const me = {
    name: 'surya',
    age: 20
}

Object.keys(me).map(res => console.log(res))
Object.entries(me).forEach(res => console.log(res[1]));
console.log(Object.values(me))

console.log('________________________________________')


let passwd = 'IntelKeyboard'
let slicedStr = passwd.slice(2)

let str = slicedStr.padEnd(passwd.length+5, '*');

console.log(str);