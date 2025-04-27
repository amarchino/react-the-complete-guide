const initialGameBoard = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = [ ...initialGameBoard.map(row => [ ...row ]) ];

  for(const { square: { row, col }, player } of turns) {
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      { gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          { row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
            <button onClick={ () => onSelectSquare(rowIndex, columnIndex) }>{ playerSymbol }</button>
          </li>) }
        </ol>
      </li>) }
    </ol>
  );
}
