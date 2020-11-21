function CreateElf(name, power) {
    this.name = name;
    this.power = power;
}

CreateElf.prototype.attack = function(){
    //function inside a method points to global scope
    function global(){
        return `Attacks with ${this.power}`;
    }
    return global();              //to, avoid this, use bind or arrow function or self.
    //return global.bind(this);
}

global.power = 'globalScope';
const Martin = new CreateElf('martin', 'water');
console.log(Martin.attack());               //globalScope,