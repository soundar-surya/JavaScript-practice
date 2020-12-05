//Proedural -> OOP

//steps - 1
//Here, we encapulated the functionalities into a singlee container  
let elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack(){
        return console.log(`attacks with ${elf.weapon}`);
    }
};

//If I want to have one more elf,
let elf2 = {
    name: 'Sally',
    weapon: 'Stones',
    attack(){
        return console.log(`attacks with ${elf2.weapon}`);
    }
};

elf.attack();
elf2.attack();

console.log('_______________________________________________________________');

//step-2 of OOP (avoid repetition)
//factory functions

function createElf(name, weapon) {
    return {
        name,
        weapon,
        attack(){
            return console.log(`attacks with ${weapon}`);
        }
    }
};

//Here, whenever a new elf created, attack() also created(replicated) in memory. name & weapon might be different for each elf.
//But, attack doesn't. So, we can use PI for avoiding this replication 
const peter = createElf('Peter', 'water');
peter.attack();

const Garry = createElf('Garry', 'fire');
Garry.attack();

console.log('_______________________________________________________________');

//to avoid replication of functions
const dwarfFunctionStore = {
    attack(){
        return console.log(`attacks with ${this.weapon}`);
    }
};

function createDwarfs(name, weapon){
    return {
        name, weapon
    }
}

const Simens = createElf('Simens', 'wind');
Simens.attack = dwarfFunctionStore.attack;
Simens.attack();

console.log('_______________________________________________________________');

//The above process involves some manual work
//Object.create() - used to reduce the manual work

const AngelFucntionStore = {
    attack(){
        return console.log(`attacks with ${this.weapon}`);
    }
};

function createAngel(name, weapon){
    //Object.create() is like a link that points to attack function
    let angel = Object.create(AngelFucntionStore)
    angel.name = name;
    angel.weapon = weapon;
    return angel;
}

const angel = createAngel('Esmeralda', 'trident');
angel.attack();

console.log(AngelFucntionStore.__proto__ === angel.__proto__.__proto__);    //true

console.log('_______________________________________________________________');

//Using function constructors
function Giants(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

//Remember, every function has prototype prop.
//In this prototype prop there will be an __proto__ prop that points to the naive function code
Giants.prototype.attack = function(){
    return console.log(`attacks with ${this.weapon}`);
}

//if we don't use new. Js engine throws an error.
//const  example = Giants('ss','sd');    //Throws an error
//coz, without new this.name, this.weapon is not created and returned.
//new creates a those variables for us and assigns the this keyword to the object where it is called from.
//NOTE: Here, this keyword doesn't point to window. new makes the this keyword to point the objects where it is called from. 

const boatHead = new Giants('BoatHead', 'Knife');
boatHead.attack();