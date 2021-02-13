// dunderproto = __proto__
// __proto__ is getter function defined in Object.
//see the png for clear understanding

function Me(name){
    this.name = name;
}

Me.prototype.reveal = function(){
    console.log(this.name);
}

var somePartofMe = new Me('Ruby');

somePartofMe.constructor == Me;         // true

somePartofMe.__proto__ == Me.prototype;   // true

Object.getPrototypeOf(somePartofMe) == Me.prototype;   // true

/*
NOTE:
    - if there's a hard bound function, the only way to overwrite that is using new keyword.


                prototype
function ----------------->  object
            <-----------------
                constructor
*/

