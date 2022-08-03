// Practice problem 2
// You are given an array: var fruits = ['Apple', 'Banana' 'Orange']
// Find the index of 'banana' and replace 'Banana' with 'Mango'
// Remove 'Orange' and add 'Watermelon'

var fruits = ["Apple", "Banana", "Orange"];
var index = fruits.indexOf("Banana");
console.log(index);
fruits[1] = "Mango";
console.log(fruits);
fruits.pop()
console.log(fruits)
fruits.push("Watermelon")
console.log(fruits)




// You are given three numbers 13, 79 and 45. Write a program that will print the largest number using if-else.




// You are given a triangle with the sides 9,8,9, Write a program to check whether a traingle is isoceles or not using if-elses. [Isoceles => Two sides are equal]