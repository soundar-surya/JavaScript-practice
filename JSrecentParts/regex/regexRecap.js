//Regex recap
//quantifiers(eg: ? + *) - range(a-z A-Z 0-9) - modifiers(eg : /g/m/i)

let msg = "Soundar Surya"

let re  = /(surya)/gi

console.log(msg.match(re))   //[ 'Surya' ]
console.log(re.test(msg))   //true - return bool

/*---------------------------------------------------------------------------------------------*/
//password matching with look ahead
//order doesn't matter in lookahead - pros of look ahead
let password = 'randomString1'

let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9&]{8,}/g

console.log(password.match(regex))
/*---------------------------------------------------------------------------------------------*/

