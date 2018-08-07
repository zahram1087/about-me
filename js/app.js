'use strict';

//get the user's name 
var userName = prompt('Hi there! What is your name?');

alert(' Thanks for being here '  + userName + '. I\'m going to ask you some questions about me . These are yes or no questions so please feel free to answer with yes/no ');

//ask them five yes/no questions

var answerOne = prompt('Do I speak more than three languages?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes') {
    alert('I sure do! Or as they say in swahili sawah sawah!'); 
} else {
 alert('I actaully speak four languages!');
}

var answerTwo = prompt('Am I a twin?').toLowerCase();

if (answerTwo === 'y' || answerTwo === 'yes') {
    alert('Good job! I sure do share a birthday'); 
} else {
 alert('wrong! I have a twin sister!');
}

var answerThree = prompt('Was I born in the USA?').toLowerCase();

if (answerThree === 'n' || answerThree === 'no') {
    alert('You must have caugt my accent because you got it right!'); 
} else {
 alert('the USA is my home but my place of birth is Somalia');
}
 var answerFour = prompt('Have I ever committed a crime?').toLowerCase();

if (answerFour === 'n' || answerFour === 'no') {
    alert('Good Job!'); 
} else {
 alert('really? As if I would be caught!');
}

var answerFive = prompt('Is my favorite book called ENDER\'S GAME?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes') {
    alert('I love Orsen Scott Card book Ender\'s Game'); 
} else {
 alert('I guess you really don\'t know me'); 
}