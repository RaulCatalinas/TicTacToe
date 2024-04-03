// React
import { useState } from 'react'

// Constants
import { TURNS } from '@/constants/turns'

export function useTurn() {
  const [turn, setTurn] = useState(TURNS.X)

  const changeTurn = newTurn => {
    setTurn(newTurn)
  }

  const resetTurn = () => {
    setTurn(TURNS.X)
  }

  return { turn, changeTurn, resetTurn }
}
