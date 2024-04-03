// CSS
import './css/common.css'

// Components
import Board from './components/Board'
import Turns from './components/Turns'
import WinnerModal from './components/WinnerModal'

// Hooks
import { useBoard } from './hooks/useBoard.js'
import { useTurn } from './hooks/useTurn.js'
import { useWinner } from './hooks/useWinner.js'

// Third-Party components
import { Analytics } from '@vercel/analytics/react'

function App() {
  const { board, updateBoard, resetBoard } = useBoard()
  const { turn, changeTurn, resetTurn } = useTurn()
  const { winner, changeWinner, resetWinner } = useWinner()

  return (
    <>
      <Board
        turn={turn}
        changeTurn={changeTurn}
        changeWinner={changeWinner}
        winner={winner}
        board={board}
        updateBoard={updateBoard}
      />

      <Turns currentTurn={turn} />

      {winner != null && (
        <WinnerModal
          winner={winner}
          resetWinner={resetWinner}
          resetTurn={resetBoard}
          resetBoard={resetTurn}
        />
      )}

      <Analytics />
    </>
  )
}

export default App
