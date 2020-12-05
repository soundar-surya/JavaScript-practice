//compose Exercise


const ender = ending => input => input + ending;


const adore = ender(' rocks')
const announce = ender(`, y'all`)
const exclaim = ender('!')

const hypeUp = x => exclaim(announce(adore(x)))

console.log(hypeUp('Js'))
console.log(hypeUp("FP"))

/*
Js rocks, y'all!
FP rocks, y'all!
*/


//using Reduce
const compose = (f, g) => (...args) => f(g(...args))

const hype = (...args) => args.reduce(compose)

console.log(hype(exclaim, announce, adore)('Js')) //Js rocks, y'all!