//The some() method checks if any array elements pass a test (provided as a callback function).

const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
