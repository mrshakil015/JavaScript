// -----------Simple Method: Function Declaration- 1 -----------
function add1(a, b){
    const result = a + b;
    return result;
}

const sum1 = add1(3,5);
console.log(sum1);

// ---------Simple Method : Function Declaration-1 -----------
function add2(a, b){
    return a + b;
}

const sum2 = add2(3,45);
console.log(sum2);

// ---------Simple Method : Function Expression-----------
const add3 = function(a, b){
    return a + b;
}

const sum3 = add3(4,5);
console.log("Sum-3: ",sum3);

//----------- Arrow Function---------
const add4 = (a,b) => a+b;
const sum4 = add4(10,3);
console.log("Sum-4: ",sum4);

//----------- Arrow Function: Method-2 ---------
const add5 = (a,b) =>{
    return a+b;
}
const sum5 = add5(10,32);
console.log("Sum-5: ",sum5);

