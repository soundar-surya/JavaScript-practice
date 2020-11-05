//writing functions 
//functions are special objects which is called "Callable Objects" in js,
//eg:
function wooHoo(){
    console.log('woohooo');
}


wooHoo.a = "hello";
console.log(wooHoo.name);  //wooHoo

//under the hood, functions would be like this
//name prop wouldn't exist if it is an anonymous function.
//js engine also provids som props like call, bind, apply

        // const CallableFunction = {
        //     name: wooHoo,
        //     (): console.log('woohooo'),
        //     a: "hello"
        // }

/*------------------------------------------------------------------------------------------------------*/

function callMe(){
    return 'Hey there you beautiful people!!';
}
console.log(callMe());

/*------------------------------------------------------------------------------------------------------*/

const obj = {
    fun(){
        console.log('Hola');
    }
};
obj.fun();

/*------------------------------------------------------------------------------------------------------*/

function x(){
    return 'Hmm'
}
console.log(x.call());

/*------------------------------------------------------------------------------------------------------*/
//function constructor
const func = new Function('num', 'console.log(num)');
func(5);
/*------------------------------------------------------------------------------------------------------*/

//Functions are first class Citizens in JS.

//1
//We can assign a function to a variable
const Func = function(){};

//2
//we can pass it as an argument
const IDoMagic = fn => fn();
IDoMagic(function(){console.log('Hello my dear gorgeous friends!!!!!')});

//3
//we can return a function from a function
const test = () => () => console.log(`I'am a nested function`);

test()();


//First it checks the current execution context. If it doesn't exist control goes to global(window). if it doesn't exist there also, Then js engine throws  Reference error.
function pingMe(){
    return args;
}
// /pingMe();
//To avoid the error, define the arg in the function declarationpass it as an argument
function pingMe(args){
    return args;
}
console.log(pingMe());   //undefined

//use ES6 feature, assign value to the argument (like assigning default state in redux reducers)
function pingMe(args = 1){
    console.log(args);
}

pingMe();
