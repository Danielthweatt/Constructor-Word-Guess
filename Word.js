// Modules

const Letter = require('./Letter');

// Word Object Constructor

const Word = function(word){
    this.word = word.split('').map(function(letter){
        return new Letter(letter);
    });
    this.displayWord = function(){
        console.log(this.word.join(''));
    };
    this.checkGuess = function(guess){
        let isCorrect = 'Incorrect!';
        let result;
        let guessingComplete = true;
        this.word.forEach(function(letter){
            result = letter.checkGuess(guess);
            if (result.correct && isCorrect === 'Incorrect!') {
                if (result.guessedYet) {
                    isCorrect = 'You already guessed that!';
                } else {
                    isCorrect = 'Correct!';
                }
            }
            if (!result.guessedYet) {
                if (!result.correct) {
                    guessingComplete = false;
                }
            }
        });
        return {isCorrect: isCorrect, guessingComplete: guessingComplete};
    };
};

module.exports = Word;