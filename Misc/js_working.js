/*
    heap - memory for complex DS such as arrays, objects.
    call stack -  Executes out program.
    web api - events, timers, http are pushed to webapi. it will be pushed to callback queue once the event is triggered or timer is complete.
    callback queue - events, timers are popped out of the queue once the callstack gets empty.
*/


console.log(1)
setTimeout( () => console.log(2), 1000)
console.log(3)

//output - 1 3 2

/*
Explanation:

 - line 9 will be executed first.
 - Timer is moved to webapi.
 - line 10 will b executed.
 - after 1000ms timer is pushed to callback queue.
 - By that time the callStack would be empty. so, the timer will be pushed to the callstack and executed. 

*/