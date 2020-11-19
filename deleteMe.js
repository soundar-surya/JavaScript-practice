//Promise Examples


const callMe = param => {
    const promise = new Promise((resolve, reject) => {
        if(param > 10) resolve(`Promise resolved for ${param}`);
        else reject(`Promise rejected for ${param}`);
    });
    return promise
};


callMe(1).then( data => console.log(data)).catch( e => console.log(e));    //Promise rejected for 1

callMe(100).then(data => console.log(data)).catch( e => console.log(e));   //Promise resolved for 100