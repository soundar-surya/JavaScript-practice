//Exercise 2

let numbers = {
    //using generators - declarative
    // *[Symbol.iterator](){
    //     for (let i = 1; i <= 100; i++){
    //         yield i
    //     }
    // }

    //using imperative way
    [Symbol.iterator](){
        let num = 0;
        return{
            next : () => {
                if(num <= 100) return {value: num++, done: false}
                return {value: undefined, done: true}
            }
        }
    }
}

//should print 0..100 by 1s

for (let num of numbers){
    console.log(num)
}

/*-----------------------------------------------------------------------------------------------*/

//should print 30..60 by 4s
let numObject = {
    *[Symbol.iterator](x, y, z){
        for(let i = 30; i <= y; i+=z){
            yield i
        }
    }
}


for (let i of numObject[Symbol.iterator](30, 60, 4)){
    console.log(i)
}