// Letter Object Constructor

const Letter = function(letter){
    this.letter = letter;
    this.guessedYet = false;
    this.toString = function(){
        if (this.guessedYet) {
            return ` ${this.letter} `;
        } else {
            return ' _ ';
        }
    };
    this.checkGuess = function(guess){
        if (guess === this.letter){
            let guessedYet = this.guessedYet;
            this.guessedYet = true;
            return {correct: true, guessedYet: guessedYet};
        } else {
            return {correct: false};
        }
    };
};

module.exports = Letter;