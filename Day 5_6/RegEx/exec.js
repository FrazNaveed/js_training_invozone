// this function will return an array for match or null for no match

// exec()
let reg = /fraz/g;
let s = "my name is fraz & Fraz";
let result = reg.exec(s);
console.log(result); //[ 'fraz', index: 11, input: 'my name is fraz' ]
result = reg.exec(s);
console.log(result); //[ 'fraz', index: 18, input: 'my name is fraz & fraz' ]
result = reg.exec(s);
console.log(result); // null
