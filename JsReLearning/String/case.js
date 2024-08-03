const userName = 'blackPink';
const userInput = 'blackPinK';

console.log(userInput.toLowerCase());
console.log(userInput.toUpperCase());

if (userName.toLowerCase() === userInput.toLowerCase()){
    console.log('Valid user');
}
else {
    console.log('invalid user');
}