// Constants
import { TEXTS } from '@/constants/texts'

// CSS
import styles from '@/css/play-again-button.module.css'

export default function PlayAgainButton({
  resetWinner,
  resetTurn,
  resetBoard
}) {
  const handleResetGame = () => {
    resetBoard()
    resetTurn()
    resetWinner()
  }

  return (
    <button onClick={handleResetGame} className={styles['play-again-button']}>
      {TEXTS.revenge}
    </button>
  )
}
