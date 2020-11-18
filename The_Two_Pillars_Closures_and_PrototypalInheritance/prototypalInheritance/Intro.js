/*
Prototypal Inheritance
_____________________

            - An object getting access to the methods of another object through prototypal chain.
            -                                         object{}   ->   (base object)
                                                                        I
                                                                _______
                                                               |              \
                                                        array[]         function(){}
*/




//remember everythting is an object in Js
//Here, I'm creating an array and function by inheriting the base object's methods.
//so, these things can access the base objects mthods such as toString()
//eg: 
    arr.toString();           //" "

const arr = [];
arr.__proto__                      //run it in Browser console. It returns a constructor which has array methods such as map, reduce filter, push etc..
arr.__proto__.__proto__  //Refer the diagram above. Here, It returns the base object.

function random(){};
random. __proto__       //returns the native code of the function.
random. __proto__.__proto__   //returns the base object.

//Here, I'm creating an object by inheriting the base object's methods.
const myObject = {};
myObject.__proto__    //returns the base object 