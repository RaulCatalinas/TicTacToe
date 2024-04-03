// React
import { useState } from 'react'

// Types
import type { Board } from '@/types/board'

export function useBoard() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null))

  const updateBoard = (newBoard: Board) => {
    setBoard(newBoard)
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
  }

  return { board, updateBoard, resetBoard }
}
