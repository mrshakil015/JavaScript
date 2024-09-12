// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

//------------2. conditions------------
//  6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions:  &&, ||
if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}


//------------3. Array declare------------
// index, 
// length, push,

const numbers = [89,85,45,23];
numbers[0] =33;

//---------- 4. loop------------
for(let i=0; i<numbers; i++){
    const number = numbers[i];
    console.log(number);
}

// ------------ 5. function ------------
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const outPut = multiply(43,22);

// ------------ 6. Object------------
// 3 ways access property by name
const student = {
    name: 'Rohim',
    age: 34,
    movies: ['King khan','Dhakar mastan'],

}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['name']); // access via property name string
console.log(student[myVariable]) // access vai property name in a variable
