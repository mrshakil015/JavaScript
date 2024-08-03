function mileToKm(miles){
    const km = miles * 1.60934;
    return km;
}

const miles = 2;
const kmResult = mileToKm(miles);
console.log(kmResult);