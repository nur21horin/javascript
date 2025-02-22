function add(a,b){
    const result=a+b;
    return result;
}
console.log(add(2,3));

function add(a,b){
    return a+b;
}
//function expression
const add2=function(a,b){ return a+b;}
//arrow function
const add3=(a,b)=>a+b;