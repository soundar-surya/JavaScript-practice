function Dark(name){
    this.name = name
}

Dark.prototype.show = function(){
    return console.log(this)
}


let Khanwald = new Dark('jonas')


let proto = Object.create(Dark.prototype)

