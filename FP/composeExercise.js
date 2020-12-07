//compose Exercise


const ender = ending => input => input + ending;


const adore = ender(' rocks')
const announce = ender(`, y'all`)
const exclaim = ender('!')

const hypeUp = x => exclaim(announce(adore(x)))

console.log(hypeUp('Js'))
console.log(hypeUp("FP"))

/*
Js rocks, y'all!
FP rocks, y'all!
*/


//using Reduce
const compose = (f, g) => (...args) => f(g(...args))

const hype = (...args) => args.reduce(compose)

console.log(hype(exclaim, announce, adore)('Js')) //Js rocks, y'all!

/*-------------------*/

// Takes a "snake_case_string" and returns a split array of the words, e.g. ["snake", "case", "string"]
function desnake(snake_case_string) {
    return snake_case_string.split('_');
  }

// Takes a "string" and returns a string with the first letter capitalized, e.g. "String"
function capitalizeFirstLetter(string) {
    let firstLetter = head(string);
    firstLetter = firstLetter.toUpperCase();
    let restLetter = string.slice(1);
    return firstLetter+restLetter;
  }

  // Takes an ["array", "of", "strings"] and returns a camelized ["array", "Of", "Strings"]
function camelize(stringArray) {
    // TODO
    if(length(stringArray) === 1) {
      let First = head(stringArray);
      First = capitalizeFirstLetter(First);
      return First;
    } 
    let first = head(stringArray);
    first = capitalizeFirstLetter(first);
    let rest = tail(stringArray);
    return first.concat(camelize(rest));
  }


function result(array){
    return array;
  }

// Takes a "snake_case_string" and returns a "camelCaseString"
function snakeToCamel(snake_case_string) {
    let str = desnake(snake_case_string);
    if(length(str) === 1) return str;
    let first = str[0];
    let Camelize = camelize(str.slice(1));
    
    let camelCase =  first.concat(Camelize);
    let res = result(camelCase)
    return res;
  }

  snakeToCamel("edgecase")

