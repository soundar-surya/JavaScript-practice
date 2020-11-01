//function_currying  🤫 

const Numbers = {
    num1: 5,
    num2: 5,
    mul(n1, n2){
        console.log(n1*n2);
        //console.log(this.num1*this.num2);
    }
};

//Numbers.mul();

const Num = {
    num1: 3,
    num2: 3
};


const fun = Numbers.mul.bind(Num, 2);
fun(2);

