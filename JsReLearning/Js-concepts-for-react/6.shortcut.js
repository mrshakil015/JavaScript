// Truthy --> everythig without falsy
// Falsy--> '',0,false,null,undefine

// check truthy
let myVar = 5;
if (myVar){
    myVar = myVar * 100;
}
else{
    myVar =0;
}

// ternary
let money = 300
let food1 = money > 100 ? 'biryani' : 'cha';
console.log(food1);

let drink = (money >100 && myVar > 100)?'coke':'filter water';

// number to string conversion
const num1 = 52;
const numStr = num1+'';
console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// user && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right sid ewill be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive