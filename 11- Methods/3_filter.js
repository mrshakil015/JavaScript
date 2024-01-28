let arr = [1,2,3,4,5,6,7,8,9,10]
//--Filter even number
let evenArr = arr.filter((num)=>{
    return num % 2 ===0;
});
console.log("Even Number array is: ", evenArr);
