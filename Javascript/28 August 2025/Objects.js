// Chellenge:
// Create a car object with brand Toyota model Corolla year 2022 and add a method that shows full details of the car.


let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,

   showDetails: function() {
    console.log("Car: " + this.brand + " " + this.model + " (" + this.year + ")");
  }
};

car.brand = "ALTO"

console.log(car.brand);
console.log(car["year"]);

car.showDetails();

Object.freeze(car)
car.brand = "Honda";
car.year = 2025;    