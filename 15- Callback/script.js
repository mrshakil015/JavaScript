//--Simple Function without callback--
function calculator(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function display(result){
    console.log(result);
}

let result = calculator(5,6);
display(result);


//---With callback function---
function myCalculator(num1, num2, callback){
    let sum = num1 + num2;
    if(callback) callback(sum);
}
function myDisplay(result){
    console.log(result);
}
myCalculator(5,6, myDisplay);