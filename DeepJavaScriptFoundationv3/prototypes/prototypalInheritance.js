function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
}

function AnotherWorkshop(teacher){
    Workshop.call(this, teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(arg){
    this.ask(arg);
}

var JSRecentParts = new AnotherWorkshop("kyle");

JSRecentParts.speakUp("Is this actually inheritance?");




/*
Object.create()
    - It creates a new object and sets a passed object as a prototype to a newly created object
*/