
/*1. Expressions and statements*/

1;
/*1*/
!false;
/*true*/

/*2. Variables*/

var caught = 5 * 5;
/*undefined --> wrong*/
var ten = 10;
console.log(ten * ten);
/*100 ---> this is the right way*/
var mood = "light";
console.log(mood);
/*light*/
mood = "dark";
console.log(mood);
/*dark*/
var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
/*105*/
var one = 1, two = 2;
console.log(one + two);
/*3*/

/*3. Functions*/

alert("Good morning!");
/*this will pop-up alert*/
prompt("Tell me everything you know.", "...");
/*pop-up a text field*/

var x = 30;
console.log("the value of x is", x);
/*the value of x is 30*/

console.log(Math.max(2, 4));
/*4*/

console.log(Math.min(2, 4) + 100);
/*102*/

/* if else statement */
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);
else
  alert("Hey. Why didn't you give me a number?");

/* loop method 1*/
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

/* loop method 2*/
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

/* while method*/
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
/* 1024*/

do {
  var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
/*pop-up text field and print result*/

/* for method*/
for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);
/*21*/

/* switch method*/
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

