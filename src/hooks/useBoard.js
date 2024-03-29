import { useState } from 'react'

export function useBoard(initialState) {
  const [board, setBoard] = useState(initialState)

  const updateBoard = newBoard => {
    setBoard(newBoard)
  }

  return { board, updateBoard }
}
