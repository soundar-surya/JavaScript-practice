//type Coercion  `==`
//js is dynamically weakly typed lang.
//In js we can do somethings like,

//This is where coercion comes into play in Js
//we can't do this with strongly  typed lang like python.
var a = "are you being serious?"
a += 10;
console.log(a);     //are you being serious?10 

console.log(1 == "1");      //true
console.log(1 === "1");   //false

if(0){
    console.log(0);   //return nothing
}
//js engine coerce 1 as true 
if(1){
    console.log(true); //true
}

console.log(+0 === -0);    //true
console.log(Object.is(+0, -0));   //false
console.log(Object.is(NaN, NaN));  //true
console.log(NaN === NaN);   //false