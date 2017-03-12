var question1 = 'Do I play music instrucment?';
var question2 = 'Can I un a marathon?';
var question3 = 'Do I like fastfood?';
var question4 = 'Do I like to travel?';
var question5 = 'Can I write computer code?';
var question;
var correct = 0;
var notCorrect = 0;

function general(userAnswer) {
    myAnswer = userAnswer.toLowerCase();
    if (myAnswer === 'yes' || myAnswer === 'y') {
      return true;
    } else if (myAnswer === 'no' || myAnswer === 'n') {
      return false;
    } else {
      return 'Sorry, you didn\'t enter right answer';
    }
}

function myQuestion1() {
    userAnswer = prompt(question1);
    var answer = general(userAnswer);
    myInput = isNaN(answer);
    if (!myInput) {
      if (answer) {
        confirm("Your answer is" + " " + answer);
        alert('You are right. I play flute!');
        correct++;
        console.log(answer);
      } else if (answer) {
          confirm("Your answer is" + " " + answer);
          alert("Mmh...only you don\'t play music.");
          notCorrect++;
      } else {
          alert(answer);
      }
    }

    myQuestion1();
