function Random(name, age){
    this.name = name;
    this.age = age;
}

Random.prototype.disp = function(){
    return console.log(this)
}

let me = new Random('surya', 20);
me.disp()
/*****************************/


let Me = {
    name: 'Surya',
    age: 20
}

let anotherMe = {
    disp(){
        return console.log(this.name)
    }
}

anotherMe = Object.assign(Me, anotherMe);
anotherMe.disp();
/****************************/


const test = text => console.log(text)
const Test = fn => fn;

Test(test('Hi'))   //Hi
/****************************/


// let Obj = {};
// Object.defineProperty(Obj, 'movie', {value: 'Happy Death Day', writable: false});
// (o => {
//     'use strict'
//     o.movie = 'sd'  //throws error
// })(Obj);
// console.log(Obj.movie);