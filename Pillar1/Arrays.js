//Arrays in js are Objects

const arr = [1, 2, 3];

//under the hood, it will be created as,
const arr_name = {
    0: 1,
    1: 2,
    2: 3
};

//checking whether it is array or not
Array.isArray(arr) ? console.log(true) : console.log(false);

