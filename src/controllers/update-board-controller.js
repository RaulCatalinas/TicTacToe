// Constants
import { TURNS } from '@/constants/turns'

// Utils
import { checkEndGame } from '@/utils/game'
import { checkWinner } from '@/utils/winner'

export function updateBoardController({
  board,
  index,
  turn,
  updateBoard,
  changeTurn,
  changeWinner,
  winner
}) {
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
