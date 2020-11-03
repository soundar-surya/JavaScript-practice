//pass by value
//Primitives are pass  by value

let x = 1;
let y = x;
y++;

console.log(x);   // 1
console.log(y);  // 2


//Pass By reference
//object stores reference. when we assign obj1 to obj2 the reference is passed. so, it will end up with mutating the obj1
let userModel = {
    name: 'surya',
    password: 'EasyPeasy'
};

let adminModel = userModel;
adminModel.name = 'sound.surya';

console.log(userModel.name);    //sound.surya

//SHALLOW CLONING - if any object exist inside the current object then, the reference is passed. so, use DEEP CLONING
//copying obj1's props to new object using Object.assign
let anotherObj = Object.assign({}, userModel);
                    //or
let spreadOp = {...userModel};

anotherObj.name = 'pomsky';
spreadOp.name = 'pika pika';

console.log(spreadOp.name);         //pika pika
console.log(anotherObj.name);      //pomsky
console.log(userModel.name);      //sound.name


//DEEP CLONING
//if an object is deeply nested object then it results in performance issue.

let About = {
    name: 'surya',
    age: 20,
    hobbies: {
        1: 'sleeping',
        2: 'building projects'
    }
};

let deepClone = JSON.parse( JSON.stringify( About ) );

About.name = 'Krewella';

console.log(About.name);    //Krewella
console.log(deepClone.name);   //surya