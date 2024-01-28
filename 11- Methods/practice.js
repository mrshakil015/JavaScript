//--Qs1. For a given array of numbers, print the square of each value using the forEach loop.
console.log("forEach Practce question.");
let sqarr = [2,4,7,22]
sqarr.forEach((num)=>{
    console.log(num*num);
})

//--Qs2. We are given array of marks of students. Filter out of the marks of students that scored 90+.
console.log("Filter() method Practce question.");
let marks = [87,96,91,99,54];

let output = marks.filter((num) => {
    return num >90;
})
console.log("New mark array: ", output);