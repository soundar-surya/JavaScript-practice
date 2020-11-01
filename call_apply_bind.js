const Parent = {
    FirstName: "Ned",
    LastName: "stark",
    show: function(arg){
        console.log(`The name is ${this.FirstName} ${this.LastName} aka ${arg}`);
    }
};



const Child = { FirstName: "Arya", LastName: "stark" };

Parent.show.call(Child, "wolf");

const Instance = Parent.show.bind(Child);
Instance("BLABLA");

