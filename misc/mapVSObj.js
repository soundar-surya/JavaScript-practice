//map 

//part 1

const a = { name: 'Sherlock' }
const b = { name: 'Watson' }

const peopleObject = {}

peopleObject[a] = 'Detective'
peopleObject[b] = 'Doctor'

/*
In Obj the keys are coerced into strings.
Here, the key is defined as [object object]. so, it overwrites the props
There are other edge cases as well with objects. we have to write some code to find the length of obj(excluding the prototype chain props)
props are not retrieved in the insertio order
It has some default keys such as toString, hasOwnProperty,...
to avoid that we can use Objct.create(null)
*/
console.log(peopleObject)   //{ '[object Object]': 'Doctor' }

//Maps

const map = new Map()
map.set(a, 'Detective')
map.set(b, 'Doctor')

console.log(map.get(a), map.get(b))         //Detective Doctor

console.log(`-----------------------------------------------------------------------------------------------------------------------------------------`)

//part 2

const obj = { number: 2, toString(){
    return 'HAHAHA'
} }

//Here, the toString prop from its proto chain is overwritten
console.log(obj.toString())   //HAHAHA

//handling the above situation with map : )
//by default maps don't have default keys

const m = new Map()
const toString = () => 1

m.set(toString, toString())
console.log(m.get(toString).toString(), typeof m.get(toString).toString())   //1 string
