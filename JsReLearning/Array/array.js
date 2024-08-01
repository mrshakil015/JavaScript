var numbers = [23,54,33,42];
// get element by index
var element = numbers[2]
// set element value by index
numbers[0] = 55;
console.log(numbers)

// find index of an element
var findele = numbers.indexOf(42)
console.log(findele)

// push use to add an element end of the array
var numbers = [23,42,33,42];
numbers.push(53);
console.log(numbers);

// pop
var numbers2 = [23,42,33,42];
console.log(numbers2);
numbers2.pop();
console.log(numbers2);

// add beginning of the array
numbers2.unshift(89);
console.log(numbers2)