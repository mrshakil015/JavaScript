//Simple
const numbers = [3,4,2,1,5];
const doubled = [];
for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}

console.log(doubled);

// map --> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const values = [5,6,2,12,3];
function doubleIt(num){
    console.log('Num: ',num);
    return num * 2;
}
const result = values.map(doubleIt);
console.log(result);

//-----another way
const output2 = values.map(n => n*2);
console.log(output2);

//----another way
const double2 = n => n*2;
const output3 = values.map(double2);
console.log(output3);

//-----more map
const number2 = [12,10,2,4];
const doubled2 = number2.map(num => num + 5);
console.log(doubled2);

//------more map
const friends = ['Rohim','Korim','Jodu','Tom'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);