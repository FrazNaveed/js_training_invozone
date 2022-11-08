// brackets specifies matches for characters inside the brackets
/**
 * [abc]: any of the character a, b or c
 * [A-Z]: any character from uppercase A to Z
 * [a-z]: any character from uppercase a to z
 * [A-z]: any character from uppercase A to z
 */

let reg = /[a-z]/g;
let s = "9 y name is fraz";
let res = reg.exec(s);
console.log(res); //[ 'y', index: 2, input: '9 y name is fraz' ]
