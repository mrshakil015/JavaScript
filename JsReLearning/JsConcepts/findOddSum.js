function getOddSum(myArray){
    let sum = 0;
    for (let i = 0; i < myArray.length; i++){
        const element = myArray[i];
        if ((element%2)!=0){
            sum = sum + element;
        }
    }
    return sum;
}

const myArray = [30,22,44,55,53];
const result = getOddSum(myArray);
console.log(result);