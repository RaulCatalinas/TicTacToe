import { WINNER_COMBINATIONS } from '@/constants/winner.js'

export function checkWinner(boardToCheck) {
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
