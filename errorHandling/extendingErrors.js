
// let authError = Object.assign(Error)
// authError.name = 'random error'
// throw new authError('Oops')

//with prototypal Inheritance
function AuthenticationError(message) {
    return Object.assign(Error(message), { name: 'AuthErr' })
}

let auth = new AuthenticationError('Oops');
throw auth


//with class
class AuthError extends Error{
    constructor(message){
        super(message)
        this.name = 'authErr'
    }
}

throw new AuthError('Oops')