// Modules

const Letter = require('./Letter');

// Word Object Constructor

const Word = function(word){
    this.word = word.split('').map(function(letter){
        return new Letter(letter);
    });
    this.displayWord = function(){
        return this.word.join('');
    };
    this.checkGuess = function(guess){
        let isCorrect = 'Incorrect!';
        let result;
        this.word.forEach(function(letter){
            result = letter.checkGuess(guess);
            if (result.correct && isCorrect === 'Incorrect!') {
                if (result.guessedYet) {
                    isCorrect = 'You already guessed that!';
                } else {
                    isCorrect = 'Correct!';
                }
            }
        });
        return isCorrect;
    };
};

module.exports = Word;