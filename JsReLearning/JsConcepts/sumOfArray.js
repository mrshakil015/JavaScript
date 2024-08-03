function getSumArray(myArray){
    let sum = 0;
    for (let i = 0; i < myArray.length; i++){
        sum = sum + myArray[i];
    }
    return sum;
}

const myArray = [30,23,44,55,53];
const result = getSumArray(myArray);
console.log(result);