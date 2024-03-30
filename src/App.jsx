// CSS
import './css/common.css'

// Components
import Board from './components/Board'
import Turns from './components/Turns'

// Hooks
import { useTurn } from '@/hooks/useTurn.js'

function App() {
  const { turn, changeTurn } = useTurn()

  return (
    <>
      <Board turn={turn} changeTurn={changeTurn} />
      <Turns currentTurn={turn} />
    </>
  )
}

export default App
