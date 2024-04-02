// Hooks
import { useBoard } from '@/hooks/useBoard.js'
// Components
import Square from './Square.jsx'

// Constants

// Layouts
import BoardLayout from '@/layouts/BoardLayout.jsx'
import GameLayout from '@/layouts/GameLayout.jsx'

// Controllers
import { updateBoardController } from '@/controllers/update-board-controller.js'

export default function Board({ turn, changeTurn, changeWinner, winner }) {
  const { board, updateBoard } = useBoard()

  const handleUpdateBoard = index => {
    updateBoardController({
      board,
      index,
      turn,
      changeTurn,
      updateBoard,
      changeWinner,
      winner
    })
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
