// React
import { useState } from 'react'

// Types
import type { Board } from '@/types/board'

// Storage
import { gameStorage } from '@/storage/game'

export function useBoard() {
  const [board, setBoard] = useState<Board>(() => {
    const board = gameStorage.resume('board')

    return board != null ? (board as Board) : Array(9).fill(null)
  })

  const updateBoard = (newBoard: Board) => {
    setBoard(newBoard)
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
  }

  return { board, updateBoard, resetBoard }
}
