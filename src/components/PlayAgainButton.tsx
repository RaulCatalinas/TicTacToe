// Constants
import { TEXTS } from '@/constants/texts'

// CSS
import styles from '@/css/play-again-button.module.css'

interface Props {
  resetWinner: () => void
  resetTurn: () => void
  resetBoard: () => void
}

export default function PlayAgainButton({
  resetWinner,
  resetTurn,
  resetBoard
}: Props) {
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
