//Imperative vs Declarative

//Example 1

//Imperative
//For example - Computer systems are imperative. We have to say what to do and how to do.
//another eg: Jquery is Imperative(we are directly accessing dom). whereas React is not(It hides the hard parts, react lib taks care of dom).

//This loop is Imperative. we're telling what to do and how to do.
for(let i = 0; i < 3; i++){
    console.log(i)
}

//Declarative
[1, 2, 3].map( i => console.log(i))