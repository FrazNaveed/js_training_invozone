// static methods are called directly - without creating an object/instance

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello";
  }
}
console.log(Car.hello());
