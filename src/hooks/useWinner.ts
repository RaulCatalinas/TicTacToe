// Types
import type { Winner } from '@/types/winner'

// React
import { useState } from 'react'

export function useWinner() {
  const [winner, setWinner] = useState<Winner>(null)

  const changeWinner = (newWinner: Winner) => {
    setWinner(newWinner)
  }

  const resetWinner = () => {
    setWinner(null)
  }

  return { winner, changeWinner, resetWinner }
}
