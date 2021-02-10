/*
    1. is the function called by new?
    2. is the funciton called by call() , apply(), bind() ?
    3. is the function called on context object?
    4. DEFAULT - global object(except strict mode)
*/

// NOTE: if a method is passed as a callback it loses its this binding

var x = {
    name: "surya",
    fn(){
        console.log(this.name);
    }
}

x.fn();

function y(fn){
    fn;
}

y(x.fn.call(x))