//import {greeting, add} from "../dist/index.mjs";
import {greeting, add} from "@huayutech/single-lib-test"

greeting();

let a = 1;
let b = 2;
let result = add(a, b); 
console.log(`${a}+${b} = ${result}`);