/*
Function Expression
*/


//named function expression

var funcExp = function funcExp(){
    // ..
}

//anonymous function expression
var func = function(){
    // ..
}

/*
3 reasons to choose function expression
    1. reliable self referencing(eg. recursion). referencing the variable name in enclosing scope inside  the same funciton is not reliable. 
        instead give a name to the function and reference that inside it. else, use function declaration
    2. stack trace (helps for debugging). shows the name of the named expression while tracing(helpful in production code).
    3. self documentation (helps readers to understand the code)
*/

/*
caveats:
    - function expressions are not hoisted. because, In compilation phase, that var will be allocated with undefined and the compiler will not see the
        function that the variable is pointing to. so, it will be treated as a variable. In exec phase, if the interpreter encounters the invocation before the declaration 
        it will throw TYPEERROR
    - refer the example below
*/

//function declaration gets hoisted

iWillBeHoisted()   //Hello There!

function iWillBeHoisted(){
    console.log('Hello There!');
}


try{
    iAmStupid()
}
catch({name}){
    console.log(name)   //TypeError
}

var iAmStupid = function(){
    console.log('I am stupid!');
}