//dotAll modifiers

let msg = `
The quick brown fox
jumps over the
lazy dog`

// . matches everything except new line
console.log(msg.match(/brown.*over/))  //null

console.log(msg.match(/brown.*over/s))  //'brown fox\njumps over'


// /u modifier - unicode