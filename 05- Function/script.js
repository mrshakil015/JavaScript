function myFunction() {
    console.log("Welcome to CodeMod.");
    console.log("We are learning JS");
}
myFunction();

//--Function with parameter
let message = "My name is Shakil."
function myFunction2(message){
    console.log(message);
}
myFunction2(message);


//----Function for calculte 2 numbers----
function sumFunction(a,b){
    sum = a+b;
    console.log("Summation of two number: ", sum);
}
sumFunction(43,23);

//---Function for return--
function multiplication(a,b){
    multi = a*b;
    return multi;
}
console.log("Return Function Multiplication: ", multiplication(20,5));


//---Arrow Function--
const arrowSum=(a,b) => {
    console.log(a+b);
};
arrowSum(3,2);