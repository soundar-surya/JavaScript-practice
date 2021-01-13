//this - is an object that the function is a prop of.


function showName(){ 
    console.log(this.name);
}
var name = 'surya';
const obj1 = {
    name: "arya stark",
    display: showName
};

//In this case, this has the same scope that showName() has which is global scope. 
showName();   //surya 

//In this case, this has the same scope that object before period has which is local scope.
obj1.display(); //arya stark

//class

class About{
    constructor(name){
        this.name = name;
    }

    fatArrow(){
        setTimeout(() => console.log(this.name), 0);
    }

    standardFunction(){
        setTimeout(function(){
            console.log(this.name);
        }, 0);
    }
}

const me = new About("surya");
me.fatArrow();
me.standardFunction();

/*---------------------------------------------------------------------------------------------------------*/
//by default - window scope 
const a = function() {
    console.log(this); //window
    const b = function() {
        console.log(this); //window,
        const c = {
            fun(){
                console.log(this); //lexical
            }
        }
        c.fun();
    }
b();
}


a();

/*---------------------------------------------------------------------------------------------------------*/
//use fat arrow fun to see the magic
const obj = {
    a(){
        console.log(this); //lexical
        const b = function(){
        console.log(this);
    }
b(); //window
    }
};

obj.a();
/*
VM4154:3 {a: ƒ}
VM4154:5 Window {0: global, 1: global, window: Window, self: Window, document: document, name: "", location: Location, …}
*/