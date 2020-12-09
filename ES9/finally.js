
//Finally - The explanation lies in the name itself.


Promise.resolve()
    .then(() => console.log('Hi'))
    .catch(e => console.log(e))
    .finally(() => console.log('Hey'))


//Example 2

Promise.resolve()
    .then(() => {
        throw Error;
    })
    .catch(e => console.log(e))
    .finally(() => console.log('Hmmmm'))
