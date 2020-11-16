//Exercise

const callMe = () => {
    setTimeout(() => {
        console.log(random);
    }, 4000);
    const random = 1234;
};

callMe();

/*
    1. Here, hoisting has nothing to do. Const is not hoisted.
    2. setTimeOut will be pushed to callback queue. And it waits for the callStack to get empty. Then, timer is invoked.
    3. then, it will be executed.By that time our callMe function might be popped out of the stack. so, our random varible will be created in memory and marked as closure. 

*/


//Closures and memory

const heavyDuty = index => {
    const arr = new Array(7000).fill(1);
    console.log('Created');
    return arr[index];
}

const HeavyDuty = () => {
    const arr = new Array(7000).fill(1);
    console.log('Created again!!!');
    //returning function
    return index => arr[index];
}

//array will be created and destroyed each and every time. Not efficient.
heavyDuty(5);
heavyDuty(6);
heavyDuty(1000);

//Efficient code
const random = HeavyDuty();
random(4);
random(5);

//Closures and Encapsulation
//Here public can't use some data. This function only returns an object containing 2 functions
const Explode = () => {
    let timer = 0;
    const countDown = () => timer++;
    const launch = () => {
        timer = 0;
        return 'test';
    };
    setInterval(countDown, 1000);
    const T = () => timer;
    return {
        launch, 
        T
    };
};

const nuclearBomb = Explode();
nuclearBomb.T();