//Module Pattern
//IIFE
//Avoids collision between two scripts/functions/variable so on and so forth.
//It allows to do some private stuffs without changing the things in outside of it's scope

let x = 1;


function throwErr(){
    x++
    return x
}

console.log(throwErr())  //2
console.log(x);   //2

//Here, the engine doesn't go up the scope chain and change the original one. the vax x exists as argument(only the org is changed) in the throwErr
//context.so, the original one stays same as before. 
//In other words, it is called as Block Scope

console.log(( num => {
    num++;
    return num;        //3
} )(x));

console.log(x);     //2

/*
 - if applications gets bigger/if we are working as a team. the scripts'll be split into modules(files).
 - using this pattern the splitting was achieved.
 - Pros: code reusability, module Pattern. 
 - Cons: if one script depends on anothe script then, it should be defined below.(Order matters).

<html>
...
<script>
    x = 1
</script>
<script>
    let random = () => console.log(x)
</script>
</html>

*/