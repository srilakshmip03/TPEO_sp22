//problem 1: constructor for car object
function Car(model, year, color, mpg) {
    this.model = model
    this.year = year
    this.color = color
    this.mpg = mpg
}

var carOne = new Car("Prius", 2019, "white", 100)
var carTwo = new Car("Sienna", 2016, "black", 75)
var carThree = new Car ("Leaf", 2021, "blue", 40)

console.log(carOne.mpg)
console.log(carTwo.mpg)
console.log(carThree.mpg)

console.log("\n-----\n")

//problem 2: vehicle objects using car objects
function Vehicle(car) {
    this.car = car;
}

var vehicleOne = new Vehicle(carOne);
var vehicleTwo = new Vehicle(carTwo);
var vehicleThree = new Vehicle(carThree);

console.log(vehicleOne.car.mpg);
console.log(vehicleTwo.car.mpg);
console.log(vehicleThree.car.mpg);