const phones = [
    {name: 'Samsumg', camera: '30MP', storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: '20MP', storage: '16gb', price: 20000, color: 'black'},
    {name: 'Xaiomi', camera: '24MP', storage: '64gb', price: 22000, color: 'white'},
    {name: 'Oppo', camera: '50MP', storage: '64gb', price: 19500, color: 'white'},
    {name: 'Nokia', camera: '25MP', storage: '64gb', price: 25600, color: 'white'},
]

function cheapestPhone(phones){
    let cheapest = phones[0]
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myChoice = cheapestPhone(phones)
console.log(myChoice)