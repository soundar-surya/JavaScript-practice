//Error Handling in Async Await

(async () => {
    try{
        await Promise.reject('Rejected!!')
    }
    catch(e){
        console.log('Promise rejected!')    //Promise rejected!
    }
})();