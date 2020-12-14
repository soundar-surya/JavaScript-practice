//Asynchronous Error Handling

//Example 1
Promise.resolve('Hello')
    .then(response => response)
    .then(res => console.log(res+' World'))   //returns Hello World
    .catch(e => {
        console.log(e)
    })

//Example 2
Promise.resolve()
    .then(() => {
        Promise.resolve()
            .then(() => {
                throw new Error('Oops, something went wrong!')
            })
            //node throws error if we do not handle error with catch in same promise,
            //But, in browser the error thrown will be caught by the catch blocks below the current promise
            //In browser, It doesn't throw error in this case
            //comment out the below catch block and run it in both node(throws error - promise without catch block err) and
            //browser - the error'll be handled by the catch blocks beneath it.
            .catch(e => {
                console.log(e.message)
            })
        return 'resolved'
    })
    .then(response => {
        console.log(response)   //resolved
    })
    .catch(e => e.message)     
    .then(err => { 
        console.log(err)         //undefined
    })

/*
Hello World
resolved
Oops, something went wrong!
undefined
*/