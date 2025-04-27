import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];
function getCurrentPlayer(turns) {
  return turns[0]?.player === 'X' ? 'O' : 'X';
}
function computeGameBoard(gameTurns) {
  const gameBoard = [ ...initialGameBoard.map(row => [ ...row ]) ];
  for(const { square: { row, col }, player } of gameTurns) {
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const activePlayer = getCurrentPlayer(gameTurns);

  const gameBoard = computeGameBoard(gameTurns);

  for(const combination of WINNING_COMBINATIONS) {
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => [
      { square: { row: rowIndex, col: colIndex }, player: getCurrentPlayer(prevTurns) },
      ...prevTurns
    ]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={ activePlayer === 'X' } />
          <Player initialName="Player 2" symbol="O" isActive={ activePlayer === 'O' }/>
        </ol>
        <GameBoard onSelectSquare={ handleSelectSquare } board={ gameBoard } />
      </div>
      <Log turns={ gameTurns } />
    </main>
  )
}

export default App
