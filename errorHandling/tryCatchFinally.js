//Error Handling

try{
    throw new Error('Oops, something went wrong!')
}
catch(e){
    console.log(e.message)
}
finally{
    console.log('Hell yeah!')
}

/*
Oops, something went wrong!
Hell yeah!
*/