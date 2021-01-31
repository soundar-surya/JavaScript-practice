/*

ref - https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison, https://262.ecma-international.org/11.0/#sec-strict-equality-comparison


Equality - both == & === are identical when the types's same. the == does === when the type's same
 == - allows coercion when types are different
 === - disallows coercion
 
 for example,
    - 1 == "1" gives true.
    - first, the the string will be coerced to toNumber("1"). so, the return value would be true 
*/

/*
first, the typeof will be performed. if both operand have same type, then === will be performed
here, operand 1 is a number & operand 2 is a string. so, the string is coerced to a number
*/
console.log(1 == "1")     //true

/*
=== disallows coercion
first, the typeof will be performed the types are not same, so the result is false
*/
console.log(1 === "1")  //false

/*
these are two different objects. so, false
*/
console.log({} == {})  //false
console.log([] == [])   //false


//corner cases
console.log(-0 === +0)  //true
console.log(-0 == +0)   //true
console.log(NaN === NaN)   //false
console.log(NaN == NaN)   //false


/*
some usage of  abstract equality comparison
example
*/

let youngSlytherin = {cunning: null}
let  oldSlytherin = {}

//being explicit 
if(
    youngSlytherin.cunning === null || youngSlytherin.cunning === undefined &&
    oldSlytherin.cunning === null || oldSlytherin.cunning === undefined
  ){
      // ..
  }

/*
alternative way: ==

Note :-  The spec says null and undefined are coercively equal to each other 

*/
console.log(null == undefined)  //true
if(
    youngSlytherin.cunning == null &&
    oldSlytherin.cunning == null
    ){
        //..
    }


