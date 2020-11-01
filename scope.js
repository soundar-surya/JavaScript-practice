function demo(){
    if(true){
        let x = 1;
    }
  console.log(x);  
}
//console.log(x);
demo();
//console.log(x);
console.log('__________________________________________________');

var x = 1;
(function random(){
  console.log(x);
  var x = 0;
  console.log(x);
})();
//random();