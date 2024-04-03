import type { Board } from '@/types/board'

export function checkEndGame(boardToCheck: Board) {
  return boardToCheck.every(square => square != null)
}
