const actor = {
    name: 'Ananta',
    age: 30,
    phone: '012345667',
    money: 2323,
}

const phone1 = actor.phone;
console.log(phone1);

// if right side is an object left side of destructring will be an object as well
// use property name as a variable that contains the property value
const {name, phone: mobile, age} = actor;
console.log(name);
console.log(age);
console.log(mobile);

//---- Array destructuring
const newNumber = [23,55];
const [x, y] = newNumber;
console.log(x);