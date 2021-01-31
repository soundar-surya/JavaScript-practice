/*
    Equality algorithm: prefers numerical comparison
        1. typeof x same as typeof y, do ===
        2. null and undefined are coercively equal
        3. if typeof x is a number and typeof y is string, coerce the string y to a number  and vice versa
        4. if typeof x is a boolean and typeof y is number, coerce the boolean to a number and vice versa.
        5. if typeof x is a string, bool, sym and typeof y is a non-primitive, coerce the non-prim to prim by calling Toprimitive() and vice versa.
        6. else return false 
*/

//eg

let val = 1
let value = "1"

//explicit
if(Number(val) === Number(value)){
    // ..
}

/*
implicit
 Note :- coercive equality prefers Numeric comparison
 Here, the string value will be coerced to Number 
 */
if(val == value){
    // ..
}

console.log([] == 0)  //true
/*
how? 
    the operand  is non-primitive. so, ToPrimitive will be called on that. Since the coercive equality prefers numerical comparison,
    the hint would be Number so valueOf called first. it's a non-prim so valueOf returns the same. so, the Stringification of [] returns ""
    and Number("") gives 0. And now, the typeof the operands are same so, === will be called. and we get the result true.
*/

console.log([1] == 1);   //true
/*
how?
    the operand1 is non prim. toprim will be called. the valueOf returns same and the Stringification returns 1. and Number(1) gives integer 1
    then, the === will be called. so, the result will be true
*/


/*
SUMMARY
    - if types are same: ===
    - if null or undefined: equal
    - if non-primitive: ToPrimitive
    - Prefer- ToNumber 
*/

//corner cases
console.log(1 == !1)   //false
/*
how?
    1 is a truthy. the negation of truthy is false. so, the comparison becomes (1 == false)
    == prefers numerical comparison so, the boolean false will be coerced to its Number equivalent Number(false) = 0, so it becomes ( 1 == 0)
    1 is not equal to 0. so false
*/

console.log([] == ![])  //true
/*
how?
    the array is a truthy value, the negation of that will be false. so, the comparison becomes ([] == false)
    == prefers numerical comparison. so, the ToPrimitive will be called on [] and the hint will be a number. the valueOf() for non-prim
    returns the same. so, stringification will be performed. which returns "". and Number("") gives 0. so, the comparison becomes (0 == false)
    then, the boolean false will be coerced to its number equivalent which is 0. now the comparison becomes (0 == 0). the type of both operands are same
    so, === will be called and the output will be true 
*/

console.log([] != [])  //false
/*
how?
    It's an identity comparison
    the operands are different array objects, so false
*/

/*
corner cases of Boolean
*/

let arr = []

//explicit
if(Boolean(arr)){        //true, cos array is truthy
    // ..
}
//implicit
if(arr) { // ..
}

if(arr == true){    
        // false
}
/*
conversion:
    1. (arr == true)
    2. ("" == true)
    3. (0 == 1) -> false
*/

if(arr == false){
    // true
}

/*
conversion:
    1. (arr == false)
    2. ("" == false)
    3. (0 == 0) -> true
*/

/*
SUMMARY
    Avoid:
        1. == with 0 , "", "   "
        2. == with non-primitives
        3. == true or == false
    usage:
        1. when you know types go ahead with ==
        2. else use ===
*/