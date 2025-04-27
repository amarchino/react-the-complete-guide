const WINNING_COMBINATIONS = [
    // Horizontal
    [ { row: 0, col: 0}, { row: 0, col: 1}, { row: 0, col: 2 } ],
    [ { row: 1, col: 0}, { row: 1, col: 1}, { row: 1, col: 2 } ],
    [ { row: 2, col: 0}, { row: 2, col: 1}, { row: 2, col: 2 } ],
    // Vertical
    [ { row: 0, col: 0}, { row: 1, col: 0}, { row: 2, col: 0 } ],
    [ { row: 0, col: 1}, { row: 1, col: 1}, { row: 2, col: 1 } ],
    [ { row: 0, col: 2}, { row: 1, col: 2}, { row: 2, col: 2 } ],
    // Diagonal
    [ { row: 0, col: 0}, { row: 1, col: 1}, { row: 2, col: 2 } ],
    [ { row: 0, col: 2}, { row: 1, col: 1}, { row: 2, col: 0 } ],
];

export function getWinner(gameBoard) {
  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      return firstSquareSymbol;
    }
  }
  return undefined;
}
