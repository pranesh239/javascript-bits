// 1. NaN

const a = Number('n/a');

const b = 'a' - 'b';
console.log(a, b); // NaN NaN

// 2. The **ONLY** datatype which is not equal to itself

console.log(a === a); // false
console.log(a == a); // false

console.log(undefined === undefined); // true
console.log(null === null); // true
console.log(NaN === NaN); // false

// 3. Ways to find NaN (ES6)

// 3.1 - Older way to find NaN

console.log(isNaN(b)); // true

// !!!!!! BUG !!!!!!
console.log(isNaN('Hello Earth!')); // true

// 3.2 - ES6 way of checking NaN

console.log(Number.isNaN(a)); // true

// 3.3 - Check two NaN

console.log(Object.is(b, a)); // true

// 3.4 - NaN fix in ES6
// ****** FIXED ******

console.log(Object.is('Hello Mercury!', NaN)); // false

console.log(Number.isNaN('Hello Sun!')); // false
