const products = [
    {id: 1, name: 'lenovo', price: 34099},
    {id: 2, name: 'hp', price: 23000},
    {id: 3, name: 'dell', price: 19000},
    {id: 4, name: 'mac', price: 122000},
]

// class has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
}
const lenovo = new Product('Le Le Lenovo');
console.log(lenovo);
lenovo.speak('Oba kita kau')

class Teacher{
    constructor(name, subject, address){
        this.name = name;
        this.subject = subject;
        this.address = address;
    }
    leacture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Topon Sir','Physics','dhaka');
console.log(tapan);