// CSS
import './css/common.css'

// Components
import Board from './components/Board'
import Turns from './components/Turns'
import WinnerModal from './components/WinnerModal'

// Hooks
import { useTurn } from './hooks/useTurn.js'
import { useWinner } from './hooks/useWinner'

function App() {
  const { turn, changeTurn } = useTurn()
  const { winner, changeWinner } = useWinner()

  return (
    <>
      <Board
        turn={turn}
        changeTurn={changeTurn}
        changeWinner={changeWinner}
        winner={winner}
      />
      <Turns currentTurn={turn} />
      {winner != null && <WinnerModal winner={winner} />}
    </>
  )
}

export default App
