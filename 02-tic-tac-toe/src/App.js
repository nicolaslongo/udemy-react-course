import { useState } from 'react';

import Header from "./components/Header.jsx"
import Player from "./components/Player.jsx"
import GameBoard from "./components/Gameboard.jsx"
import GameOver from './components/GameOver.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS} from "./winning-combinations.js"

const xPlayer = 'X';
const oPlayer = 'O'
const PLAYERS = {
  xPlayer: 'Player 1',
  oPlayer: 'Player 2',
}
const DEFAULT_STARTER_PLAYER = xPlayer;
const MAX_TURNS = 9;

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function getActivePlayer(gameTurns) {
  let currentPlayer = DEFAULT_STARTER_PLAYER;
  if (gameTurns.length > 0 && gameTurns[0].player === xPlayer) {
    currentPlayer = oPlayer;
  }
  return currentPlayer
}

function getGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  // Derive state from turns to gameBoard. State gets only saved in one place
  // Try to manage as many state as little and derive as much state as we can
  for (const turn of gameTurns) {
    const {square, player} = turn;
    gameBoard[square.row][square.col] = player
  }
  return gameBoard
}

function getWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && (firstSquareSymbol === secondSquareSymbol) && (secondSquareSymbol === thirdSquareSymbol)) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  
  // Lifting state up, since all Players, GameBoard and Log need to know and "handle" this
  // state of gameTurns.
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = getActivePlayer(gameTurns)
  const gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);
  const drawMatch = (gameTurns.length === MAX_TURNS) && !winner;

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns(previousTurns => {
      let currentPlayer = getActivePlayer(previousTurns);

      const updatedTurns = [{square:{row: rowIndex, col: colIndex}, player: currentPlayer}, ...previousTurns];
      console.log('updated turns is ', updatedTurns)

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(previousPlayers => {
      return {
        ...previousPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <>
      <Header/>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <li>
              <Player 
                defaultName={PLAYERS.xPlayer} 
                symbol={xPlayer} 
                isActive={activePlayer === xPlayer}
                onNameChange={handlePlayerNameChange}
              />
            </li>
            <li>
              <Player 
                defaultName={PLAYERS.oPlayer} 
                symbol={oPlayer} 
                isActive={activePlayer === oPlayer}
                onNameChange={handlePlayerNameChange}
              />
            </li>
          </ol>
          {(winner || drawMatch) && <GameOver winner={winner} onRestart={handleRematch}/>}
          <GameBoard 
            onSelectedSquare={handleSelectedSquare}
            board={gameBoard}
          />
        </div>

        {<Log turns={gameTurns}/>}
      </main>
      <p>Coming soon...</p>
    </>
  )
}

export default App;