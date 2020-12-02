
random();
// console.log(x);

// const x = 7;

function random(){
    console.log("Voila");
}


// let favFood = 'Grilled Chicken';
// function marry(){
//     console.log(favFood);
//     let favFood = 'Rice';

//     console.log(favFood);
// }

// marry();


// function show(...args) {
//     console.log(arguments);
//     console.log(args);
//     console.log(Array.from(arguments));
// }


// show('1','2');

// function show(){
//     console.log(x);
// }

// function random(){
//     var x = 1;
//     show();
// }

// random()();


 function child(){
    console.log(r);
 }

function parent(){
    r = 100;
    return r;
}

parent();
child();
console.log(r);


//var is hoisted with udefined in allocation phase. In exec phase Demo has never been existed. It has local scope. so, engine throws error. 
var demo = function Demo(){
    return 'Hey';
}

console.log(demo()); //Hey
demo(); //error