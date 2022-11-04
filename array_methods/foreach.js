const sample = [1, 2, 4, 5, 6];
let sum = 0;
const res = sample.forEach((x) => {
  console.log(x);
  sum += x;
});
console.log(res);
