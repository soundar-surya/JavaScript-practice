//new ES6 DS map,weakMap, set, weakSet
//https://2ality.com/2012/01/objects-as-maps.html
//https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/#:~:text=JavaScript%20Garbage%20Collection%20is%20a,not%20allow%20for%20garbage%20collection.

/*
    - Map
    - weakMap
    - Set
    - weakSet
*/
//1. Object's keys must be string. when we give some other type it will be coerced as under the hood.
//2. retrieving the size of props and data are slow in objects. we can achieve that by looping the obj. the obj also includes
//        the inherited props. so, should use hasOwnProp() to find the props of obj.
//3. collison.if we have props like toString() in obj. It overwrites the prop. 

//In map, set => the value will be retrieved in the insertion order.
const disp = arg => console.log(arg);


let map = new Map();

map.set(1, 'one')
map.set(2, 'two')
map.delete(1)

disp(map.size)
disp(map.get(2))
map.clear();
disp(map)

//Set
//set doesn't contain dupliclates
let set = new Set();

set.add(1)
set.add(1)

disp(set) //1