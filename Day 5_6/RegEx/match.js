// it will return array of results or null

// beware of change of syntax

let reg = /fraz/g;
let s = "my name is fraz an fraz";
let res = s.match(reg);
console.log(res); //[ 'fraz', 'fraz' ]
