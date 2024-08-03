const myInches = 30;
const myFeet = myInches/12;
console.log(myFeet);

function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}

const dadaInches = 140;
const dadafeet = inchToFeet(dadaInches);
console.log(dadafeet.toFixed(2));