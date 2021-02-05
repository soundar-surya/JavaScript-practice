/*
IIFE 
    - used to avoid polluting the global namespace/ namespace collision.
    - everything that we code inside might be private.
    - it will be compiled ahead of time. but it will be executed before its initialization like standard functions do.
        IIFE's are covered with () just to make it as an expression. so that it acts like block scope
*/

//function declaration 
func();   
function func(){
    console.log("Hello there!");
}

//Calling IIFE before initialization - gives undefined
console.log(IIFE);   //undefined

var IIFE = ( function(){
        console.log('Hey');
    }
)();

IIFE   //Hey