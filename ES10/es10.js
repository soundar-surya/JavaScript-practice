//flat and flatMap

const arr = [1, [2,3], 4]

console.log(arr.flat())   //[ 1, 2, 3, 4 ]
console.log(arr.flatMap(item => item+"|")) //[ '1|', '2,3|', '4|' ]

const array = [
        [[3], 6], [7], [8]
]

console.log(array.flat())     //[ [ 3 ], 6, 7, 8 ]
console.log(array.flat(2))   //[ 3, 6, 7, 8 ]

/*------------------------------------------------*/

let str = "       Hello"
let string = "Hola      "

console.log(str.trimStart()); //Hello
console.log(string.trimEnd()); //Hola

/*------------------------------------------------*/

//FromEntries
//opposite of Object.entries
let a = [
    [1, 'one'], [2, 'two']
]

console.log(Object.fromEntries(a));    //{ '1': 'one', '2': 'two' }
console.log(Object.entries(Object.fromEntries(a)));  //[ [ '1', 'one' ], [ '2', 'two' ] ]


/*---------------------------------------------------*/

//argument is not necessary for catch

try{
    throw new Error('RandomErr')
}
catch{
    console.log('Oops, something went wrong')
}