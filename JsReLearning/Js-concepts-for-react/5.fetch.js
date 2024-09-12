// 1. JSON => stringify, parse

const student = {
    name: 'Rohim',
    age: 34,
    movies: ['King khan','Dhakar mastan'],

}
const studentJson = JSON.stringify(student);
console.log(studentJson)

const studentObj = JSON.parse(studentJson)
console.log(studentObj)

// 2.fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// object keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for loop
const numbers = [23,12,43,20];
numbers.forEach(number => console.log(number));
numbers.map(num => num*2);

// for of on --> array like object
// for in --> using on an object


//  add or remove from an array

const products = [
    {name: 'laptop', price: 43000, brand: 'hp', color: 'black'},
    {name: 'phone', price: 20000, brand: 'opp', color: 'white'},
    {name: 'watch', price: 1850, brand: 'casio', color: 'black'},
    {name: 'ac', price: 43000, brand: 'walton', color: 'white'},
    {name: 'laptop', price: 73000, brand: 'asus', color: 'silver'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};
// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove iteam means create a new array without the item
const remaining = products.filter(product => product.name !== 'phone')