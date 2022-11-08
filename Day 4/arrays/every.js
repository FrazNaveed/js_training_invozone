//The every() method executes a function for each array element.
//The every() method returns true if the function returns true for all elements.
//The every() method returns false if the function returns false for one element.
//The every() method returns false if the function returns false for one element.

//arr.every(callback(element[, index[, array]])[, thisArg])

function isEven(element, index, array) {
  return element % 2 == 0;
}
function func() {
  var arr = [56, 92, 18, 88, 12];

  // Check for even number
  var value = arr.every(isEven);
  console.log(value);
}
func();
