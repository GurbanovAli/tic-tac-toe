class TicTacToe {
    constructor() {
        this.currentPlayer =  'x';
        this.field = [['.', '.', '.'],
                      ['.', '.', '.'],
                      ['.', '.', '.']];
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.isFinished())
        if (this.field[rowIndex][columnIndex] === '.') {
          this.field[rowIndex][columnIndex] = this.currentPlayer;
          this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
      return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
      //x wins
      if ((this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === 'x') ||
          (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === 'x') ||
          (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === 'x') ||
          (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === 'x') ||
          (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === 'x') ||
          (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === 'x') ||
          (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x') ||
          (this.field[0][2] === 'x' && this.field[1][1] === 'x' && this.field[2][0] === 'x')) return 'x';
      //o wins
      if ((this.field[0][0] === 'o' && this.field[0][1] === 'o' && this.field[0][2] === 'o') ||
          (this.field[1][0] === 'o' && this.field[1][1] === 'o' && this.field[1][2] === 'o') ||
          (this.field[2][0] === 'o' && this.field[2][1] === 'o' && this.field[2][2] === 'o') ||
          (this.field[0][0] === 'o' && this.field[1][0] === 'o' && this.field[2][0] === 'o') ||
          (this.field[0][1] === 'o' && this.field[1][1] === 'o' && this.field[2][1] === 'o') ||
          (this.field[0][2] === 'o' && this.field[1][2] === 'o' && this.field[2][2] === 'o') ||
          (this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === 'o') ||
          (this.field[0][2] === 'o' && this.field[1][1] === 'o' && this.field[2][0] === 'o')) return 'o';
      return null;
    }

    noMoreTurns() {
      return this.field.join('').split('').filter(v => v !== '.').length === 15;
    }

    isDraw() {
      return this.isFinished() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex] !== '.' ? this.field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
