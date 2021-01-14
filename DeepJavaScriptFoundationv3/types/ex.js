//polyfill for Object.is()

if(!Object.is || true){
    Object.is = function(a, b){
        let negZeroX = isNegZero(a)
        let negZeroY = isNegZero(b)

        if(negZeroX || negZeroY) 
            return negZeroX && negZeroY
        else if(isNaN(a) && isNaN(b))
            return true
        else if(a === b)
            return true

        return false

    }
}

function isNaN(v){
    return v !== v
}

function isNegZero(v) {
    return v === 0 && 1/ v === -Infinity
}

console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);