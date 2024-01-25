//--Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullnamne length

let inputName = prompt("Enter your name: ");
let username = `@${inputName.toLocaleLowerCase()}${inputName.length}`;
console.log(username);