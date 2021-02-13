/*
PART - A
arrow function vs function declaration
    -arrow => (Has the scope of where it is defined).
    - function declaration {Has the scope of where it is called from} 
    - refer example 1
    - if we define function inside an object, that function has the scope of the object. refer example 2
PART B
    - this keyword
*/

//   example 1  
//  function constructor


var name  = "Julia";
// global.name = "julia";
function Me(name){
    this.name = name;
}

Me.prototype.functionDeclaration = function(){
    return function(){
        console.log(this.name);            //julia
    }
}

Me.prototype.declartionAndArrow = function(){
    return () => {
        console.log(this.name);             //soundarsurya
    }
}

Me.prototype.fatArrow = () =>  () => console.log(this.name);   //julia

Me.prototype.arrowAndDeclaration = () => 
    function(){
        console.log(this.name);           //julia
    }


//main method   
function main(){
    this.name = "surya";
}

main.prototype.show = function(Class){
    let anotherMe = new Class('soundarsurya');
    let methodArray = [
                                    anotherMe.functionDeclaration(),    
                                    anotherMe.declartionAndArrow(), 
                                    anotherMe.fatArrow(),                      
                                    anotherMe.arrowAndDeclaration()
                                    ];
    methodArray.forEach(method => {
            try{
                method();
            }
            catch(e){
                console.log(e.name);
            }
    });
}

var instance = new main();
instance.show(Me);



//ES6 class runs on strict mode.

class I{
    constructor(name){
        this.name = name;
    }

    functionDeclaration(){
        return function(){
            console.log(this.name);
        }
    }
    
    declartionAndArrow(){
        return () => {
            console.log(this.name);
        }
    }
    
    fatArrow = () =>  () => console.log(this.name);
    
    arrowAndDeclaration = () => 
        function(){
            console.log(this.name);
        }
}

console.log("******************************");

instance.show(I)


/*
Part B
    - this keyword - by default this keyword points to global object.
    - if we use objects, constructor the this keyword points to the object/constructor function
*/

let About = { 
    name: 'ruby',
    age: 10,
    fn(){
        console.log(this);              //this refers to the object
        // b = b.bind(this)    //binding the function b
        let a = () => console.log(this);  //referes the object(binds the function)
        function b(){
            console.log(this);          //refers global object
        }
        a()
        b()
    }
}


About.fn()



