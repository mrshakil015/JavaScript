// 1. Where to add element
console.log('Append JS')
const placesList = document.getElementById('places-list');
console.log(placesList);
// 2. What to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. Add the child
placesList.append(li)


// 1. Where to add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. What to be added
const sectionFood = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
sectionFood.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

sectionFood.appendChild(ul);


mainContainer.appendChild(sectionFood);