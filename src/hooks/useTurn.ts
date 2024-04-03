// React
import { useState } from 'react'

// Constants
import { TURNS } from '@/constants/turns'

// Storage
import { gameStorage } from '@/storage/game'

export function useTurn() {
  const [turn, setTurn] = useState(() => {
    const turn = gameStorage.resume('turn')

    return turn != null ? (turn as TURNS) : TURNS.X
  })

  const changeTurn = (newTurn: TURNS) => {
    setTurn(newTurn)
  }

  const resetTurn = () => {
    setTurn(TURNS.X)
  }

  return { turn, changeTurn, resetTurn }
}
