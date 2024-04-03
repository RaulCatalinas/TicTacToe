import type { Board } from '@/types/board'

interface SaveGame {
  key: string
  value: Board
}

interface ResumeGame {
  key: string
  updateBoard: (newBoard: Board) => void
}

export function checkEndGame(boardToCheck: Board) {
  return boardToCheck.every(square => square != null)
}

export const gameStorage = {
  save: ({ key, value }: SaveGame) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  resume: ({ key, updateBoard }: ResumeGame) => {
    const gameFromLocalStorage = localStorage.getItem(key)
    const game =
      gameFromLocalStorage != null ? JSON.parse(gameFromLocalStorage) : []

    updateBoard(game)
  },

  delete: (key: string) => {
    localStorage.removeItem(key)
  }
}
