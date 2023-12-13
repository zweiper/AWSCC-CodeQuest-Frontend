// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

let temperature = 20;
const time = new Date().getHours();
const day = new Date().getDay();

if(temperature > 30){
    console.log("Napaka init naman diyan idol!");
}else{
    console.log("Woah! Ang lamig naman! Sarap matulog")
}

if(time >= 0){
    console.log("Good morning!");
} else if(time >= 12 || time < 18){
    console.log("Good afternoon!");
} else{
    console.log("Good evening!");
}

switch(day){
    case 0:
        console.log("It's Sunday!");
        break;
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
}