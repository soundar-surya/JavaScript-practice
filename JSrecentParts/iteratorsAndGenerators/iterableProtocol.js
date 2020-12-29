//Objects are not iterable by default

//Imperative way
const legends = {
    fighter: 'Alucard',
    magic: 'Eudora',
    support: 'Rafaela',
    assasin: 'Selena',
    [Symbol.iterator](){
        let count = 0
        let keys = Object.keys(this)
        return {
            next: function() {
                if(count < keys.length) {
                        return { value: this[keys[count++]], done: false }
                } 
                return {value: undefined, done: true}
            }.bind(this)
        }
    }
}

//for of
for(let value of legends){
console.log(value)
}

//spread
console.log([...legends]);

//.next()
let iterable = legends[Symbol.iterator]()
let count = 0

while(count < 5){
    console.log(iterable.next())
    count++
}
console.log('____________________________________________________');


//Declarative way - using generators

const littleLegends = {
    fighter: 'Yun Zhao',
    magic: 'Odette',
    marksman: 'Miya'
}

littleLegends[Symbol.iterator] = function* (){
   for(let i of Object.keys(this)){
       yield this[i]
   }
}

for(let i of littleLegends){
    console.log(i)
}