//Reference
//https://javascript.info/native-prototypes

/*                                                    object{}   ->   (base object)
                                                                        I
                                                                _______
                                                               |              \
                         array[] (native array)        function(){}  (native function code)             
                                    |                                                       \
                        [](array that we create)                   function(){}   (function that we create)


            Takeaway: 
                1. The function/array that we create inherits the methods from its above prototypal chain which is native array/function objects.
                2. Those, native array/function objects inherits props(eg: hasOwnProps) from its above scope chain which is base object. 
                3. And that base object's __proto__ points to "null".
                
                
            prototypal chain:
                0. Only function has prototype prop with __proto__ pointer. eg:<function_name>.prototype
                1. Object, Function, Array is a bultin prototype. (refer the example below)
                1. __proto__ is a pointer.  It points to it's above chain's prototype object. And that prototype object has __proto__ That goes up and points to its above chain's prototype object

                                                                                                                                                    Null
                                                                                                                                                        I
                                                                                                    Base object's prototype: {__proto__}
                                                                                                                                        |
                                                                navtive function object's prototype: {__proto__}
                                                                                                                    |
                                            function object's that we create: {__proto__}


*/


const array = [];
const func = () => {};

//Arrays
console.log(array.hasOwnProperty('map'));        //false , because array inherits methods from up the prototype chain
console.log(array.__proto__.hasOwnProperty('map'));    //true
//native Array object
console.log(Array.prototype.hasOwnProperty('map'));    //true

//Functions
console.log(func.hasOwnProperty('name'));      //true
console.log(func.hasOwnProperty('call'));        //false, because it inherits methods from native function code
console.log(func.__proto__.hasOwnProperty('call'));  //true 
//native function object
console.log(Function.prototype.hasOwnProperty('call'));   //true,  because it is a native function object

console.log('_____________________________________________');


//playing around with prototypes
//only function has prototype prop which contains __proto__. 
//so, Array, Funtion, Object(base object) are function.
console.log(typeof Array, typeof Object, typeof Function);     //function function function

console.log(Array.prototype === array.__proto__);    //true
console.log(Function.prototype === func.__proto__);    //true
console.log(Object.prototype === {}.__proto__);    //true
console.log(Object.prototype.__proto__ === {}.__proto__.__proto__);    //null


//Remember, Only functions has prototype prop
//use constructor function to access the props. Eg: new Array()

console.log([].prototype);    //undefined
console.log(''.prototype);    //undefined
console.log({}.prototype);  //undefined