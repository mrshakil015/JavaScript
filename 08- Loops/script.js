console.log("----------For Loop-------")
for (let i = 1; i<=5; i++){
    console.log("Md. Shakil")
}


// Calculate sum of 1 to 10
let sum = 0;
for (let num=1; num<=10; num++){
    sum +=num;
}
console.log("Summation: ",sum);

//------------While Loop------------
console.log("----------While Loop-------")
let j = 1;
while (j<=5){
    console.log("Md. Shakil");
    j++;
}


//-------------do While Loop---------
console.log("----------Do While Loop-------")
let k =1;
do {
    console.log("Md. Shakil");
    k++;
}while (k<=2);

//-------------fo-of Loop---------
console.log("---------For-of Loop-------")
let str = "Md. Shakil";
let size = 0;
for(let i of str){ //iterator ->Characters
    console.log("Characters = ", i)
    size+=1;
}
console.log("String size = ",size);


//-----------for-in Loop-----------
console.log("-----------For In Loop-----------")
let student = {
    name: "Md. Shakil",
    age: 25,
    cgpa: 3.95,
    isPass: true,
}

console.log("Print object Key:")
for (let key in student){
    console.log("Key: ",key);
}

console.log("Print object Key and Value:")
for (let key in student){
    console.log("Key: ",key, ", Value: ", student[key]);
}