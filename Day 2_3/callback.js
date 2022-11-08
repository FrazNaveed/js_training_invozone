const greet = (name, callback) => {
  console.log("Hello World");

  callback(name);
};
const sayName = (name) => {
  console.log("Hello", name);
};

setTimeout(greet, 2000, "John", sayName);
