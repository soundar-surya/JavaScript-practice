//https://repl.it/@soundarsurya/IIFE-to-ES6

// (() => {
//   let getUsers = App.getUsers()

// let parentNode = document.getElementById('Parent')


// for(let name of getUsers){
//   let childnode = document.createElement('li')
//   childnode.innerHTML = name
//   parentNode.appendChild(childnode)
// }

// })()


//using ES6 Modules
import getUsers from './users.js'

const users = getUsers()

let parentNode = document.getElementById('Parent')
for(let name of users){
  let childnode = document.createElement('li')
  childnode.innerHTML = name
  parentNode.appendChild(childnode)
  }



//use webpack for CommonJS
//commonJS is synchronous
//Inorder to use commonJs in browser. we have to use module bundlers(It goes through all files/modules and spits out a single js file)
//alsoimports all dependencies required for the app