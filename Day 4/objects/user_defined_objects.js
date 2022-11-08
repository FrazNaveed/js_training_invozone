// constructor function
function Employee(name, id) {
  this.name = name;
  this.id = id;
}
Employee.prototype.getName = function () {
  return this.name;
};
Employee.prototype.setID = function (ID) {
  this.id = ID;
};
var e1 = new Employee("fraz", 1234);

e1.getName();
e2.setID(809);
