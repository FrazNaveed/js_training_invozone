const person = {
  firstName: "fraz",
  lastName: "naveed",
  id: 123,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
}; // this refers to the whole object here.
