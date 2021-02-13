// OOLO pattern - Object linked to other object


var Workshop = {
    setTeacher(teacher){
        this.teacher = teacher;
    },
    ask(question){
        console.log(this.teacher, question);
    }
};

var newWorkshop = Object.assign(Object.create(Workshop), {
    speakUp(arg){
        this.ask(arg);
    }
});

newWorkshop.setTeacher("Kyle");

newWorkshop.speakUp("Is this actually inheritance?");