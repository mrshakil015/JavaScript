function getAverage(mark1, mark2, mark3) {
    const total = mark1 + mark2 + mark3;
    const avrage = total / 3;
    return avrage;
}

const mark1 = 50;
const mark2 = 37;
const mark3 = 43;

var myAverage = getAverage(mark1, mark2, mark3);
console.log('My average: ',myAverage);