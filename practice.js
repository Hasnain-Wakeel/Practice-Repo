//  Assigning Values Of First Variable To Second

// var a = 40;
// var b = 45;
// b = a;
// console.log(a);
// console.log(b);

// var a = 12;
// var b = 17;
// a = b;
// console.log(a);
// console.log(b);

// "=" assigns the value from left side to right side
// That's Why we call "=" assignment operator

// ----------------------------------------------------------------------------------------

// Object is a collection of key-value pairs :

// Making An Object :

/*const student = {
  fullName: "Hasnain Raza",
  city: "Karachi",
  age: 18,
  marks: 923,
  isPassed: true,
};

console.log(student);
console.log(student.fullName);      // Dot Notation
console.log(student["fullName"]);*/ // Bracket Notation

// In Object , there are keys and values
// key : value

// Accessing Values From Object :

// Object.key        // Dot Notation
// Object["key"]     // Bracket Notation

// --------------------------------------------------------------------------------

// Finding/Accessing Types Of Variables (// typeof)

// Syntax :

// typeof variableName

// console.log(typeof student);
// console.log(typeof 12);
// console.log(typeof "Hasnain");

// let isFollow = true;
// console.log(typeof isFollow);

// let nullVariable = null;
// console.log(typeof nullVariable);

// let time = "4 pm";
// console.log(typeof time);

// ---------------------------------------------------------------------------------

// Exponentional Operator (**) // It acts like as a Power of a Number

// let num = 2 ** 3;  // 2 ** 3 === 2 * 2 * 2
// console.log(num);

// ----------------------------------------------------------------------------------

// Assignment Operators :

// "=" assigns the value from left side to right side
// That's Why we call "=" , the assignment operator.

// var a = 12;
// var b = 17;
// a = b;
// console.log(a);
// console.log(b);

// "a += b" Means : a = a + b

// let a = 5
// a += 2           // means a = a + 2
// console.log(a);

// let b = 4
// b -= 2          // means b = b - 2
// console.log(b);

// let c = 5
// c *= 2          // means c = c * 2
// console.log(c);

// let d = 4
// d /= 2          // means d = d / 2
// console.log(d);

// let e = 5
// e %= 2          // means e = e % 2
// console.log(e);

// let f = 5
// f **= 2          // means f = f ** 2
// console.log(f);

// -------------------------------------------------------------------------------------------

// Comparison Operators :

// // 1. Equal To (==)
/* let a = 6 
let b = 6

console.log("a == b is a " , a == b , "statement")
console.log(`a == b is a ${a != b} statement`)


// 2. Not Equal To (!=)
let a1 = 10 
let b1 = 4

console.log("a1 != b is a " , a1 != b1 , "statement")
console.log(`a1 != b is a ${a1 == b1} statement`) 

// The "==" operator in JavaScript checks only the value, not the type.
// Example: 5 == "5" → true (number 5 is equal to string "5")
// Similarly, "!=" also ignores type and checks only the value.
// Example: 5 != "5" → false (because values are the same, even though types are different)

// == converts the string value into number value and then checks the value

// 3. Strictly Equal To (===)

let a2 = 4
let b2 = 4

console.log("a2 === b2 is a " , a2 === b2 , "statement")
console.log(`a2 === b2 is a ${a2 !== b2} statement`)

// The "===" operator checks both value AND type (strict equality).
// Example: 5 === "5" → false (value is same but types are different: number vs string)
// Example: 5 === 5 → true (both value and type are same)


// 4. Strictly Not Equal To (!==)

let a3 = 12 
let b3 = 11

console.log("a3 !== b3 is a " , a3 !== b3 , "statement")
console.log(`a3 !== b3 is a ${a3 === b3} statement`) */

// The "!=" operator also checks both value AND type (strict equality).
// Example: 5 !== "5" → false (value is same but types are different: number vs string)
// Example: 5 !== 5 → false (both value and type are same)

// 5. Less Than (<)

// let a4 = 2
// let b4 = 5

// console.log("a4 < b4 is a " , a4 < b4 , "statement")
// console.log(`a4 > b4 is a ${a4 > b4} statement`)

// // 6. Greater Than (>)

// let a5 = 6
// let b5 = 3

// console.log("a5 > b5 is a " , a5 > b5 , "statement")
// console.log(`a5 < b5 is a ${a5 < b5} statement`)

// // 7. Less Than Or Equal To (<=)

// let a6 = 9
// let b6 = 2

// console.log("a6 <= b6 is a " , a6 <= b6 , "statement")
// console.log(`a6 >= b6 is a ${a6 >= b6} statement`)

// // 8. Greater Than Or Equal To (>=)

// let a7 = 3
// let b7 = 8

// console.log("a7 >= b7 is a " , a7 >= b7 , "statement")
// console.log(`a7 <= b7 is a ${a7 <= b7} statement`)

// ----------------------------------------------------------------------------------

// Logical  Operators :

// 1. Logical And (&&)
// 2. Logical Or (||)
// 3. Logical Not (!)

// 1. Logical And (&&)

// if all the conditions are true then it returns true ....
// if any of the condition is false then it returns false ....

// let a = 2
// let b = 3
// let c = 4

// console.log(a < b && b < c) // true (all conditions are true)
// console.log(a > b && b > c) // false (all conditions are false)
// console.log(a < b && b > c) // false (one/second condition is false)
// console.log(a > b && b < c) // false (one/first condition is false)

// 2. Logical OR (||)

// if all the conditions are false then it returns false ....
// if any of the condition is true then it returns true ....

// let a = 2
// let b = 3
// let c = 4

// console.log(a < b || b < c) // true (all conditions are true)
// console.log(a < b || b > c) // true (one/first condition is true)
// console.log(a > b || b < c) // true (one/second condition is true)
// console.log(a > b || b > c) // false (all conditions are false)

// 3. Logical NOT (!)

// it reverses the result ....
// if the condition is true then it returns false ....
// if the condition is false then it returns true ....

// let a = 2
// let b = 3
// let c = 4

// console.log(!(a < b)) // false (condition is true)
// console.log(!(a > b)) // true (condition is false)

// console.log(!(a < b && b < c)) // false (all conditions are true)
// console.log(!(a < b && b > c)) // true (one/second condition is false)
// console.log(!(a > b && b < c)) // true (one/first condition is false)
// console.log(!(a > b && b > c)) // true (all conditions are false)

// console.log(!(a < b || b < c)) // false (all conditions are true)
// console.log(!(a < b || b > c)) // false (one/first condition is false)
// console.log(!(a > b || b < c)) // false (one/second condition is false)
// console.log(!(a > b || b > c)) // true (all conditions are false)

// -------------------------------------------------------------------------

// ---------------  Ternary Operators :    ([condition] ? [true] : [false])  --------------------

// let age = prompt("Enter Your Age : ")

// age >= 18 ? console.log("You can Enter") : console.log("You CANNOT Enter")

// Practice Question : -------------------------

// let num = prompt("Enter a Number :");

// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5");
// } else {
//   console.log(num, "is not a multiple of 5");
// }

// Practice Question : -------------------------

// let time = 17;
// let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
// console.log(greeting);

// Practice Question : -------------------------

// let answer = prompt("Are you a student?", "yes").trim().toLowerCase();

// let yesAnswers = ["yes", "y", "yeah", "yup", "yea", "yep", "yeh",];
// let noAnswers = ["no", "n", "nope", "nah"];

// let message =
//   yesAnswers.includes(answer)
//   ? "You ARE a Student "
//   : noAnswers.includes(answer)
//   ? "You are NOT a Student "
//   : "I didn't understand your answer ";

// console.log(message);

// Practice Question : -------------------------

// let purchaseAmount = Number(prompt("Enter Your Purchase Amount ($): "));
// let discount = purchaseAmount >= 210 ? 12 : 0;          // 12% discount if purchaseAmount >= 210
// let total = purchaseAmount - (purchaseAmount * (discount / 100));
// let message = `Your total amount is : $${total}`;

// if (purchaseAmount == "" || purchaseAmount == null || isNaN(purchaseAmount) || purchaseAmount < 0 ){
//   console.log("Invalid Input")
// }
// else{
//   console.log(message);
// }

// -------------------------------------------------------------------------------

// Practice Question For Conditional Statement : ---------------------------

// let marks = prompt("Enter Your Marks : ");
// let grade;

// if (marks >= 90 && marks <= 100) {
//   grade = "A";
//   console.log(`Congratulations! You achieved ${grade} Grade.`);
// } else if (marks >= 80 && marks < 90) {
//   grade = "B";
//   console.log("Wow! Your Grade is : " + grade);
// } else if (marks >= 70 && marks < 80) {
//   grade = "C";
//   console.log("According To Your Marks Your Grade is : " + grade);
// } else if (marks >= 60 && marks < 70) {
//   grade = "D";
//   console.log("According To Your Marks Your Grade is : " + grade);
// } else if (marks < 60 && marks > 0) {
//   grade = "F";
//   console.log("According To Your Marks Your Grade is : " + grade);
// } else if ((marks = 0)) {
//   grade = "F";
//   console.log("According To Your Marks Your Grade is : " + grade);
// } else if (marks < 0 || marks > 100) {
//   console.log(" Enter Valid Marks");
// } else if (marks === null) {
//   console.log("Please Enter Marks");
// } else {
//   console.log("Please Enter Valid Marks");
// }

// ---------------------------- SWITCH CASE ----------------------------

// --------- We use switch case when we want to check multiple conditions for a single variable ---------

// const day = Number(prompt("Enter a number between 1 to 7 : ", 1));

// switch (day) {
//   case 1:
//     console.log("It is Monday!");
//     break;
//   case 2:
//     console.log("It is Tuesday!");
//     break;
//   case 3:
//     console.log("It is Wednesday!");
//     break;
//   case 4:
//     console.log("It is Thursday!");
//     break;
//   case 5:
//     console.log("It is Friday!");
//     break;
//   case 6:
//     console.log("It is Saturday!");
//     break;
//   case 7:
//     console.log("It is Sunday!");
//     break;
//   default:
//     console.log(`Please enter a valid Number between 1 to 7 !!!`);
// }

// -------------------------------------- LOOPS : --------------------------------------------

// 1. For Loop
// 2. While Loop
// 3. Do While Loop

// ---------------- 1. For Loop : ----------------

// let userName = prompt("Enter Your Name :");
// let loopNumber = Number(prompt("Type the number of times you'd like your name to be printed :"));
// // loopNumber = Number(loopNumber);

// for (i = 1; i <= loopNumber; i++) {
//   console.log(userName);
// }

// -------------  Prctice Question : ---------------

// let firstNumber = Number(prompt("Enter a number from which I start sum of Numbers :"))
// let lastNumber = Number(prompt("Enter a number where I can End the sum of Numbers : "))
// let sum = 0 ;
// for (i = firstNumber ; i <= lastNumber ; i++){
//   sum = sum + i
//   console.log(sum)
// }
// console.log("Final sum is" , sum)

// let firstNumber = Number(prompt("Enter a number from which I start sum of Numbers :"));
// let lastNumber = Number(prompt("Enter a number where I can End the sum of Numbers : "));
// let sum = 0;
// let expression = "";

// for (let i = firstNumber; i <= lastNumber; i++) {
//   sum = sum + i;

//   // expression banate rahenge
//   if (expression === "") {
//     expression = i;
//   } else {
//     expression = expression + " + " + i;
//   }
// }

// // // sirf akhri result print hoga
// console.log(expression + " = " + sum);

// GPT's Answer 1 :

// let startNumber = Number(prompt("Enter the starting number:"));
// let endNumber = Number(prompt("Enter the ending number:"));
// let totalSum = 0;
// let equation = ""; // yahan numbers aur + signs ka text store hoga

// for (let i = startNumber; i <= endNumber; i++) {
//   totalSum += i; // totalSum = totalSum + i

//   // equation ko update karna
//   if (i === startNumber) {
//     equation = i; // pehla number direct add karo
//   } else {
//     equation += " + " + i; // baad ke numbers ke aage + lagao
//   }
// }

// // final result print karo
// console.log(equation + " = " + totalSum);

// GPT's Answer 2 :

// 1. User se start aur end number input lena
// let startNumber = Number(prompt("Enter the starting number:"));
// let endNumber = Number(prompt("Enter the ending number:"));

// // 2. Sum aur equation ke liye variables initialize karna
// let totalSum = 0;
// let equation = "";

// // 3. Loop se numbers ko process karna
// for (let i = startNumber; i <= endNumber; i++) {

//   // 3a. Total sum update karna
//   totalSum = totalSum + i;

//   // 3b. Equation string update karna
//   // Agar ye first number hai
//   if (i === startNumber) {
//     equation = i;   // sirf number likho
//   }
//   // Agar ye first number nahi hai
//   else {
//     equation = equation + " + " + i;  // pehle se equation ke aage + number add karo
//   }

//   // 3c. Step by step print (optional, running sum)
//   // console.log("After adding " + i + ", sum so far: " + totalSum);
// }

// // 4. Final result print karna
// console.log("Final Equation: " + equation + " = " + totalSum);

// 2. While Loop :

// let i = 1;
// while (i <= 10) {
//   console.log("i =", i);
//   i++;
// }

// let j = 6;
// while (j <= 8) {
//   console.log("Hasnain Raza");
//   j++;
// }

// let p = 6;
// while (p <= 8) {
//   console.log("j ki value:", j);
//   p++;
// }

// 3. Do-While Loop :

// While aur Do-While Loop mein sab say bara farq ye hai kay While Loop mein condition starting mein check hoti hai aur Do-While Loop mein condition ending mein check hoti hai ....
// Iss ka matlab hai kay Do-While loop mein Code Block aik Dafa toh laazmi Execute ho ga ....

// Example :

// let i = 20;
// do {
//   console.log("Hasnain Raza");
//   i++;
// } while (i <= 10); // Condition checked at last after executing the code block "Hasnain Raza" , One Time .....

// // Example 2 :

// let j = 1;
// while (j >= 10) {
//   // Condition was checked here, as it was False , The code block didn't executed ....
//   console.log("Hasnain Raza");
//   j++;
// }

// ------------------------------------------------------

// let k = 10;
// do {
//   console.log("k ki value :", k);
//   k++;
// } while (k <= 11);

// For-Of Loop : (Used for Strings and Arrays)

// const names = ["Hasnain", "Ali", "Ahmed"];

// for (let members of names) {
//   console.log(members);
// }

// let string = "HasnainRaza";
// let length = 0;

// for (let i of string) {
//   console.log(i);
//   length++;
// }
// console.log("length of 'HasnainRaza' is =", length);
//                   "OR"
// console.log("length of 'HasnainRaza' is =", string.length);

// --------------------------------

// For-In Loop : (Used for Objects)

// ----------------------------  Testing A Topic Of Array : -------------------------------------

// let students = ["ahmed","ali","saad","asad","zain"]
// console.log(students[4/2])


// ----------------------

// console.log([] + []);
// console.log("10" > "9");

