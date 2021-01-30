/*
Abstract opertaions
   1 - ToPrimitive(hint):  (algorithmic step/ conceptual operation)
        if we've something non-primitive like one of the Object type which is Object, array, function & we need
        to make it into a primitive, this is the abstract operation that's going to be involved doing that  
        
        for eg, if we are doing an numeric operation, then the hint becomes Number is its an string then the hint becomes string
        * hint "number":
             - first invokes valueof(). if it doesnt give primitive, invoke sthe toString()
             - invokes toString() if the valueOf() doesnt give primitive
             - throws Typerror if both fails  
        * hink "string":
             - first invokes toString(), if it  doesnt give primitive then,
             - invokes valuOf()
             - throws err if both fails
     
     2 - toString 
          - toString on an object returns calls ToPrimitive(coz, we are trying to covert non-prim to prim)
          - which calls toString first. if it fails to give prim then goes to valueOf else gives err

     3. toNumber
          - this operation performs valueOf first, if that fails to give primitive then goes for toString
          - if toString fails then the throws err
          - But, the numberification of an object or an array returns the param(itself) passed to the valueOf()
               so, that will be handled by toString(). so, the numberification of an object/arr is the stringification of the passed arg.
          
     4. toBoolean 
          - returns true for "truthy".
          - returns false for "falsy".
*/

//toString on arr
console.log(String(-0));   //0
console.log([].toString());   //""
console.log([1, 2, 3].toString()); //1, 2,3
console.log([undefined, null].toString());  //  ,
console.log([[], [[]]].toString());   // ,
console.log([,,,,].toString());  // ,,,

//toString on obj
//default string description of an objct/ a tag name is "Object". if we call toSTring on obj it wraps that tagname 
//which is "Object" with [object] which results in [object Object]
// the tag name can we changed - refer the link below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
console.log({}.toString());   //[object Object]
console.log({a:2}.toString());  //[object Object]


//toNumber
console.log(Number(""));       //0
console.log(Number("-0"));  // -0
console.log(Number("  009  "));   //9
console.log(Number(".0"))  //0
console.log(Number("."))   //NaN
console.log(Number(0xaf))  //175
console.log(Number(true))  //1
console.log(Number(false))     //0
console.log(Number(null))    //0
console.log(Number(undefined))  //NaN
console.log(Number([]))   //0

//exercise
console.log(Number([null]));  //0
/*
explanation:
     here, the arg is non prim, so, ToPrimitive willl be invoked
     first it checks with valueOf which returns the same arg itself.
     then, it will  be checked by toString(), so,
          [null].toString() gives " ", 
         further coercion ->  and Number("") gives 0

*/
console.log([null].toString())   //" " 

//exercise 2
console.log(Number({valueOf(){return 6}}))  // 6 
/*
Explanation:
     overwriting the valueOf:
          - object is no-prim, so, first valueOf'll b invoked.
          - here the {}.valueOf() returns 6, coz, i've overwritten the valueOf
          so, it will not go to toString(). then, the further coercion kicks in.    
*/
/*------------------------------------------------------------------------------------------------------*/
/*
toBoolean: true for truthy & false for falsy

truthy:
     "foo", 23, {a: 1}, [1, 2], true, function() {} 

falsy:
     "", 0, -0, null, NaN, false, undefined 

*/

console.log(Boolean(1))   //true
console.log(Boolean(0))  //false
console.log(Boolean(-0)) //false
console.log(Boolean({}))  //true
console.log(Boolean(false)) //false
console.log(Boolean([]))  //true


/*---------------------------------------------------*/
/*
points to remmber:
 - the spec says, if any of the operand is string for an arithmetic operation string concat'll be performed.
 - template literal uses coercion. values that passed to template literal are coerced to string. 
*/

function addRollNumber(rollNum){
     console.log(rollNum + 1)
     return rollNum + 1
}

addRollNumber("16")  //161

//forcing it to number
//the unary + operator calls the toNumber abstract operation.
addRollNumber(+"16")  //17
addRollNumber(-"16")   //15

// unary plus invokes toNumber. so, Number("") will be 0. and the result'd be 0 +  1 = 1
addRollNumber(+"")   //1

//Alternative way
addRollNumber(Number("16"))   //17

//being implicit with boolean
let x = ""
if(x) console.log('exist')
else console.log('not exist')

//being explicit with boolean 
let y = "I'am sherlocked"
if(!!y) console.log('exist')
else console.log('not exist')


//corner cases of coercion

console.log(Number(false))   //0
console.log(Number(true))   //1
console.log(1 > 2);  //false

console.log((1 > 2) < 1)  //true
/*
how?
     (1 > 2) becomes false. then(false < 1). so, implicit  coercion will be performed. then , it becomes (0 < 1)
     so, the answer will be true
*/

console.log(1 > 2 > 3);  //false
/*
how?
     first, 1 > 2 becomes false. implicit coercion coerces the boolean to number. that becomes 0. so, 0 > 3 = false
*/