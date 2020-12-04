//Compose Exercise 1s

Array.prototype.reduceRight = function(...args) {
    const _this = this;
    
    return _this.reverse().reduce(...args);
}

const compose = (...args) => num => args.reduceRight( (acc, curr) => curr(acc), num )



const double = num => num * 2
const inc = num => num + 1

const NumberGame = compose(double, double, double, inc)

console.log(NumberGame(2))

