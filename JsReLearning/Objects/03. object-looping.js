var shoppingCart = {
    books: 3,
    sunglass: 10,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// get objects individul properties using loop
for(var i =0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// using for in loop
console.log("-------Using for in loop-------")
for(var propertyName in shoppingCart){
    var propertyValue = shoppingCart[propertyName]
    console.log(propertyName, propertyValue)
}