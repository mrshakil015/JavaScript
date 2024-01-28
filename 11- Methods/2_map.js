let nums = [2,5,4,6]
console.log("Array is: ",nums);

nums.map((val) =>{
    console.log(val);
});

//--New array generate also square the value
let newArr = nums.map((val)=>{
    return val * val;
});
console.log("New array is: ",newArr);