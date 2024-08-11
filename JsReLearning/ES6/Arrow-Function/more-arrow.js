const difference = (x, y) => x-y;
console.log("Difference: ",difference(50,30));
const multiply = (first, second, third) => first * second * third;
console.log("Multiply: ",multiply(5,3,2));

//----- Single or One parameter----------
const student = { name: 'rohim', age:24 };
const getAge = (person) =>person.age;
const age = getAge(student);
console.log("Student Age: ",age);

const getThird = numbers => numbers[2];
const third = getThird([5,8,23,53,523]);
console.log("Getting third value: ", third);

//-----NO parameter-------
const getPI = () =>Math.PI;
console.log("PI Value: ",getPI());

//---------Large arrow function: If we want to  get anything returned from this function then we have to use the return keyword.---------
const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result  = sum + mult;
    return result;
}
console.log("Return value: ", doMath(3,8,21));