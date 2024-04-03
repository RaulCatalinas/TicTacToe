export function checkEndGame(boardToCheck) {
  return boardToCheck.every(square => square != null)
}

export const gameStorage = {
  save: ({ key, value }) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  resume: ({ key, updateBoard }) => {
    const gameFromLocalStorage = localStorage.getItem(key)
    const game = JSON.parse(gameFromLocalStorage)

    console.log({ game, gameFromLocalStorage })

    if (gameFromLocalStorage != null) updateBoard(game)
  },

  delete: key => {
    localStorage.removeItem(key)
  }
}
