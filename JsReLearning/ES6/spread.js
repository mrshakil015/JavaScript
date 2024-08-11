const max = Math.max(5,3,55,23,53,21);
console.log(max);

const numbers = [34,23,11,3,5];
const arrayMax = Math.max(...numbers);
console.log("Array Max: ",arrayMax);

// User spread operator to copy
const nums = [3,4,2,5];
const nums2 = nums;
const nums3 = [...nums];

console.log(nums3);
nums.push(200);
console.log(nums3);
console.log(nums);
console.log(nums2);

// advanced
const sonkha = [...nums, 343223]; //add extra elements while copy

var a = ['Rohim','Korim', 'Jodu']; 
console.log(...a);

//Copying an Array
const numbers1 = [1, 2, 3];
const copy = [...numbers1]; // Creates a shallow copy of the array
console.log(copy); // Output: [1, 2, 3]

//Merge Array
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];
const food = [...fruits, ...vegetables];
console.log(food); // Output: ['apple', 'banana', 'carrot', 'broccoli']
