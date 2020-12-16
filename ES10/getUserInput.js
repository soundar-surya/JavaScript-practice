const { stdout, stdin } = require('process')
const input = require('readline').createInterface({
    input: stdin,
    output: stdout
})

input.question(`what's your name?\n`, name =>  {
    console.log(`Hey there ${name}!`)
    input.close()
})
