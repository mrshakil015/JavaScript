//-------for of loop---------
//for of use on array or string not in object
const number = [1,6,8,4];
for(const num of number){
    console.log(num);
}

const nobab = 'Sirj Ud Doula';
for(const char of nobab){
    console.log(char);
}
const glass = {
    name: 'glass',
    color: 'price',
    prince: 12,
    isCleaned: true,
};
// basically for of loop not work with the object
//optional
const keys1 = Object.keys(glass);
for(const key1 of keys1){
    const value1 = glass[key1];
    console.log(key1, value1);
}

//-------for in------
//for in use on object

for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}