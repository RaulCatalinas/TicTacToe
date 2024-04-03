// Components
import Square from './Square'

// Layouts
import BoardLayout from '@/layouts/BoardLayout'
import GameLayout from '@/layouts/GameLayout'

// Controllers
import { updateBoardController } from '@/controllers/update-board-controller.js'

// Utils
import { gameStorage } from '@/utils/game.js'

// React
import { useEffect } from 'react'

// Constants
import type { TURNS } from '@/constants/turns'

// Types
import type { Board } from '@/types/board'
import type { Winner } from '@/types/winner'

interface Props {
  turn: TURNS
  changeTurn: (newTurn: TURNS) => void
  changeWinner: (newWinner: Winner) => void
  winner: Winner
  board: Board
  updateBoard: (newBoard: Board) => void
}

export default function Board({
  turn,
  changeTurn,
  changeWinner,
  winner,
  board,
  updateBoard
}: Props) {
  useEffect(() => {
    gameStorage.resume({ key: 'tictactoe', updateBoard })
  }, [updateBoard])

  const handleUpdateBoard = (index: number) => {
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
            <Square
              key={index}
              handleUpdateBoard={handleUpdateBoard}
              index={index}
            >
              {board[index]}
            </Square>
          )
        })}
      </GameLayout>
    </BoardLayout>
  )
}
