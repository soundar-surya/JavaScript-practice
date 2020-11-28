//Memoization

const plus10 = num => {
    console.log('Long Time!')
    return num + 10
} 

//Let's consider there was some heavy computational task in place of console.log. so, it runs every time. It affects the performance
plus10(1)   //Long Time! 11    
plus10(1)   //Long Time! 11

//We can use Memoization to cache the values.

const addTen = () => {
    let cache = {}

    return num => {
        if(cache[num]) return cache[num]

        cache[num] = num+10
        console.log('Long Time!')
        return num + 10  
    }
}

const addNum = addTen()
console.log(addNum(5))  //Long Time! 15
console.log(addNum(5))  // 15