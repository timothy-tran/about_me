'use strict';

var question1 = 'Do I play music instrucment?';
var question2 = 'Can I un a marathon?';
var question3 = 'Do I like fastfood?';
var question4 = 'Do I like to travel?';
var question5 = 'Can I write computer code?';
var question;
var userAnswer;
var count = 1;

userAnswer = prompt(question1);
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
  alert("Are you crazy. Who would run a marathon!")
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
  alert("You are right. Who wouln\'t like fastfood.")
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
  alert("Mmh...I sit at computer desk all day. So you\'re wrong!")
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
