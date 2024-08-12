const glass = {
    name: 'glass',
    color: 'price',
    prince: 12,
    isCleaned: true,
};

console.log(glass);
const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const pair = Object.entries(glass);
console.log(pair);

//---delete object property
// console.log(glass);
// delete glass.isCleaned;
// console.log(glass);


//--freeze--
// Object.freeze(glass);

//---seal---

