const car = {
    name: "BMW",
    model: 500,
    weight: "800kg",
    color: "white",
    start: function(){
        console.log("Car has started");
    },
    drive: function(){
        console.log("Car is driving");
    },
}
console.log(car.color);
console.log(car['model']);
car.start();
