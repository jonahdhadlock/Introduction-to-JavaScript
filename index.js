/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 20;
if (votingAge > 18) {
    console.log("True")
}
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let myAge = 25;
let yourAge = 30;
if (myAge !== yourAge) {
    console.log(myAge = "Younger than you!")
};
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let year = "1999";
console.log(Number(year));
//Task d: Write a function to multiply a*b 
let num1 = 2;
let num2 = 5;

function myFunction(a, b) {
    return a * b;
};
console.log(myFunction(num1, num2));
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let myAge = 25;
let dogAge = 7;

function myFunction(a, b) {
    return a * b;
};
console.log("My age in dog years is " + myFunction(myAge, dogAge));
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(dogYears, dogWeight) {
    if (dogYears >= 1) {
        if (dogWeight > 15) {
            return dogWeight * .02;
        } else if (dogWeight >= 11) {
            return dogWeight * .03;
        } else if (dogWeight >= 6) {
            return dogWeight * .04;
        } else if (dogWeight > 0) {
            return dogWeight * .05;
        }
    } else if (dogYears < 1) {
        if (dogYears > ((1 / 12) * 7)) {
            return dogWeight * .04;
        } else if (dogYears > ((1 / 12) * 4)) {
            return dogWeight * .05;
        } else if (dogYears > ((1 / 12) * 2)) {
            return dogWeight * .1;
        }
    }
}
console.log(dogFeeder(1, 15));
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

//options: rock, paper, or scissors;
//rock beats scissors; scissors beats paper; paper beats rock; 
const userChoice = prompt("rock, paper, or scissors?");
let computerChoice = Math.random();
if (computerChoice <= .33) {
    computerChoice = "rock";
} else if (computerChoice <= .66) {
    computerChoice = "paper";

} else {
    (computerChoice = "scissors");
}
console.log("Computer: " + computerChoice);

function whoWins(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }
};
console.log(whoWins(userChoice, computerChoice));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let miles = 1.609 * (prompt("Kilometers"));
console.log(miles + " miles.");
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let inches = 2.54 * (prompt("Centimeters"));
console.log(inches + " inches.");
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
let number = 99;
let decrease = -1;

function annoyingSong(number, decrease) {
    if (number) {
        return number + " bottles of soda on the wall! 99 bottles of soda!";
    }
};

function annoyingSong(number, decrease) {
    if (number + decrease) {
        return "Take one down, pass it around! " + number + decrease + " bottles of soda on the wall!";
    }
}
console.log(annoyingSong(number, decrease) + " bottles of soda, take one down, pass it around,");
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
const yourGrade = prompt("What is your test score?");

function finalGrade(yourGrade) {
    if (yourGrade > 100) {
        return "unreal score!";
    } else if (yourGrade >= 90) {
        return "A!";
    } else if (yourGrade >= 80) {
        return "B!";
    } else if (yourGrade >= 70) {
        return "C!";
    } else if (yourGrade >= 60) {
        return "D!";
    } else if (yourGrade < 60) {
        return "F!";
    }
};

console.log("You earned a(n) " + finalGrade(yourGrade));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers scissors code below to take a prompt from a user using the window object
//Completed!