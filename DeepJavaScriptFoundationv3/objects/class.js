/*
class - it runs on strict mode
    - it hard bounds its methods.
*/

class Human{
    constructor(name){
        this.name = name
    }
    reveal(){
        console.log(this.name);
    }
}

// If a class does not have a constructor. then, the constructor is taken from its parent 
class Me extends Human{
    reveal(){
        console.log('bla bla');
        super.reveal()
    }
}

var instance = new Me('surya');

instance.reveal()
/*
output:
    bla bla
    surya
*/

// example 2
class AuthErr extends Error{
    constructor(msg){
        super(msg);
        this.name = "AuthErr";
    }
}

throw new AuthErr('Oops, something went wrong')