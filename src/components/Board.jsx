// CSS

// Hooks
import { useBoard } from '@/hooks/useBoard.js'
import { useTurn } from '@/hooks/useTurn.js'

// Components
import Square from './Square.jsx'
import Turns from './Turns.jsx'

// Constants
import { TURNS } from '@/constants/turns.js'

// Layouts
import BoardLayout from '@/layouts/BoardLayout.jsx'
import GameLayout from '@/layouts/GameLayout.jsx'

export default function Board() {
  const { board, updateBoard } = useBoard(Array(9).fill(null))
  const { turn, changeTurn } = useTurn(TURNS.X)

  return (
    <BoardLayout>
      <GameLayout>
        {board.map((_, index) => {
          return <Square key={index}>{board[index]}</Square>
        })}
      </GameLayout>

      <Turns currentTurn={turn} />
    </BoardLayout>
  )
}
