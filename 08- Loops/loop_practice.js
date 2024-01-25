//--Qs1. Print all even numbers from 0 to 10--
console.log("--Qs1. Print all even numbers from 0 to 10--");
for (let count = 0; count<=10; count++){
    if(count%2===0){
        console.log("Even Number: ", count);
    }
}

//--Qs2. Print all odd numbers from 0 to 10--
console.log("--Qs1. Print all odd numbers from 0 to 10--");
for (let count = 0; count<=10; count++){
    if(count%2!==0){
        console.log("Odd Number: ",count);
    }
}

//--Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game nuber until the user enters correct value.--
console.log("--Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game nuber until the user enters correct value.--")
let guessNumber = 25;
let userNumber = prompt("Guess the game number: ");
while(userNumber!=guessNumber){
    userNumber = prompt("You enterd wrong number. Guess again: ");
}
console.log("Congratulations! You entered correct number.")