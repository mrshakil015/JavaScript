const numbers = [89,85,45,23];
const student = {
    name: 'Rohim',
    age: 34,
    movies: ['King khan','Dhakar mastan'],

}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about)

// 2. arrow function
const getFiftyFive = () => 55; //simple arrow function
const addSixtyFive = num => num + 65; // single parameter arrow function
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x+y+z; // multi perameters arrow function
const doMath = (num1, num2) =>{ //multi line arrow function
    const sum = num1 + sum2;
    return sum;
}

// 3.spread operator
const newNumbers = [...numbers];
numbers.push(99);
console.log(newNumbers)
console.log(numbers)

// create a new array from an older array and add an element
const currentNumber = [...numbers, 55];
console.log(currentNumber)
