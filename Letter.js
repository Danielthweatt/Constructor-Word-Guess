// Letter Object Constructor

const Letter = function(letter){
    this.letter = letter;
    this.guessedYet = false;
    this.toString = function(){
        if (this.guessedYet) {
            return this.letter;
        } else {
            return "_";
        }
    };
    this.checkGuess = function(guess){
        if (guess === this.letter){
            this.guessedYet = true;
        }
    };
};

module.exports = Letter;