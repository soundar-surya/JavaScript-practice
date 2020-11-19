//avoid using __proto__ for prototypal inheritance. It leads to prformance issues.
//Instead try below.
//Let's discuss much deeper in upcoming modules


const Player = {
    type: 'Healer',
    power: 100 
}

//instead of using __proto__. use Object.create()
const noob = Object.create(Player);
console.log(noob.type);   //Healer
console.log(Player.isPrototypeOf(noob));   //true