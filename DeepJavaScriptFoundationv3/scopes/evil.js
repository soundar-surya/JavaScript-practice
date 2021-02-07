/*
with & eval leads to performance issues(will not be optimized by the compiler)
*/


//with
var numbers = {
    x : 1,
    y : 1,
    z : undefined
}

with(numbers){
    z = 10;
    q = 10;              //global variable 
}

console.log(numbers);
console.log(q);

// Evil Eval
// Don't pass a string instead of callback inside timers. it will be processed by eval

var number = 1;

function print(str){
    eval(str);
    console.log(str);    //   0, we end up changing the scope scope variable.  :(
}

print("var number = 0");