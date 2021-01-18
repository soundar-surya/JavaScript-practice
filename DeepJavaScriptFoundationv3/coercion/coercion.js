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
     then, it will  be checked by 
*/

console.log(Number({valueOf(){return 6}})) 