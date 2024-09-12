const products = [
    {name: 'laptop', price: 43000, brand: 'hp', color: 'black'},
    {name: 'phone', price: 20000, brand: 'opp', color: 'white'},
    {name: 'watch', price: 1850, brand: 'casio', color: 'black'},
    {name: 'laptop', price: 43000, brand: 'hp', color: 'black'},
    {name: 'laptop', price: 73000, brand: 'asus', color: 'silver'},

];
// 1. Map
const brands = products.map(product => product.brand);
console.log(brands)

// 2.forEach
products.forEach(product =>console.log(product))
products.forEach(product =>console.log(product.color))

products.forEach(product => {
    console.log(product.brand)
})

// 3.filter
console.log('-----------filter--------')
const cheap = products.filter(product => product.price <=5000);
console.log(cheap)
const specificName= products.filter(p => p.name.includes('p'));
console.log(specificName);

// 4.find
console.log('-----------find--------')
const special = products.find(p => p.name.includes('p'));
console.log(special);