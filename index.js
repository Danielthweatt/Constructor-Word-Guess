// Modules

const inquirer = require('inquirer');
const Word = require('./Word');

// Global Variables

const wordArray = ['Jurassic Park', 'Independence Day', 'Indiana Jones', 
'Star Wars', 'Star Trek', 'The Lord of the Rings', 'Avengers', 
'The Rundown', 'Batman', 'Men in Black'];
let playedAlready = false;
let randomSelectionFromWordArray;
let wordObject;
let numberOfGuessesLeft;
let checkGuess;

// Function Declarations

const selectRandomWord = function(){
    return wordArray[Math.floor(Math.random() * 10)];
};

const guess = function(){
    if (numberOfGuesses > 0) {
        inquirer.prompt([
            {
                type: "input",
                message: 'Guess a letter:',
                name: "guess"
            }
        ]).then(function(answer){
            checkGuess = wordObject.checkGuess(answer.guess);
            if (checkGuess.isCorrect === 'Incorrect!') {
                numberOfGuesses--;
            }
            console.log(checkGuess.isCorrect);
            wordObject.displayWord();
            if (checkGuess.guessingComplete) {
                console.log('Great job! You guessed it!');
                inquire();
            } else {
                console.log(`Guesses left: ${numberOfGuesses}`);
                guess();
            }
        }).catch(function(error){
            console.log("Oh boy, it broke: " + error);
        });
    } else {
        console.log('You ran out of guesses!');
        inquire();
    }
};

const playGame = function(){
    randomSelectionFromWordArray = selectRandomWord();
    wordObject = new Word(randomSelectionFromWordArray);
    console.log('Here is your randomly selected word:');
    wordObject.displayWord();
    numberOfGuesses = 12;
    guess();
};

const inquire = function(){
    inquirer.prompt([
        {
            type: "confirm",
            message: `Do you want to play ${playedAlready ? 'again?' : 'a round?'}`,
            name: "play"
        }
    ]).then(function(answer){
        if (answer.play) {
            console.log("Let's play!");
            playedAlready = true;
            playGame();    
        } else {
            console.log('Ok! See ya later!');
        }
    }).catch(function(error){
        console.log("Oh boy, it broke: " + error);
    });
};

// Function Calls

inquire();