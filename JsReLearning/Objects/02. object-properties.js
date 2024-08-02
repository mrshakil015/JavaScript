var shoppingCart = {
    books: 3,
    sunglass: 10,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}

console.log(shoppingCart);

// when know the property name, use dot notation
var penCount = shoppingCart.pen;
var mouseCount = shoppingCart['mouse'];
console.log(penCount);
console.log(mouseCount);

// get all the keys name of an object
var properties = Object.keys(shoppingCart);
console.log('Keys: ',properties);

// get the the keys value of an object
var propertiesValue = Object.values(shoppingCart);
console.log('Values: ',propertiesValue);

// set properties value
console.log(shoppingCart)
shoppingCart.mouse = 32;
console.log(shoppingCart)
shoppingCart['mouse'] = 13;
console.log(shoppingCart)