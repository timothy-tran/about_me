'use strict'

var question1 = 'String1';
var question2 = 'string2';
var question3 = 'string3';
var question4 = 'string4';
var question5 = 'string5';
var question;
var userAnswer;
var count = 1;

for (var i = 1, i =<5, i++) {
  if (i === 1) {
    question = question1;
  } else if (i === 2) {
    question = question2;
  } else if (i === 3) {
    question = question3;
  } else if (i === 4) {
    question = question4;
  } else {
    question = question5;
  }
  userAnswer = prompt(question);
  myAnswer = userAnswer.toLowCase();
  if (myAnswer === 'yes') || (myAnswer === 'y') {
    var bool = confirm('Your answer is' + ' ' + myAnswer);
    if (bool) {
      alert('Bravo! You\'re correct!')
      count = count++;
    } else {
      alert('I\'m sorry. I\'s not right')
    }
  }
}
