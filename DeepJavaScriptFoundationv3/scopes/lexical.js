/*
Lexical scope vs Dynamic scope
standard function - dynamic - where it is called from
fat arrow - lexical - where it is defined from. if it is available there it goes up to its parents's scope. it does the same until it finds the thing else returns Error
*/


this.age = 20

function I(name){
    this.name = name;
}

I.prototype.showDetails = function(){
    return function(){
        console.log(this);      //window scope
        console.log(this.age);  //20
    }
}

I.prototype.fatArrow = () => () => console.log(this.age)  //20, explanation: first it searches in the scope where it is defined. if it was not found, then, goes to the parent's scope

let anotherMe = new I('surya')
anotherMe.showDetails()()     //window obj \n 20
anotherMe.fatArrow()()           //20




/*
Class runs on strict mode. so, the result is undefined here
*/

class Me{
    constructor(name){
        this.Name = name;
    }

    printMyName(){
        return function(){
            console.log(this.age);   //undefined
        }
    }

    showDetails(){
        return () => {
            console.log(this.age);     //undefined
        }
    }

    callMe(){
        /*
        return function(){
            console.log(this.Name)
        }.bind(this)
        */
        return () => console.log(this.Name)
    }

}


let somePartOfMe = new Me("soundarsurya");
try{
    somePartOfMe.showDetails()()
    somePartOfMe.printMyName()()
}
catch(e){
    console.log(e.name);    //TypeError
}
somePartOfMe.callMe()()


/*
Places we can't use arrow functions
    - inside a object
    - event listeners

//example 1:
someElement.addEventListener('click', () => {
    this.classList.toggel('active');     //here this refers to window
})

example 2:
let obj = {
    fn: () => {
        console.log(this)    //refers window object
    }
}
*/
