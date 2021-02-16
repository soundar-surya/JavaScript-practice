//createing an element and appending to body
const elem = document.createElement('div');

//appending an element to body.
document.body.append(elem);

//appending child to div
const h3 = document.createElement('h3');
h3.innerHTML = "Hi.Hey.Hello.Hola";
elem.appendChild(h3);

//setting an attribute
h3.setAttribute("id", "div-elem");