//Accessing element by Id 
const fruitsTitleId = document.getElementById('fruits-title');

console.log(fruitsTitleId.innerText);
console.log(fruitsTitleId.innerText = 'My Fruits');

// Accessing element by class
const placeClass = document.getElementsByClassName('important-places');
console.log(placeClass);
for(const place of placeClass){
    console.log(place.innerText);
}

//Accessing element by query selector
const someLi = document.querySelectorAll('.fruits-container li')
const singleQuery = document.querySelector('.fruits-container li');
console.log(singleQuery);
console.log(someLi);
for(const li of someLi){
    console.log(li.innerText);
}