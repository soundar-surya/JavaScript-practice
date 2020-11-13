/*closures
     closures are lexical scoped

example */
const familyTree = () => {
    let grandpa = 'Tronte';
    return () => {
        let father = 'Ulrich';
        let random = '12345';
        return () => {
            let daughter = 'Martha';
            console.log(`${grandpa} > ${father} > ${daughter}`);                        //Tronte > Ulrich > Martha
        }
    }
}

familyTree()()();


/*          Explanation

        1. First familyTree'll be invoked and it returns a function and it'll be popped out of the stack.
        2. Same happens again( the returned function will be popped  out and it returns other function).
        3. Now, the second returned function will be invoked and it logs the values.
        4. Hmm....The stacks were popped out. But, we got the desired output. This is unbelievable right? This is where closure Comes into play.
        5. Js engine scans our code before the execution. If any variables have reference inside our function. It will be marked as closure.
        6. Once the Stack is popped out the garbage collector tries to clean the environment(mark & sweap alg). If it's a closure garbage collector will not clean that because,
            that variable is referenced inside somewhere of our program. 
        7. Here, variable random will be cleaned. Because, It, has no reference inside our program.


*/