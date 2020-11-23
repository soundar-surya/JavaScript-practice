/*
1.new Binding
2. Implicit
3. Explicit
4.arrow functios
*/

//new Binding this
//Here, new keyword creates those variables for us and assigns this keyword to the object which it is called from
//here, this refers to the object Surya
function About(name, age){
    this.name = name;
    this.age = age;
}

const Surya = new About('Surya', 20);
console.log(Surya.name);               //surya


//Implicit Binding
const Batman = {
    name: 'Bruce Wayne',
    show(){
        return console.log(`I am ${this.name}`);
    }
};

Batman.show();                 //I am Bruce Wayne


//Explicit Binding
const superman = {
    name: 'Clarke',
    show: function(){
        return console.log(`I am ${this.name}`);
    }.bind(global || window)                  //window-browser, global - node runtime
};
name = 'Kal El'
superman.show()     //Kal El


//Arrow function
//lexical scope
const wonderWoman = {
    name: 'Diana',
    show(){
        return () => console.log(this.name);
    }
};

wonderWoman.show()()