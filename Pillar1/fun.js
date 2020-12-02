function About(name) {
    this.name = name;
    this.show = function() {
        console.log(this.name);
    }
}

const obj = new About('surya');
obj.show();