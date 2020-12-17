//string Iterpolation: tagged functions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//Tags allows to parse the template literals with a function


let amount = 12.3
console.log(`The total for your order is ${amount}`)
//The total for your order is 12.3


//using Tags
let msg = formatCurrency`The total for your order is ${amount}`
console.log(msg)     //The total for your order is $12.30

function formatCurrency(string, ...values){
    /*
    string := [ 'The total for your order is ', '' ]
    values := [ 12.3 ] 
    */
    let str = ''
    for(let i in string){
        if(i > 0){
            if(typeof values[i-1] == 'number'){
                str += `$${values[i-1].toFixed(2)}`
            }
            else str += values[i-1]
        }
        else str += string[i]
    }
    return str
}