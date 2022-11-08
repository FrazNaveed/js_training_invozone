/*
 * ^ : starts with    /^fr/
 * $ : ends with      /az$/
 * . : any character can be here     /f.az/
 * * : 0 or more characters        /f*az/  'fsdfdsfaaz'
 * ? : optional /fr?az?/  r & z are optional
 * */

let reg = /f.az/g;
let s = "9 my name is fraz";
let res = reg.exec(s);
console.log(res);
