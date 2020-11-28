//Example

const Me = {
    name: 'surya',
    age: 20
}

const clone = obj => ({...obj, name: 'Pomsky'})

const Instance = clone(Me)

console.log(Instance.name)    //Pomsky
console.log(Me.name)              //surya

//Here, we are cloning obj with spread operator.
//The spread and Object.assign creates new object with the props of the obj that we want to clone. which occupies more memory.
//To avoid that we can implement structural sharing

//structural sharing
//  - Only modified props occupies the new memory. The remaining props will be shared between the parent obj and the cloned obj.