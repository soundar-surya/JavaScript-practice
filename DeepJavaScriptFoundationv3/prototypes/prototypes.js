//Prototypes
// __proto__ is getter function defined in Object.

function Proto(){
    this.name = "proto";
}

Proto.prototype.reveal = function(){
    console.log('Hey there!');
}

var instance = new Proto();

instance.reveal();        //Hey there!

/*
 NOTE:
    - when we instantiate, new keyword creates a new object and sets Proto as its prototype, and it checks whether the function returns an object. in this case it's not, so,
    it return this which is the newly created object and the object is assignd to the target variable called instance.
    - so, it will not copy the methods. 
*/

/*
Remember:
    - for array, the __proto__ in array points to the Array.prototype, and the __proto__ in Array.prototype points to the
    Object function's prototype object which is Object.prototype and __proto__ in that points to null.
    - but, for functions it points to a native function then that points to Object.prototype
    - for example, if we have function x, x.__proto__ points to native code
    - Another example, Array.__proto__ also points to native code. cos, Array is a function constructor, but, Array.prototype.__proto__ points to Object.prototype. cos, Array.prototype is an object
*/