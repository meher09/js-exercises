// practice problem 1
// Harry's mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how moch money the shopkeepers will return.
// Input: The first line of the input is the taka Harry's mom gave him. The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output:Print the result 300; Sample input 1000, 700

let givenAmount = 1000;
let orangePrice = 450;
let applePrice = 250;
let totalAmount = orangePrice + applePrice;
let remainAmount = givenAmount - totalAmount
console.log (remainAmount) 

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.
// Input: The First line of the input is the marks of the five subjects mentioned above ,respectively
// Output: Print the result in 2 decimal places. Sample Input 75.25, 65, 80, 35.45, 99.50; Output 71.04 


let mathematics = 75.25;
let Biology = 65;
let Chemistry = 80;
let Physics = 35.45
let Bangla = 99.50;
var numberOfSubjects = 5
var totalMarks = mathematics+Biology+Chemistry+Physics+Bangla
var averageMarks = totalMarks/numberOfSubjects
console.log (averageMarks)
let fixed = averageMarks.toFixed(2);
console.log(fixed)

// John's teacher gave him two variables. Each variable contains a string. Johns teacher asked him to combine these two strings and print then in one line. Help John write the program.
// Input: The first and second lines of the input contain the striungs. 
// Output:Print the result in one line I am going to be an awesome web developer.

let firstPart = "I am going to be";
let secondPart = " an awesome web developer";
var mainLine = firstPart + secondPart
console.log (mainLine)

// Sarah's mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.
// Input: The first line of the input contains the number.
// Output: Print the remainder

let number = 119
console.log(number % 5)
