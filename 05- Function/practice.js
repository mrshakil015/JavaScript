//--Qs1. Create afunction using the "function" keyword that takes a String as argument & returns the number of vowels in the string.

let vowel =0;
function takeInput(){
    userInput = prompt("Enter a string: ").toLowerCase();
    console.log(userInput);
    for (let i =0; i<userInput.length; i++){
        if(userInput[i] =='a' || userInput[i] =='e' ||userInput[i] =='i' ||userInput[i] =='o' ||userInput[i] =='u' ){
            vowel+=1;
        }
    }
    return vowel;
}
result = takeInput();
console.log("Number of vowels: ",result);


//--Method-2
let count = 0;
function vowelFunction(str){
    console.log(str);
    for(const char of str){
        if(char =='a' || char =='e' ||char =='i' ||char =='o' ||char =='u' ){
            count+=1;
        }
    }
    return count;
}
userMessage = prompt("Enter  string: ").toLowerCase();
output = vowelFunction(userMessage);
console.log("Number of vowels: ",output);

//--Qs2. For a given array of numbers, print the square of each value using the forEach loop.
console.log("Practce question 2.");
let sqarr = [2,4,7,22]
sqarr.forEach((num)=>{
    console.log(num*num);
})