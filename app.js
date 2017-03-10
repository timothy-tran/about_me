'use strict';

var question1 = 'Do I play a musical instrument?';
var question2 = 'Can I run a marathon?';
var question3 = 'Do I like fastfood?';
var question4 = 'Do I like to travel?';
var question5 = 'Can I write computer code?';
var question;
var userAnswer;
var correct = 0;

function yesorno(userAnswer) {
  var myAnswer = userAnswer.toLowerCase();
  if (myAnswer === 'yes' || myAnswer === 'y') {
    return true;
  } else if (myAnswer === 'no' || myAnswer === 'n') {
    return false;
  } else {
    return 'sorry, you didn\'t enter the right answer';
  }
}

function myQuestion1() {
  var userInput = prompt(question1);
  var answer = yesorno(userInput);
  var b = isNaN(answer);
  if (!b) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('you are right. I play flute!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('Mmh...only you don\'t play music.');
    }
  } else {
    alert(answer);
  }
}

function myQuestion2() {
  var userInput = prompt(question2);
  var answer = yesorno(userInput);
  var b = isNaN(answer);
  if (!b) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('Are you crazy. Who would run a marathon!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('I think you\'re right this time.');
    }
  } else {
    alert(answer);
  }
}

function myQuestion3() {
  var userInput = prompt(question3);
  var answer = yesorno(userInput);
  var b = isNaN(answer);
  if (!b) {
    if (answer) {
      confirm('Your answer is' + ' ' + userInput);
      alert('You are right. Who wouln\'t like fastfood.');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + ' ' + userInput);
      alert('Mmh...I am not that health conscious.');
    }
  } else {
    alert(answer);
  }
}

function myQuestion4() {
  var userInput = prompt(question4);
  var answer = yesorno(userInput);
  var b = isNaN(answer);
  if (!b) {
    if (answer) {
      confirm('Your answer is' + '' + answer);
      alert('Mmh...I sit at computer desk all day. So you\'re wrong!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + '' + answer);
      alert('Sorry, you didn\'t enter right answer');
    }
  } else {
    alert(answer);
  }
}

function myQuestion5() {
  var userInput = prompt(question5);
  var answer = yesorno(userInput);
  var b = isNaN(answer);
  if (!b) {
    if (answer) {
      confirm('Your answer is' + '' + answer);
      alert('You are right. I am a computer geek!');
      correct++;
      console.log(answer);
    } else {
      confirm('your answer is' + '' + answer);
      alert('Mmh...think again.');
    }
  } else {
    alert(answer);
  }
}

myQuestion1();
myQuestion2();
myQuestion3();
myQuestion4();
myQuestion5();
