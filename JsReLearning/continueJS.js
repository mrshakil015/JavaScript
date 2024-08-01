numbers = [32,45,66,44,77,31,69];
console.log(numbers)
for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if (number > 50){
        continue;
    }
    console.log(number);
}