import type { TURNS } from '@/constants/turns'
import type { Board } from '@/types/board'

type GameLocalStorageKeys = 'board' | 'turn'

interface SaveGame {
  key: GameLocalStorageKeys
  value: Board | TURNS
}

export const gameStorage = {
  save: ({ key, value }: SaveGame) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  resume: (key: GameLocalStorageKeys): (Board | null)[] | TURNS | null => {
    const dataFromLocalStorage = localStorage.getItem(key)

    return dataFromLocalStorage != null
      ? JSON.parse(dataFromLocalStorage)
      : null
  },

  delete: (key: GameLocalStorageKeys) => {
    localStorage.removeItem(key)
  }
}
