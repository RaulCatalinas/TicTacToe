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

// Utils
import { gameStorage } from '@/utils/game.js'

// React
import { useEffect } from 'react'

export default function Board({ turn, changeTurn, changeWinner, winner }) {
  const { board, updateBoard } = useBoard()

  useEffect(() => {
    gameStorage.resume({ key: 'tictactoe', updateBoard })
  }, [updateBoard])

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
