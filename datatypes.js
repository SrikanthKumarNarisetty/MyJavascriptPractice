var firstName = 'John';
console.log('firstName');

var name = 'Smith';
var age = 28; 

var fullAge = true;
console.log( fullAge);

var job;
console.log(job);

job='teacher';
console.log(job);


var _3years = 3;
var [x,y] = ["John","Mark"];

console.log(x);

var x = [1,2,3,"shiva","hemanth"];
x.splice(3,"satti","kumar","xyz");
console.log(x);

var new1 = x.slice(0,3);
console.log(new1);

var new2 = [...x];
console.log(new2);

function find1 (index){
    var new3 = x.findIndex(el =>{
       return (el.index === index);   
    })
    console.log(new3);
}
find1(2);

var y = [1,2,3,"shiva"].join(" ");
console.log(y);