//Promises are pushed to Job queue/Microtaskqueue
//Which has higher preference.

//https://html.spec.whatwg.org/multipage/webappapis.html#task-queue

setTimeout( () => console.log('Timer') , 0);

Promise.resolve('Hello').then(res => console.log(res))

//eg:

console.log('script start')

const interval = setInterval(() => {
  console.log('setInterval')
}, 0)

setTimeout(() => {
  console.log('setTimeout 1')

  Promise.resolve()
    .then(() => console.log('promise 3'))
    .then(() => console.log('promise 4'))
    .then(() => {
      setTimeout(() => {
        console.log('setTimeout 2')
        Promise.resolve().then(() => console.log('promise 5'))
          .then(() => console.log('promise 6'))
          .then(() => clearInterval(interval))
      }, 0)
    })
}, 0)

Promise.resolve()
  .then(() => console.log('promise 1'))
  .then(() => console.log('promise 2'))