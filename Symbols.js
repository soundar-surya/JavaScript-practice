//Symbol is ES6 feature
//It provides unique values 
//Used for avoiding naming collision
//Used to declare private props 

const sym = Symbol('hola');
const sym2 = Symbol('hola');

console.log(sym === sym2);     //false

const obj = {
    random: 'random',
    [sym] : 123456
};

console.log(obj[sym]); //123456

for(let i in obj){       //random
    console.log(i);         //doesn't return symbol
}

//Symbols.for() provides non-unique symbol

const s1 = Symbol.for('key');
const s2 = Symbol.for('key');

console.log(s1 === s2);   //true