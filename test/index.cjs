//var { greeting, add } = require("../dist/index.cjs.js");
var { greeting, add} = require("@huayutech/single-lib-test")
greeting();
let a = 1; 
let b = 2;
let result = add(a, b);
console.log(`${a}+${b}=${result}`);