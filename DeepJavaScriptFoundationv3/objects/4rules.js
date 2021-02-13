/*
    1. is the function called by new?
    2. is the funciton called by call() , apply(), bind() ?
    3. is the function called on context object?
    4. DEFAULT - global object(except strict mode)
*/

// NOTE: if a method is passed as a callback it loses its this binding

var term = "something";
function anonymous(){
    return function() {
        console.log(this.term);
    }
}


function main(){
    anonymous()()   //something
}


main();

/*
explanation:
    the returned function in line 19 doesn;t satisfy the above 3 rules and it's not an arrow function though. so, rule 4 will be applied which is this inside that function
    points to global scope.
*/