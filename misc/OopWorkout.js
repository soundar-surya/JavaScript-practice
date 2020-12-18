class Me{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    show(){
        return `Hello ${this ? this.name : global.name}!`;
    }

    disp(){
        return this.show   //Hello undefined!
        // return this.show()   //Hello surya!
    }

}
// global.name = 'HAHAHA'

let surya = new Me('surya', 20);
console.log(surya.disp()())   //Hello undefined!
