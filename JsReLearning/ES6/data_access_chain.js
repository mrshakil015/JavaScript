// data access
const data = [{id: 1, name: 'rohim', address: 'dhaka'}];
console.log(data[0].address);

const products = {
    count: 200,
    data: [
        {id: 1, name: 'lenovo', price: 50000},
        {id: 2, name: 'macbook', price: 123000}
    ]
}
// second product price
console.log('Step-1:');
console.log(products);
console.log('Step-2:');
console.log(products.data);
console.log('Step-3:');
console.log(products.data[0]);
console.log('Step-4:');
console.log(products.data[0].price);

const user = {
    id: 2001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai',
        },
    }
}
console.log('-------Second Street Address-----');
console.log('--Step-1:');
console.log(user);
console.log('--Step-2:');
console.log(user.address);
console.log('--Step-3:');
console.log(user.address.street);
console.log('--Step-4:');
console.log(user.address.street.second);

//------Optional Chainging----------
const user2 = {
    id: 5002,
    name: 'Korim',
    address: {
        city: 'chittagong',
        country: 'Bangladesh',
    }
}
console.log('---Optional Chainging---');
console.log(user2.address.street?.second);