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