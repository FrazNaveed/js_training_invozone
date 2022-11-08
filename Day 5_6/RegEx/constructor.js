// returns function that created RegExp prototype
let reg = /Hello World/g;
let res = reg.constructor;
console.log(res); // [Function: RegExp]

let r = new RegExp("zyx", "g"); // alternatively it can be written like this
