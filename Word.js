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
        this.word.forEach(function(letter){
            letter.checkGuess(guess);
        });
    };
};

module.exports = Word;