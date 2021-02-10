//this keyword - how the function was called.

main()

var object = {
    term : "so serious"
}

function print(term){
    console.log(`${term} ${this.term}?`);
}

function main(){
    //in this case the this keyword end up pointing the object.
    print.call(object, "why");    //why so serious?
}

//***********************************************


//  Implicit binding
// example 1
var human = {
    name: "soundarsurya",
    display(){
        console.log(this.name);
    }
}

human.display();  // soundarsurya

// example 2

function display(){
    console.log(this.name);
}

var me = {
    name: "surya",
    display
}

var anotherMe = {
    name: "Ruby",
    display
}
 
//Here, one function is used in two different execution context. - flexible feature of this keyword
me.display();     //surya
anotherMe.display();    //Ruby


//Explicit binding

setTimeout( human.display , 1000);          //undefined
/*
explanation:
    setTimeout calls that function as human.display.call(window) so, the output will be undefined.
*/ 
setTimeout( human.display.bind(human) , 1000);              //soundarsurya
/*
Here, we are hard binding the cb to point human object
*/





