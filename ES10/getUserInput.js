const { stdout, stdin } = require('process')
const input = require('readline').createInterface({
    input: stdin,
    output: stdout
})

//Pyramid of Doom!!!!!!!!
//callback hell
input.question(`what's your firstName?\n`, Fname =>  {
    input.question(`what's your lastName\n`, Lname => {
        console.log(`Hello there ${Fname, Lname}`)
        input.close()
    })
})
