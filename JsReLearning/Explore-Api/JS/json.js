const user = {id:1, name: 'Gorib Aamir', job:'actor'};
console.log(user)
const stringified = JSON.stringify(user);
console.log(stringified)

const shop ={
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD',
    },
    product: ['laptop', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop);

//convert into json string
const shopJson = JSON.stringify(shop);
console.log(shopJson);


// convert json into object
const shopObj = JSON.parse(shopJson);
console.log(shopObj)