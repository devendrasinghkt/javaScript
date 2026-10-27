// Normal fn
function onePlusAvg(x,y){
    return Math.round (1+(x + y )/2);
}
let a = 1;
let b = 2 ;
let c = 3;
console.log("one plus avg og a and b is "+ onePlusAvg(a,b));
console.log("one plus avg og a and b is "+ onePlusAvg(b,c));
console.log("one plus avg og a and b is "+ onePlusAvg(a,c));

//Arrow fn

let arrowFn = ((x,y) =>{
    return x + y;
});
console.log(arrowFn(4,3))

function hello (){
    return 'hello'
}
console.log(hello());

