//--Qs1. For a given array with marks of students -> [85,65,98,45,87,67] find the average marks of the entire class.

let marks = [85,65,98,45,87,67];
let sum = 0;
for (let mark of marks){
    sum = sum+ mark;
    console.log(mark);
}
console.log("Summation: ", sum);
console.log("Average: ", sum/(marks.length));


//--Qs2. For a given array with prices of 5 items -> [250, 645,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let price = [250, 645,300,900,50];
i=0;
for (let val of price){
    val =val-(val/10)
    price[i]=val;
    i++;
}
console.log(price)

//Method 2
let items = [250, 645,300,900,50];

for(let i =0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -=offer;
}
console.log(items);


//--Qs3. Create an array to store companies -> "Microsoft","Uber","Google","OpenAI","IBM","Tesla"
let companies = ["Microsoft","Uber","Google","OpenAI","IBM","Tesla"];
console.log(companies);
//a. Remove the first company from the array
companies.splice(0,1);
console.log(companies);
//anothr method
companies.shift();
console.log(companies);

//b.Remove 3rd element & Add Amazon in its place
companies.splice(2,1,"Amazon");
console.log(companies)

//c.Add Facebook at the end
companies.push("Facebook")
console.log(companies)