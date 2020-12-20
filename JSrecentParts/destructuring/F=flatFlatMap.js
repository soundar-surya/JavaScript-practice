//flatmap returns the returned values from a callback by 1 level

let x = [`It's sunny in`, '', 'California'];

console.log( x.flatMap(Item => [Item.split(" ")].flat(1) )); //[ "It's", 'sunny', 'in', '', 'California' ]

console.log( x.flatMap(Item => [Item.split(" ")] )); //[ [ "It's", 'sunny', 'in' ], [ '' ], [ 'California' ] ]


//Another eg
//map
console.log([1,2,[3]].map(i => [i]));     //[ [ 1 ], [ 2 ], [ [ 3 ] ] ]

//flatmap
//here i am returning each elem in an individual array. flatMap by default returns an element by level 1 flating
console.log([1, 2, [3]].flatMap(i => [i]))