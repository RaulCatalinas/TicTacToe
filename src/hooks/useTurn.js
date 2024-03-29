import { useState } from 'react'

export function useTurn(initialState) {
  const [turn, setTurn] = useState(initialState)

  const changeTurn = newTurn => {
    setTurn(newTurn)
  }

  return { turn, changeTurn }
}
