//ES6 class
//Internally, classes use prototypes.

class Elf{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return `attacks with ${this.weapon}`
    }
}

const murph = new Elf('Murph', 'Axe');
console.log(murph.attack());



