/*
Compilation and Execution:
~~~~~~~~~~~~~~~~~

ref - https://miro.medium.com/max/1124/1*ab5fIXSXiqsOJ7i5ztkoUg.jpeg

    compilation phase:
        1. when we run a javascript program, The script will be tokenized and converted into a meaningful units which is called Tokens.
            then, it'll be parsed and converted into AST(abstract syntax tree).
        2. In this phase, if the compiler encounters a variable/function declaration, Then the variable will be assigned with an undefined(indicates there's no value at the moment) value.
            if there's a function the whole function will be parsed.
        3. And the scope will be assigned to the variable/function in this phase.

    Execution phase:
        1. JS VM is responsible for executing the code.
        2. when there's a function invocation, if exists somewhere in AST, the whole code will be received and executed else err will be thrown.
        3. value for the variable is assigned in this phase.

    NOTE:
        IIFE is also in compilation time. but, it will not be executed until JS engine encounters declaration(it will not be hoisted).
        In compilation phase the var/ function declaration is the only thing that parsed by the compiler and taken to the top of the scope chain.because of that mechanism
            we are able to call a function declaration before it's initialization. refer the example below
*/




var name = "soundar surya";

func();

function func(){
    var name = "surya";
    console.log(name);
    return 0;
}

/*
Note:
    - In line 23, the  variable name acts as a "Target" because it receives an assignment and the string acts as "source".
    - In line 25 func() acts as source, because it's pulling the value.
    - In line 28 the variable acts as a target because it's receiving value.
    - In line 29 the variable acts as a source because, it's pulling out the value.
*/

/*
code execution:
    -  In the compilation phase, The program will be compiled(tokenized & parsed) and converted to a tree.
    - In, execution phase, 
        - . In compilation phase that variable wil be assigned with undefined.
            eg:  var x = 1 
            ast for above line =>
                                    program
                                        |
                                    variable declaration
                                        |
                                    variableDeclarator
                                        |               |
                                        1              x(undefined)
            now, in exec phase that value will be assigned to the variable called name.
        - In line 25, there's a function invocation, the whole function will be retured from AST(uses function name as an identifier) and executed.
        - func is a function so, a new execution context will be created,
        - the same process happens the for line 28. And vm goes to line 29, vm looks for console in current execution context's scope/variable environment. there will be no such thing called
        console there. so, it goes up to the global scope. Thus, the console(global obj) will be accessed by the func function.  
        - LEXICAL SCOPE - if we can't find the variable/method in current scope it goes up to it's parent's scope.

    - shadowing - if two or more variables exist in same name in different scope it is called shadowing

    target source example:
    ~~~~~~~~~~~~~~
                    function x(arg){
                        // ..
                    }

                    x(1)
                
                    The thing that we pass in the argument of the funciton invocation, that will be received by the parameter. so, here, arg in  line 66 acts as target(coz, it is receiving data)
*/

/*
points to remember:
~~~~~~~~~~~~
    - The compilers output is not actually a reserved memory, it's a plan for how reserve memory and allocate space and all that
    - whenever a function is called the plan gets effect in memory & environment is recreated.
    - once the execution of the function is completed, that will me cleared from memory.
*/

