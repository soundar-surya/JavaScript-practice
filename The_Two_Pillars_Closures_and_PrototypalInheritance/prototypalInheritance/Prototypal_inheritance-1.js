/*Why prototypal Inheritance?
            - Let's say we have multiple objects like CopyCat(refer blow). And those obj's need to inherit props from AboutMe(refer below). We can simply copy the props. But, it is not an efficient method.
                we're making multiple copies of same thing. Also it makes use of more memory.
            - so, This is where PI comes in.
            - we can just inherit props instead of doing inefficient things.  

*/

//Examples

const AboutMe = {
    name: 'soundar surya',
    age: 20,
    student: true,
    showMe(){
        if(this.student === true){
            console.log(`Hi! I'm ${this.name}`);
        }
    }
};

const CopyCat = {
    name: 'pomsky',
    age: 10
};

//Let's inherit props from AboutMe object.
const display = AboutMe.showMe.bind(CopyCat);
display();   //undefined
/*
    Because, student prop is not exist in CopyCat.
*/

 //Using proto
 //.__proto__ is also not an efficient method. Let's see an alternative in ObjectOriented Module 
 CopyCat.__proto__ = AboutMe;
 CopyCat.showMe();                                  //Hi! I'm pomsky
 console.log(CopyCat.student);              // true

 //Let's Play around with proto.
 for(let prop in CopyCat){
     console.log(prop);                               //returns all props including those props inherited from AboutMe
 }

 for(let prop in CopyCat){
     if(CopyCat.hasOwnProperty(prop)){
         console.log(prop);                           //name, age
     }
 }

console.log(AboutMe.isPrototypeOf(CopyCat));   //true, because AboutMe is a prototype of CopyCat 
console.log(CopyCat.isPrototypeOf(AboutMe));   //false
 
//if property doesn't exist in current object js engine goes up to the prototypal chain until it finds the prop. If it doesn't exist initializes with undefined
console.log(CopyCat.hahah);  //undefined

//Throws error if the function isn't exist.
//CopyCat.hhaha();   //typeError


//Here, js engin goes up of base object and returns null. because, Object.__proto__ returns bas object.
Object.__proto__.__proto__  //null