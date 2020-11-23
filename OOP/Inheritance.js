//Inheritance - ES6 class
//Object.create - prototypal to inherit mthods from other objects


class Blueprint{
    constructor(name, ratings){
        this.name = name;
        this.ratings = ratings;
    }

    music(){
        return console.log(`Music composed by Hans Zimmers`);
    }
}

//when extending something use Super() before this keyword. Else it results in Error
class Movie extends Blueprint{
    constructor(name, ratings, awardsWon){
        super(name, ratings);
        this.awardsWon = awardsWon;
    }
}

class Tvseries extends Blueprint{
    constructor(name, ratings, music){
        super(name, ratings);
        this.music = music;
    }

    composer(){
        return `Music composed by ${this.music}`;
    }
}

const TheDarkKnight = new Movie('TheDarkKnight', 8.7, 2);
TheDarkKnight.music();

const GOT = new Tvseries('GOT', 9.1, 'Ramin Jawadi');
console.log(GOT.composer());


//using prototypal Inheritance
function BluePrint(name, ratings){
    this.name = 'abcd';
    this.ratings = ratings;
}

BluePrint.prototype.music = function() {
    console.log(`music composed by ${this.name}`);
}

function Mov(name, ratings, awardsWon) {
    let proto = Object.create(BluePrint.prototype);
    proto.name = name;
    proto.ratings = ratings;
    proto.awardsWon = awardsWon;
    return proto;
}

const x = Mov('hans zimmer', 9, 4);
x.music();  //hans zimmer