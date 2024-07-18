// console.log(str1 == str3);
// This checks for equality between str1 and str3 using the == operator, which does type coercion if necessary.
// str1 is "abc" and str3 is also "abc" (as it's a substring of str2 from index 0 to 3).
// Since both strings are equal, this will output true.

// console.log(str1 === str3);
// This checks for strict equality between str1 and str3 using the === operator, which does not do type coercion.
// Again, since both str1 and str3 are "abc", this will output true.

// console.log(str1 == str4);
// This checks for equality between str1 and str4 using the == operator.
// str1 is a string primitive, while str4 is a String object created using the new String() constructor.
// When comparing a string primitive with a String object using ==, JavaScript will convert the String object to a string primitive before comparing. Therefore, the comparison is between "abc" and "abc".
// Since both are equal, this will output true.

// console.log(str1 === str4);
// This checks for strict equality between str1 and str4 using the === operator.
// In this case, the comparison is between a string primitive (str1) and a String object (str4).
// Even though the string values are the same, they are different types (one is a primitive, and the other is an object), so this will output false.

let str1 = "abc";
let str2 = "abcdef";
let str3 = str2.substring(0, 3);
let str4 = new String("abc");
console.log(str1, str2, str3);
console.log(str1 == str3);
console.log(str1 === str3);
console.log(str1 == str4);
console.log(str1 === str4);