// same as javascript constructor function
// it is merely a syntactic sugar form.

class Person {
  constructor(name) {
    this.name = name;
  }
  age() {
    return 34;
  }
}
const per1 = new Person("fraz");
console.log(per1.name);

class Student extends Person {
  show() {
    return this.age() + this.name;
  }
}
