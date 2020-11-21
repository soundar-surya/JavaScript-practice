//avoid using __proto__ for prototypal inheritance. It leads to prformance issues.
//Instead try below.
//Let's discuss much deeper in upcoming modules


const Player = {
    type: 'Healer',
    power: 20,
    show(){
        console.log(`I'm a ${this.type}`);
    }
}

//instead of using __proto__. use Object.create()
const noob = Object.create(Player);
console.log(noob.type);   //Healer
console.log(Player.isPrototypeOf(noob));   //true

let Player2 = {
    type: 'fighter',
    power: 91
};

//Not an ideal approach
    // Player2.__proto__ = Player;
    // Player2.show();   //   I'm a  fighter

//Use this approach
Player2 = Object.assign(Object.create(Player), Player2);
Player2.show();  //I'm a fighter

console.log(Player.isPrototypeOf(Player2));  //true

//inherited props can be overwritten


console.log(Player.__proto__ === Player2.__proto__.__proto__ ) //true