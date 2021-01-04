/*
The poem of a Smile
by Tupac Shakur
*/

let poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`

for (let power of powers(poem)){
    console.log(power)
}

//note - ?: will not capture a group
//eg: abc, a(?=b) matches 'a' and a(?:b) matches 'ab'
function* powers(poem){
        let re = /(?<=power of )(?<thing>(?:a )?\w+).*?(?<=can )(?<verb>\w+)/gs
        let match;
        while(match = re.exec(poem)){

            let {groups: {thing, verb}={}} = match
            yield `${thing}:${verb}`
        }
}

/*
Hints:

function* powers() {...}
re = /.../g
while(match = re.exec(poem)) {...}
*/


/*
a gun:kill
fire:burn
wind:chill
mind:learn
anger:rage
a smile:heal
*/