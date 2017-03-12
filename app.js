'use strict';

var question1 = 'Do I play a musical instrument?';
var question2 = 'Can I run a marathon?';
var question3 = 'Do I like fastfood?';
var question4 = 'Do I like to travel?';
var question5 = 'Can I write computer code?';
var question;

var userAnswer = prompt(question1);
var myAnswer = userAnswer.toLowerCase();
if (myAnswer === 'yes' || myAnswer === 'y') {
  confirm("Your answer is" + " " + myAnswer);
  alert("You are right. I play flute!");
  console.log(myAnswer);
} else if (myAnswer === 'no' || myAnswer === 'n') {
  confirm("Your answer is" + " " + myAnswer);
  alert("Mmh...only you don\'t play music.");
  console.log(userAnswer);
} else {
  alert("Sorry, you didn\'t enter right answer");
}

userAnswer = prompt(question2);
var myAnswer = userAnswer.toLowerCase();
if (myAnswer === 'yes' || myAnswer === 'y') {
  confirm("Your answer is" + " " + myAnswer);
  alert("Are you crazy. Who would run a marathon!");
  console.log(myAnswer);
} else if (myAnswer === 'no' || myAnswer === 'n') {
  confirm("Your answer is" + " " + myAnswer);
  alert("I think you\'re right this time.");
  console.log(userAnswer);
} else {
  alert("Sorry, you didn\'t enter right answer");
}

userAnswer = prompt(question3);
var myAnswer = userAnswer.toLowerCase();
if (myAnswer === 'yes' || myAnswer === 'y') {
  confirm("Your answer is" + " " + myAnswer);
  alert("You are right. Who wouln\'t like fastfood.");
  console.log(myAnswer);
} else if (myAnswer === 'no' || myAnswer === 'n') {
  confirm("Your answer is" + " " + myAnswer);
  alert("Mmh...I am not that health conscious.");
  console.log(userAnswer);
} else {
  alert("Sorry, you didn\'t enter right answer");
}

userAnswer = prompt(question4);
var myAnswer = userAnswer.toLowerCase();
if (myAnswer === 'yes' || myAnswer === 'y') {
  confirm("Your answer is" + " " + myAnswer);
  alert("Mmh...I sit at computer desk all day. So you\'re wrong!");
  console.log(myAnswer);
} else if (myAnswer === 'no' || myAnswer === 'n') {
  confirm("Your answer is" + " " + myAnswer);
  alert("Yes...you\'re right.");
  console.log(userAnswer);
} else {
  alert("Sorry, you didn\'t enter right answer");
}

userAnswer = prompt(question5);
var myAnswer = userAnswer.toLowerCase();
if (myAnswer === 'yes' || myAnswer === 'y') {
  confirm("Your answer is" + " " + myAnswer);
  alert("You are right. I am a computer geek!");
  console.log(myAnswer);
} else if (myAnswer === 'no' || myAnswer === 'n') {
  confirm("Your answer is" + " " + myAnswer);
  alert("Mmh...think again.");
  console.log(userAnswer);
} else {
  alert("Sorry, you didn\'t enter right answer");
}

var numTarget = 50;
var userInputNum;
var myNum;
alert("Now let\'s play a number game. You have four tries.");
for (var i = 0; i < 4; i++) {
  do {
    userInputNum = prompt("Please guess a number:");
  } while (isNaN(userInputNum));
    myNum = parseInt(userInputNum);
    console.log("Test user input:" + myNum);
  if (myNum < numTarget) {
    alert("Your guessing number is too low. Try again!");
    console.log("Your guess number:" + " " + myNum + " " + " is too low.");
  } else if (myNum > numTarget) {
    alert("Your guessing number is too high. Try again!");
    console.log("Your guess number:" + " " + myNum + " " + " is too high.");
  } else {
    alert("You\'re right on target.");
    i = 4;
    console.log(myNum);
  }
}

var stateVisited = ['CALIFORNIA', 'OREGON', 'ARIZON'];
var stateShortForm = ['CA', 'OR', 'AZ'];
for (var i = 1; i <= 6; i++) {
  var userInput = prompt('Can you guess what state I have visited besides Washington?');
  var myInput = userInput.toUpperCase();
  console.log(myInput);
  if (stateVisited.includes(myInput) ||     stateShortForm.includes(myInput)) {
    alert('You are correct. I have been to ' + myInput);
    break;
  } else if (i >= 6) {
    alert('Sorry, you didn\'t guess right, but your try is run out!');
  } else {
    alert('Sorry, you didn\'t enter the right answer! Please try again. Try number: ' + i);
  }
}
