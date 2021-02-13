function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
}

var deepJS = new Workshop('Kyle');

// shadowing prototypes
deepJS.ask = function(question){
    // this.__proto__.ask(question); here, look at the callsite(this.__proto__.ask), it's this keyword points to workshop. so use .call() on it
    this.__proto__.ask.call(this, question);
}

deepJS.ask("is that it?");

