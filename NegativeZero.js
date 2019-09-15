// 2. Negative Zero (-0)

const a = -0;

// Negative Zero equals itself
console.log(a === -0); // true

// 2.1
// Irrespective of the sign, Negative equals to 0
console.log(a === 0); // true

// 2.2
// It is neither greater than nor less than that of 0
console.log(a < 0); // false
console.log(a > 0); // false

// 2.3
// Ways to find -0
// Object.is can determine whether the given value is -0 or not
// Object.is results in false when -0 is checked with 0

console.log(Object.is(a, -0)); // true
console.log(Object.is(a, 0)); // false

// 2.4
// Math.sign helps to figure out the sign of the given number, results in 1 and -1 for positive and negative values respectively
console.log(Math.sign(-5)); // -1

// 2.4.1
// when it comes to 0 and -0, Math.sign works differently
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0

// 2.4.2
// helper function to get sign
const getSign = value => {
  return value !== 0 ? Math.sign(value) : Object.is(value, -0) ? -1 : 1;
};

console.log(getSign(0)); // 1
console.log(getSign(-0)); // -1
console.log(getSign(-5)); // -1

// 2.4.3
// Infinity
// (Number / 0) results in Infinity
// (Number / -0) results in -Infinity

console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity

// This is one of the best solution to find -0 ( to impress your friends 😜 )

const isNegativeZero = value => {
  return value === 0 && 1 / value === -Infinity;
};

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(-5)); // false

// 2.5
// As like 0, -0 also coerce to false in terms of Boolean operation
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
