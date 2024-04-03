// Constants
import { TURNS } from '@/constants/turns'

// Utils
import { checkEndGame, gameStorage } from '@/utils/game'
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

  gameStorage.save({ key: 'tictactoe', value: newBoard })

  updateBoard(newBoard)
  changeTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

  const newWinner = checkWinner(newBoard)

  if (newWinner) {
    gameStorage.delete('tictactoe')

    changeWinner(newWinner)
  } else {
    const gameOver = checkEndGame(newBoard)

    if (gameOver) {
      gameStorage.delete('tictactoe')

      changeWinner(false)
    }
  }
}
