// ? Variables in JavaScript

var name = "Sarthak Kamble";

// console.log(name);

// More modern way to declare variables in JavaScript is "let"

let age = 10;

// console.log("Before mutating: ", age);

age = 15;

// console.log("After mutating: ", age);

// const - constant value (cannot reassign)

const pi = 3.14;

// console.log("Variable declared using 'const' : ", pi);

// pi = 2.14;  throws a typeerror: Assignment to constant variable

/**
    Important Notes:
    
    ✅ Use let and const in modern JS — var is outdated.
    
    ✅ Prefer const if you don't need to reassign.
    
    ✅ Block scope = limited to { }.

*/

// ? Data Types in JavaScript

let alias = "Void"; // String

let contactNumber = 9619222098; // Number

let isAdult = true; // Boolean

let city; // Undefined

let salary = null; // Null

// console.log("String: ", alias);
// console.log("Number:", contactNumber);
// console.log("Boolean:", isAdult);
// console.log("Undefined: ", city);
// console.log("Null:", salary);

// ? Operators in JavaScript

// * Arithmetic Operators

let a = 10;

let b = 5;

console.log("Additon (+):", a + b); // Returns 'Sum'
console.log("Subtraction (-):", a - b); // Returns 'Difference'
console.log("Multiplication (*): ", a * b); // Returns 'Product'
console.log("Division (/):", a / b); // Returns 'Quotient'
console.log("Modulus (%):", a % b); // Returns 'Remainder'
console.log("Exponent: (**):", 4 ** 2);

// * Comparison Operators

// ? Note: The below code returns true even though value on the left is of type 'Number' and value on the right is of type 'String'  because '==' doesn't compare values strictly.
console.log("Equal (Loose): ", 10 == "10");

// ? Note: This will return false because '===' operator strictly checks both the values including its types.
console.log("Equal (Strict): ", 10 === "10");
// console.log(10 === 10); // Returns true

console.log("Not Equal (Loose): ", 10 != "10");

console.log("Not Equal (Strict): ", 10 !== "10");

console.log("Greater than '>': ", 10 > 5); // Returns 'true' as 10 is greater than 5.

console.log("Less than '<': ", 10 < 5); // Returns 'false' as 10 is not less than 5.

console.log("Greater than equal to '>=': ", 10 >= 10); // Returns 'true'.

console.log("Less than equal to '<=': ", 10 <= 1); // Returns 'false'.

// * Logical Operators

console.log("Logical AND (&&)", true && false); // Returns 'false' as both conditions needs to be true.

console.log("Logical OR (||): ", true || false); // Return 'true' as either one of the condition needs to be true.

console.log("Logical NOT (!): ", !false); // Returns 'true'

// * Assignment Operators

// Basic Assignment operator '='
let x = 10;
console.log(`"=" assignment operator: `, x);

// Compount Assignment operators

console.log((x += 5));
console.log((x -= 5));
console.log((x *= 5));

let y = 10;
console.log((y /= 5));
