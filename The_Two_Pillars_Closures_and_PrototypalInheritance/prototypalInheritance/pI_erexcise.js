
//Finding previous year using prototypal Inheritance
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
};

var d = new Date('1900-10-10').lastYear();
console.log(d);


//modifying map method
Array.prototype.map = function(){
    let arr = [];
    for(let i = 0; i < this.length; i++){
        arr.push( (this[i]+1) );
    }
    return arr;
}

console.log([1,2,3].map() );     // [2, 3, 4]
