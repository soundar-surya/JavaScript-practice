/*look ahead & behind

look ahead(assertion eg> ^(start) and $(end)) : match only happens the thing right after it also true

*/

let msg = "Hello World"

console.log(msg.match(/(l.)/g) )   //[ 'll', 'ld' ]

console.log(msg.match(/(l.)$/g))  //['ld']

//positive look ahead
console.log(msg.match(/(l.)(?=o)/g));   //['ll']

//negative lookahad
console.log(msg.match(/(l.)(?!o)/g))   //[ 'lo', 'ld' ]


//Look behind

console.log(msg.match(/(?<=e)(l.)/g))  //[ 'll' ]

console.log(msg.match(/(?<!e)(l.)/g))  //[ 'lo', 'ld' ]