const array = [1, 2, 3, 4];

for(var i=0; i < array.length; i++){
    setTimeout( () => {
        console.log(i);              //4 4 4 4
    } , 1000);                            //remember the event loop phases. Timers are executed after poll phase
}                                               //Here, the execution of for loop would be completed before the execution of Timers
                
/*
1. Once, the callstack gets empty. Timers(in callback queue) are executed, By that time, the value of i would be (n+1). So, the result here is 4 4 4 4. 
2. Use let(block scoped ) or closures.
*/


//using ES6 feature
for(let i = 0; i < array.length; i++){
    setTimeout( () => {
        console.log(i);                   // 0 1 2 3
    } , 1000);
}


//using closures
//
for(var i=0; i < array.length; i++){
    ( (closureI) => {
            setTimeout( () => console.log(closureI) , 1000);
    })(i);
}