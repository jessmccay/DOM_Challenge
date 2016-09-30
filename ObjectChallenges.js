// Car Object Challenge

//purpose: a function that creates car objects which have a make, model year, and color.
//Signature: ("String", "String", "String") --> "String"
//Example: function carInfo(make, year, color) --> "Honda", "2016", "red"

//Story 1:
function carInfo(make, year, color){
  z
  return {
  brand: make,
  model: year,
  paint: color,
  getData: function(){
    return "The car's brand is " + this.brand + ", the year is " + this.model + ", and the color is " + this.paint
    }
  };
};

var car = carInfo("Honda", 2016, "Red");

car.brand;

//Story 2
// The car can accelerate, brake, and tell you its speed.
//
// Challenges:
//
// Add a speed variable to the closure of the car object. Add the following functions to the object:
// getSpeed: returns current speed
// accelerate: increases the speed by 10mph (but does not return anything)
// brake: decreases the speed by 7mph (but does not return anything)

function carInfo(make, year, color){
  var speed = 0;
  return {
  brand: make,
  model: year,
  paint: color,
  getData: function(){
    return "The car's brand is " + this.brand + ", the year is " + this.model + ", and the color is " + this.paint
  },
  carSpeed: function() {
    return speed;},
  carAccelerate: function() {
    return speed = speed + 10;},
  carBrake: function() {
    return speed = speed - 7;}
  }
};
var car = carInfo("Honda", 2016, "Red");


// Story 3, Speed up to 50

function carInfo(make, year, color){
    var speed = 0;
    return {
    brand: make,
    model: year,
    paint: color,
    getData: function(){
      return "The car's brand is " + this.brand + ", the year is " + this.model + ", and the color is " + this.paint
    },
    carSpeed: function() { return speed; },
    carAccelerate: function() { return speed = speed + 10; },
    carBrake: function() { return speed = speed - 7; },
    newSpeed: function()  {
      while (speed < 50) {
        speed = speed + 10;
        console.log(speed);
        }
      },
    slow: function() {
      while (speed > 0) {
        speed = speed - 10;
        console.log(speed);
      }
    }
  }
}
var car = carInfo("Honda", 2016, "Red");
// Story 3, Speed up to 70

function carInfo(make, year, color){
    var speed = 0;
    return {
    brand: make,
    model: year,
    paint: color,
    getData: function(){
      return "The car's brand is " + this.brand + ", the year is " + this.model + ", and the color is " + this.paint
    },
    carSpeed: function() { return speed; },
    carAccelerate: function() { return speed = speed + 10; },
    // carBrake: function() { return speed = speed - 7; },
    newSpeed: function()  {
      while (speed < 70) {
        speed = speed + 10;
        console.log(speed);
        }
      },
    break: function() {
      while (speed > 0) {
        speed = speed - 10;
        console.log(speed);
      }
    }
  }
}
var car = carInfo("Honda", 2016, "Blue");
// End of Story 3

// Story 4
// Challenge:
//
// Limit the car's maximum speed to 85mph. Try taking it above 80mph and see what happens.
// Hint: What should happen when you call accelerate at 80mph?
function carInfo(make, year, color){
    var speed = 0;
    return {
    brand: make,
    model: year,
    paint: color,
    getData: function(){
      return "The car's brand is " + this.brand + ", the year is " + this.model + ", and the color is " + this.paint;
    },
    carSpeed: function() { return speed; },
    //carSpeed: function () {if (speed <= 85) {return speed} else {speed = 85; return "Slowdown"} }
    carAccelerate: function() { return speed = speed + 5; },
    carBrake: function() { return speed = speed - 7; },
    maxSpeed: function()  {
      while (speed < 85) {
        this.carAccelerate();
        console.log(speed);
        }
      },
    // break: function() {
    //   while (speed > 0) {
    //     speed = speed - 10;
    //     console.log(speed);
    //   }
    // }
  };
}
var car = carInfo("Honda", 2016, "Yellow");
// End of Story 4

//Beginning of Story 5

// Challenge:
//
// Sometimes roads are slippery and downhill, and sometimes brakes fail: make the brake change the speed by a random amount with a maximum of minus 1/2 of the current speed. (Hint: Math.random()). How many iterations does it take to stop the car?

function carInfo(make, year, color){
    var speed = 100;
    return {
    brand: make,
    model: year,
    paint: color,
    // getData: function(){
    //   return "The car's brand is " + this.brand + ", the year is " + this.model + ", and the color is " + this.paint;
    // },
    carSpeed: function() { return speed; },
    // carAccelerate: function() { return speed = speed + 5; },
    carBrake: function() { speed = speed - ( Math.floor((Math.random() * (speed / 2)) + 0)) }
    // carBrake2: function() { speed = speed - 10;} (THIS LOOP WAS BREAKING OUR carBrake function)
    // maxSpeed: function()  {
    //   while (speed >= 0) {
    //     this.carBrake();
    //     console.log(speed);
    //     }
  };
}
var car = carInfo("Honda", 2016, "Green");
