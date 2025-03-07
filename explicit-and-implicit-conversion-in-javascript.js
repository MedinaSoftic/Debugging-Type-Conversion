/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = 5 - 2; //This can run either way because the - operator is used for subtraction. so string or number will work. It will just look better without quotes
console.log("The result is: " + result);

let isValid = false; //This needs to have a diffrent value, we should use true or false. Not a string. (when the code runs, since its false it will not print)
if (isValid) {
    console.log("This is valid!");
}

let age = 25; // This was inncorrect because it was a string + a number. + is used for adding numbers and adding string concatenation.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);




// Part 2: Write Your Own Examples


//Null example
let highScore = null
console.log(highScore)



// Implicit type conversion
let playerOneScore = 100;
let playerTwoScore = "200";
let totalScore = playerOneScore + playerTwoScore;
console.log(totalScore) 

// Explicit type conversion
let priceOfEggs = "2.50";
let priceOfMilk = 3.50;
let totalCost = Number(priceOfEggs) + priceOfMilk; //Using the Number() function to convert the string to a number.
console.log(totalCost)