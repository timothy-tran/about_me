'use strict';

var userAnswer;
var correct = 0;

function yesOrNo(userAnswer) {
  var myAnswer = userAnswer.toLowerCase();
  if (myAnswer === 'yes' || myAnswer === 'y') {
    return true;
  } else if (myAnswer === 'no' || myAnswer === 'n') {
    return false;
  } else {
    return 'Sorry, you didn\'t enter the right answer!';
  }
}

function myQuestion1() {
  var userInput = prompt('Do I play a musical instrument?');
  var answer = yesOrNo(userInput);
  var checkIfString = isNaN(userInput);
  if (!checkIfString) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('you are right. I play flute!');
      correct++;
      console.log(answer);
    } else {
      confirm('Your answer is' + ' ' + userInput);
      alert('Mmh...only you don\'t play music.');
    }
  }
}

function myQuestion2() {
  var userInput = prompt('Can I run a marathon?');
  var answer = yesOrNo(userInput);
  var checkIfString = isNaN(answer);
  if (!checkIfString) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('Are you crazy. Who would run a marathon!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('I think you\'re right this time.');
    }
  }
}

function myQuestion3() {
  var userInput = prompt('Do I like fastfood?');
  var answer = yesOrNo(userInput);
  var checkIfString = isNaN(answer);
  if (!checkIfString) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('You are right. Who wouln\'t like fastfood.');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('Mmh...I am not that health conscious.');
    }
  }
}

function myQuestion4() {
  var userInput = prompt('Do I like to travel?');
  var answer = yesOrNo(userInput);
  var checkIfString = isNaN(answer);
  if (!checkIfString) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('Mmh...I sit at computer desk all day. So you\'re wrong!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('Sorry, you didn\'t enter right answer');
    }
  }
}

function myQuestion5() {
  var userInput = prompt('Can I write computer code?');
  var answer = yesOrNo(userInput);
  var checkIfString = isNaN(answer);
  if (!checkIfString) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('You are right. I am a computer geek!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('Mmh...think again.');
    }
  }
}

function guessingGame() {
  var numTarget = 50;
  var userInputNum;
  var myNum;
  alert('Now let\'s play a number game. You have four tries.');
  for (var i = 1; i <= 4; i++) {
    do {
      userInputNum = prompt('Please guess a number:');
    } while (isNaN(userInputNum));
    myNum = parseInt(userInputNum);
    console.log("Test user input:" + myNum);
    if (myNum < numTarget) {
      alert('Your guessing number is too low. Try number:' + ' ' + i);
      console.log('Your guess number:' + ' ' + myNum + ' ' + ' is too low.');
    } else if (myNum > numTarget) {
      alert('Your guessing number is too high. Try number:' + ' ' + i);
      console.log('Your guess number:' + ' ' + myNum + ' ' + ' is too high.');
    } else {
      alert('You\'re right on target.');
      i = 4;
      correct++;
      console.log(myNum);
    }
  }
}

function whereIBeen() {
  var stateVisited = ['CALIFORNIA', 'OREGON', 'ARIZON'];
  var stateShortForm = ['CA', 'OR', 'AZ'];
  for (var i = 1; i <= 6; i++) {
    var userInput = prompt('Can you guess what state I have visited besides Washington?');
    var myInput = userInput.toUpperCase();
    console.log(myInput);
    if (stateVisited.includes(myInput) ||     stateShortForm.includes(myInput)) {
      alert('You are correct. I have been to ' + myInput);
      correct++;
      break;
    } else if (i >= 6) {
      alert('Sorry, you didn\'t guess right, but your try is run out!');
    } else {
      alert('Sorry, you didn\'t enter the right answer! Please try again. Try number: ' + i);
    }
  }
}

function greeting() {
  var name = prompt('Hello, welcome to my world! What is your name?');
  alert('Hello' + ' ' + name + ' Let\'s play game ABOUT ME. In this game, you answer questions about me.');
  myQuestion1();
  myQuestion2();
  myQuestion3();
  myQuestion4();
  myQuestion5();
  alert('Now let\'s play a guessing number game:');
  guessingGame();
  alert('And now let\'s play \"Where I Have Been\" game:');
  whereIBeen();
  alert('Good job! ' + name + ' you have ' + correct + ' correct answers.');
}

greeting();
