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
