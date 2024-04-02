// Hooks
import { useBoard } from '@/hooks/useBoard.js'

// Components
import Square from './Square.jsx'

// Constants
import { TURNS } from '@/constants/turns.js'

// Layouts
import BoardLayout from '@/layouts/BoardLayout.jsx'
import GameLayout from '@/layouts/GameLayout.jsx'

// Utils
import { checkEndGame } from '@/utils/game.js'
import { checkWinner } from '@/utils/winner.js'

export default function Board({ turn, changeTurn, changeWinner, winner }) {
  const { board, updateBoard } = useBoard()

  const handleUpdateBoard = index => {
    if (board[index] != null || winner) return

    const newBoard = [...board]

    newBoard[index] = turn

    updateBoard(newBoard)
    changeTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

    const newWinner = checkWinner(newBoard)

    if (newWinner) changeWinner(newWinner)
    else {
      const gameOver = checkEndGame(newBoard)

      if (gameOver) changeWinner(false)
    }
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
