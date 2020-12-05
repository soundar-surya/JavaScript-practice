//Finding Prime numbers using FP. 

function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

function isPrime(n) {
  if(n <= 1) return false;
  const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const possibleFactors = filter(m => m > 1 && m < n, wholes);
  const factors = filter(i => n % i === 0, possibleFactors);
  return factors.length === 0 ? true : false;
}




const prime = filter(isPrime, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(prime);

//Helpers
function concat(array1, array2) {
  return array1.concat(array2);
}

function length(array) {
  return array.length;
}

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

/*-----------------------------------------------------------*/

//map

function length(array){
  return array.length;
}


function map(fn, wholes){
  if(length(wholes) === 0) return [];

  return [fn(head(wholes))].concat(map(fn, tail(wholes)));
}



const doubled = map( n => n * 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(doubled);