export function checkEndGame(boardToCheck) {
  return boardToCheck.every(square => square != null)
}
