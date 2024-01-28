let marks = [98,85,45,79,65]
console.log(marks);
console.log(marks[2]);
marks[2]= 78;
console.log(marks[2])

let heroes = ["ironman", "thor", "spiderman","batman","hulk"];
for (let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
}


for(let hero of heroes){
    console.log(hero)
}


//----Array Method---
console.log("----Array Method---");
let fooditems = ['potato','apple','litchi','tomato'];
console.log(fooditems)
fooditems.push("chips","pizza","burger");
console.log(fooditems)
fooditems.pop();
console.log(fooditems);

let arr =[11,21,31,41,51,61,71];
console.log(arr)
//--Replace
arr.splice(2,1,500);
console.log(arr)

//--Add element
arr.splice(1,0,325);
console.log(arr);

//--Delete element
arr.splice(3,1);
console.log(arr)