//nested array destructuring

let arr = [1, [2, 3], 4]

func(arr)               //1234
funcRest(arr)         //[2, 3]
ignoreSubArr(arr)  // 1 4

function func([one, [two, three], four] = []){
    return console.log(one, two, three, four)   
}

function funcRest([one, [...rest], four] = []){
    return console.log(rest)    
}

function ignoreSubArr([
    one,
    ,
    four
] = []){
    return console.log(one, four)
}

//eg 2

arr = [1, [2, [3]]]

let [one, [two, [three]]] = arr || []

console.log(one, two, three);  //1 2 3