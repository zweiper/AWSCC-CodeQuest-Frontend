// JavaScript Fundamentals - Day 16: Assignment

// 1. Create a function named `greet` that prints a greeting message to the console.

const greet = (name) => console.log(`Greetings, ${name}!`);
// 2. Call the `greet` function to display the greeting.
greet("Jessica");
// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.
// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
function addNumbers(x, y){
    let sum = x + y;
    return sum;
} 
// 5. Call the `addNumbers` function with different values and print the results.
addNumbers(5, 10);
// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
function calculateAverage(numArr){
    let sum = 0
    for(let i = 0; i<numArr.length; i++){
        sum += numArr[i];
    }

    let average = sum / numArr.length; 
    return average;
}
// 7. Use the `calculateAverage` function with an array of numbers and print the result.
const arey = [2,4,6,8,10];
const avg = calculateAverage(arey);

console.log(`Total Average = ${avg}`);
// These are the fundamental concepts of functions in JavaScript. Functions allow you to write modular and reusable code, making your programs more organized and easier to maintain.