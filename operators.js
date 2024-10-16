// Arithmetic Operators
let a = 10;
//Java script 
let b = 5;


console.log("Arithmetic Operators:");
console.log("Addition: a + b =", a + b);         // Adds a and b
console.log("Subtraction: a - b =", a - b);      // Subtracts b from a
console.log("Multiplication: a * b =", a * b);   // Multiplies a and b
console.log("Division: a / b =", a / b);         // Divides a by b
console.log("Modulus: a % b =", a % b);          // Remainder of a divided by b
console.log("Exponentiation: a ** b =", a ** b); // a raised to the power of b

// Assignment Operators
let x = 10;
x += 5; // Same as x = x + 5
console.log("\nAssignment Operators:");
console.log("x += 5 results in x =", x);

x -= 3; // Same as x = x - 3
console.log("x -= 3 results in x =", x);

// Comparison Operators
let isEqual = (a == b);
let isIdentical = (a === b);


let isNotEqual = (a != b);
let isGreater = (a > b);
let isLessOrEqual = (a <= b);


console.log("\nComparison Operators:");
console.log("Is a equal to b (a == b)?", isEqual);          // Checks if a is equal to b (non-strict)
console.log("Is a identical to b (a === b)?", isIdentical); // Checks if a is strictly equal to b (including type)
console.log("Is a not equal to b (a != b)?", isNotEqual);   // Checks if a is not equal to b
console.log("Is a greater than b (a > b)?", isGreater);     // Checks if a is greater than b
console.log("Is a less than or equal to b (a <= b)?", isLessOrEqual); // Checks if a is less than or equal to b

// Logical Operators
let andOperator = (a > 5 && b < 10);
let orOperator = (a > 5 || b > 10);
let notOperator = !(a > 5);

console.log("\nLogical Operators:");
console.log("AND (a > 5 && b < 10):", andOperator); // Checks if both conditions are true
console.log("OR (a > 5 || b > 10):", orOperator);   // Checks if at least one condition is true
console.log("NOT !(a > 5):", notOperator);          // Reverses the result of the condition

// Bitwise Operators
let andBitwise = a & b;  // Bitwise AND
let orBitwise = a | b;   // Bitwise OR
let xorBitwise = a ^ b;  // Bitwise XOR
let notBitwise = ~a;     // Bitwise NOT
let leftShift = a << 2;  // Left shift by 2 bits
let rightShift = a >> 2; // Right shift by 2 bits

console.log("\nBitwise Operators:");
console.log("Bitwise AND (a & b):", andBitwise);
console.log("Bitwise OR (a | b):", orBitwise);
console.log("Bitwise XOR (a ^ b):", xorBitwise);
console.log("Bitwise NOT (~a):", notBitwise);
console.log("Left Shift (a << 2):", leftShift);
console.log("Right Shift (a >> 2):", rightShift);
