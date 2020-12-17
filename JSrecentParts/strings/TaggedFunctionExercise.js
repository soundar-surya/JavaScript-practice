//we can do some preprocessing stuffs with tag functions
//

let name = 'soundar',
    github = 'soundar-surya',
    topic = 'JS Recent parts'


log(upper`Hello ${name} (@${github}), welcome to ${topic}` === 'Hello SOUNDAR (@SOUNDAR-SURYA), welcome to JS RECENT PARTS')  //true
log(upper`Hello ${name} (@${github}), welcome to ${topic}`)
function log(...self){
    return console.log(...self)
}

function upper(string, ...values){
    let str = ''
    for (let i in string){
            if(i > 0){
                if(string[i][2] == '@'){
                    let s = `${(string[i].trimStart() + values[i]).toUpperCase()}` 
                    str += s.padStart(s.length+1, ' ')
                }
                else if(string[i][0] == ')'){
                    str += `${string[i]}`
                }
                else if(string[i] == ''){
                    str += values[i-1].toUpperCase()
                }
            }
            else{
                str += (string[i] + values[i].toUpperCase() )

            }
    //         if(i > 0){
    //             str += values[i-1]+' '
    //         }
    //         else{
    //             str += string[i]
    //         }
    }
    return str
}