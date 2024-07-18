// In JavaScript, strings are immutable, which means that once a string is created, it cannot be changed. 
// When you attempt to modify a string using bracket notation (e.g., b[c] = "i";), the operation doesn't 
// actually modify the original string. Instead, it simply fails silently without any effect.

let a = "This only works if and only if";
let b = a.slice(a.indexOf("only"));
let c = b.lastIndexOf("only");
console.log(a);
console.log(b);
console.log(c);
b[c] = "i";
console.log(a);
console.log(b);