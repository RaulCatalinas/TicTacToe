import { useState } from 'react'

export function useBoard() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const updateBoard = newBoard => {
    setBoard(newBoard)
  }

  return { board, updateBoard }
}
