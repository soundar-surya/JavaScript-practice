let num = 666
let obj = {a: 1, b: [2, 3, 4]}

logger`${12} This is my value: ${num} and another ${obj}`

try{
    throw new Error()
}
catch(e){
    logger`${e}`
}

function logger(string, ...values){
    str = ''
    for(let i in string){
        if(i > 0){
            if(values[i-1] && typeof values[i-1] == 'object'){
                if(values[i-1] instanceof Error){
                    str += values[i-1].stack
                    continue
                }
                else{
                    try{
                        str += JSON.stringify(values[i-1])
                        continue
                    }
                    catch(e){}
                }
            }
            str += values[i-1]
        }
        str += string[i]
    }
    console.log(str)
    return str
}