//Function inside the object
const myObject = {
    //--Function written method-1
    objFunc() {
        console.log("This is object function.");
    },

    //--Function written method-2
    objFunc2: function () {
        console.log("This is another object function.");
    },
};
console.log(myObject.objFunc());
console.log(myObject.objFunc2());