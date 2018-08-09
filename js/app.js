'use strict';

var totalCorrect = 0;

//get the user's name 

function firstQuestion () { // First question - encompasses userName creation as well

var userName = prompt('Hi there! What is your name?');

alert(' Thanks for being here ' + userName + '. I\'m going to ask you some questions about me . These are yes or no questions so please feel free to answer with yes/no ');

//ask them five yes/no questions

var answerOne = prompt('Do I speak more than three languages?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes') {
  alert('I sure do! Or as they say in swahili sawah sawah!');
  totalCorrect++;
} else {
  alert('I actaully speak four languages!');
  console.log(' The user was asked if I spoke more than three languages and they answered ' + answerOne);
}

} // firstQuestion closes here

firstQuestion(); // Calling function in order to initiate quiz

function secondQuestion () { 

var answerTwo = prompt('Am I a twin?').toLowerCase();

if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('Good job! I sure do share a birthday');
  totalCorrect++;
} else {
  alert('wrong! I have a twin sister!');
  console.log(' The user was asked if I was a twin and responded ' + answerTwo);
}

} // secondQuestion closes here

secondQuestion(); // Call secondQuestion to keep quiz going

function thirdQuestion () { // Creates thirdQuestion

var answerThree = prompt('Was I born in the USA?').toLowerCase();

if (answerThree === 'n' || answerThree === 'no') {
  alert('You must have caugt my accent because you got it right!');
  totalCorrect++;
} else {
  alert('the USA is my home but my place of birth is Somalia');
  console.log(' The user was asked if I was born in the USA and responded ' + answerThree);
}

} // closes thirdQuestion

thirdQuestion (); // call thirdQuestion to keep quiz going

function fourthQuestion () { // creates fourthQuestion

var answerFour = prompt('Have I ever committed a crime?').toLowerCase();

if (answerFour === 'n' || answerFour === 'no') {
  alert('Good Job!');
  totalCorrect++;
} else {
  alert('really? As if I would be caught!');
  console.log(' The user was asked if I ever committed a crime and responded ' + answerFour);
}

} // closes fourthQuestion

fourthQuestion(); // calls fourthQuestion to keep quiz going

function fifthQuestion () { // creates fifthQuestion

var answerFive = prompt('Is my favorite book called ENDER\'S GAME?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes') {
  alert('I love Orsen Scott Card book Ender\'s Game');
  totalCorrect++;
} else {
  alert('I guess you really don\'t know me');

  console.log(' The user was asked if my favorite book was Enders\'s game and responded ' + answerFive);
}

} // closes fifthQuestion

fifthQuestion (); // calls fifthQuestion to keep quiz going

function sixthQuestion () { // creates sixthQuestion


var answerSix = 6;
var attempts = 0;
while (attempts < 4) {
  var userAnswerSix = parseInt(prompt('Can you guess what my favorite number is? hint it is between one and ten'));
  if (userAnswerSix === answerSix) {
    alert('good job, you got it!');
    totalCorrect++;
    break;
  }
  else if (userAnswerSix < answerSix) {
    alert(' too low! guess higher');
  }
  else {
    alert(' too high! guess lower');
  }
  attempts++;
}

} // closes sixthQuestion

sixthQuestion(); // calls sixthQuestion to keep quiz going

function seventhQuestion () { // creates seventhQuestion

var answerSeven = ['California', 'North Carolina', 'Texas', 'New York'];
console.log(answerSeven);
var tries = 0;
var wrongAnswer = true;
while (tries < 7 && wrongAnswer) {
  var userAnswer = prompt('hi, can you guess the states I have lived in?');
  for (var i = 0; i < answerSeven.length; i++) {
    if (answerSeven[i].toLowerCase() === userAnswer.toLowerCase()) {
      alert(' Good Job!');
      wrongAnswer = false;
      totalCorrect++;
      //break;
    }
  }
  tries++;
  if (tries > 6 && wrongAnswer) {
    alert('thanks for playing the answers were California , North Carolina , Texas , New York  ');
  }
}

} // closes seventhQuestion

seventhQuestion(); // calls seventhQuestion to finish quiz

alert('You got ' + totalCorrect);