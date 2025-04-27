export default function GameBoard({ onSelectSquare }) {

  return (
    <ol id="game-board">
      { gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          { row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
            <button onClick={onSelectSquare}>{ playerSymbol }</button>
          </li>) }
        </ol>
      </li>) }
    </ol>
  );
}
