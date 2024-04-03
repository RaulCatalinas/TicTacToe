// Constants
import { WINNER_COMBINATIONS } from '@/constants/winner.js'

// Types
import type { Board } from '@/types/board'

export function checkWinner(boardToCheck: Board) {
  for (const winnerCombination of WINNER_COMBINATIONS) {
    const [a, b, c] = winnerCombination

    if (
      boardToCheck[a] != null &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }

  return null
}
