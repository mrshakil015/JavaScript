let str = "Md. Shakil"
console.log("string is: ",str);
console.log("Length of string: ", str.length);
console.log("Print Every single characters: ");
for(let i in str){
    console.log(str[i]);
}

//------Template Literals String----------
console.log("---Template Literals---");
let specialString = `This is a template literal`;
console.log("String is: ", specialString, ",Type of: ",typeof specialString);

let strobj = {
    item: "Mouse",
    price: 40,
};

let output = `The cost of ${strobj.item} is ${strobj.price} tk.`;
console.log(output)

//-----String Methods---------
console.log("---String Methods---")
console.log("String is: ",str)
console.log("Upper Case: ", str.toUpperCase())
console.log("Lower Case: ", str.toLocaleLowerCase())
console.log("Removes whitespcae: ",str.trim()) //Remove from start and End

console.log("Slice string: ",str.slice(0,2))
console.log("Slice string: ",str.slice(5))