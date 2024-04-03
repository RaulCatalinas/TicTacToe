// Constants
import { TURNS } from '@/constants/turns'

// Utils
import { checkEndGame, gameStorage } from '@/utils/game'
import { checkWinner } from '@/utils/winner'

// Types
import type { Board } from '@/types/board'
import type { Winner } from '@/types/winner'

interface Props {
  board: Board
  index: number
  turn: TURNS
  updateBoard: (updatedBoard: Board) => void
  changeTurn: (newTurn: TURNS) => void
  changeWinner: (newWinner: Winner) => void
  winner: Winner
}

export function updateBoardController({
  board,
  index,
  turn,
  updateBoard,
  changeTurn,
  changeWinner,
  winner
}: Props) {
  if (board[index] != null || winner) return

  const updatedBoard = board.with(index, turn)

  gameStorage.save({ key: 'tictactoe', value: updatedBoard })

  updateBoard(updatedBoard)
  changeTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

  const newWinner = checkWinner(updatedBoard)

  if (newWinner) {
    gameStorage.delete('tictactoe')

    changeWinner(newWinner)
  } else {
    const gameOver = checkEndGame(updatedBoard)

    if (gameOver) {
      gameStorage.delete('tictactoe')

      changeWinner(false)
    }
  }
}
