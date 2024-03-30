// Hooks
import { useBoard } from '@/hooks/useBoard.js'

// Components
import Square from './Square.jsx'

// Constants
import { TURNS } from '@/constants/turns.js'

// Layouts
import BoardLayout from '@/layouts/BoardLayout.jsx'
import GameLayout from '@/layouts/GameLayout.jsx'

export default function Board({ turn, changeTurn }) {
  const { board, updateBoard } = useBoard()

  const handleUpdateBoard = index => {
    if (board[index] != null) return

    const newBoard = [...board]

    updateBoard(newBoard.with(index, turn))
    changeTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
  }

  return (
    <BoardLayout>
      <GameLayout>
        {board.map((_, index) => {
          return (
            <Square key={index} updateBoard={handleUpdateBoard} index={index}>
              {board[index]}
            </Square>
          )
        })}
      </GameLayout>
    </BoardLayout>
  )
}
