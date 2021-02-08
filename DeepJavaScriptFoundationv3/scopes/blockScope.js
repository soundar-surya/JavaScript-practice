/*
block scope
*/

//var behaviour

if(true){
    var x = 1;
}
console.log(x);

//let, const behaviour

if(true){
    const y = 1;
    let z = 0;
}

try{
    console.log(y, z);
}
catch(e){
    console.log(e.name);     //Ref error
}

/*-----------------------------------------------------*/

//  let & var

function fetch(){
    return Math.random();
}

function main(){
    try{
        let num = fetch();
    }
    catch(e){
        let num = -1;
    }   
    return num
}

// console.log(main())   //reference error


/*________________________________________________*/
/*
const - values can't be reassigned once assigned
const & let will hoist but in different way. if it has hoisting mechanism, first undefined will be assigned then only the value will be assigned.
    - var will be initialized with undefined but, let & const are not initialized(temporal dead zone util the control goes to the declaration)
    - we can use const for primitives.
    - but, if it is assigned to non - primitive like an array, obj the values can be modified
*/


const number = ["hi", "hello"];

number[1] = "Hey";

console.log(number);   //[ 'hi', 'Hey' ]




/*
playing with var & const
*/

something = "something";
var something;
console.log(something);    //something


random = 10;
const random;         //TDZ error        
 

/*
Note:
    - Hoisting is a metaphor that we made up
    - The correct way to call a hoisting mechanism is parsing. because, In compilation phase the code will be parsed and the function/var are moved to the
        top of the scope. so, hoisting is the term that refers parsing. 

*/