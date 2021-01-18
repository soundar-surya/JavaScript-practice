//getter & Setter

let obj = {
    ilove: 'javaScript',
    get love(){
        return this.ilove
    },
    set love(arg){
        this.ilove = arg
    }
}

//getter
console.log(obj.love);   //javaScript

//setter
obj.love = 'JS'

console.log(obj.love);  //JS
 
//using Object.defineProperty

let object = {
    ilove: 'javaScript'
}

Object.defineProperty(object, 'love', {
    set: function(arg){
        this.ilove = arg
    },
    get: function(){
        return this.ilove
    }
})

//getter
console.log(object.love);   //javaScript

//setter
object.love = 'JS'

console.log(object.love);  //JS

