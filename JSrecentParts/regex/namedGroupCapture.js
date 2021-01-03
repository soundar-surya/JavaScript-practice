//captured group - returns match and captured group
//https://2ality.com/2017/05/regexp-named-capture-groups.html

let msg = "Hello world"
console.log(msg.match(/.(l.)/))   //['ell', 'll']

//here \1 is a backref. it returns a single match by matching the first group match and 
//(\1)again checks for any match with value equal to the recent group and combine them into a single match
// here, first group's match is 'l'. so 'lo wor' and \1 means again it check for any matches that equal to the recent group. so 'lo worl'
//and 'l' -> index[1] is the first group's match 
console.log(msg.match(/([jkl])o wor\1/))   //['lo worl', 'l']

/*
the above method has many cons. if we have more groups we have use numbers to keep track of them
to resolve that named groups were introduced
*/


//named Capture groups
//we can access the match with the name 
//<RegExp>.groups.<name>
//here, \k<cap> is a backref. it takes the value of recently used group to find matches and combines it if there's any
// so, the match would be 'lo worl', 'l'
console.log(msg.match(/(?<cap>[jkl])o wor\k<cap>/)) //['lo worl', 'l']


//replacing string with named capture groups

console.log(msg.replace(/(?<capgrp>l.)/g, "-$<capgrp>-"))  //He-ll-o wor-ld-

//converting lowercase to uppercase

console.log(msg.replace(/(?<cap>l.)/g, (...args) => {
    let [,,,, {cap}] = args
    return cap.toUpperCase()
} ))   //HeLLo worLD