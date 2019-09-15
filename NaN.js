// 1. NaN

const a = Number('n/a');

const b = 'a' - 'b';
console.log(a, b); // NaN NaN

// 1.1 The **ONLY** datatype which is not equal to itself

console.log(a === a); // false
console.log(a == a); // false

console.log(undefined === undefined); // true
console.log(null === null); // true
console.log(NaN === NaN); // false

// 1.2 Ways to find NaN (ES6)

// 1.2.1 - Older ways of finding NaN

console.log(isNaN(b)); // true

/* global isNaN checks whether the value is a valid Number or not. 
    
    The way it works is: 
        1. First it coerce to Number
        2. Then it checks, whether the passed value results in NaN

    In below example, "Hello Earth" String is coerced to Number which results in NaN. 
    Hence it is true.

    TL;DR:  global isNaN checks for NaN after the input being coerced to number!
*/
console.log(isNaN('Hello Earth!')); // true

// 1.2.2 - ES6 way of checking NaN

console.log(Number.isNaN(a)); // true

// 1.2.3 - Check two NaN

console.log(Object.is(b, a)); // true

// 1.2.4 - NaN check in ES6 way

console.log(Object.is('Hello Mercury!', NaN)); // false

console.log(Number.isNaN('Hello Sun!')); // false
