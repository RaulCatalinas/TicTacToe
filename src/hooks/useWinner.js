import { useState } from 'react'

export function useWinner() {
  const [winner, setWinner] = useState(null)

  const changeWinner = newWinner => {
    setWinner(newWinner)
  }

  return { winner, changeWinner }
}
