// metacharacters are characters with special meanings
/**
 * \w: find a word character, will work with match
 * \W: find a non-word character
 * \d: find a digit
 * \D: find a non-digit character
 * \s: find a white space character
 * \S: find a non-white space character
 */
let reg = /\w/g;
let s = "9 my name is fraz";
let res = s.match(reg);
console.log(res);
