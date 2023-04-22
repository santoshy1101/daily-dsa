class Car {
    constructor() {}
  }
  let car = new Car();
  console.log(Car.prototype.isPrototypeOf(Car));
  console.log(Car.prototype.isPrototypeOf(car));