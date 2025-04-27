import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log';
import GameOver from './components/GameOver';
import { getWinner } from './winning-combinations';

const PLAYERS = { 'X': 'Player 1', 'O': 'Player 2'};
const INITIAL_GAME_BOARD = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];
function getCurrentPlayer(turns) {
  return turns[0]?.player === 'X' ? 'O' : 'X';
}
function computeGameBoard(gameTurns) {
  const gameBoard = [ ...INITIAL_GAME_BOARD.map(row => [ ...row ]) ];
  for(const { square: { row, col }, player } of gameTurns) {
    gameBoard[row][col] = player;
  }
  return gameBoard;
}


function App() {
  const [ players, setPlayers ] = useState(PLAYERS);
  const [ gameTurns, setGameTurns ] = useState([]);
  const activePlayer = getCurrentPlayer(gameTurns);

  const gameBoard = computeGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => [
      { square: { row: rowIndex, col: colIndex }, player: getCurrentPlayer(prevTurns) },
      ...prevTurns
    ]);
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayersNameChange(symbol, newName) {
    setPlayers(currentPlayers => ({ ...currentPlayers, [symbol]: newName }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={ PLAYERS.X } symbol="X" isActive={ activePlayer === 'X' } onChangeName={ handlePlayersNameChange } />
          <Player initialName={ PLAYERS.O } symbol="O" isActive={ activePlayer === 'O' } onChangeName={ handlePlayersNameChange } />
        </ol>
        { ( winner || hasDraw ) && <GameOver winner={ winner } onRestart={ handleRestart } /> }
        <GameBoard onSelectSquare={ handleSelectSquare } board={ gameBoard } />
      </div>
      <Log turns={ gameTurns } />
    </main>
  )
}

export default App
