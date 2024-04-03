// CSS
import styles from '@/css/turn.module.css'

// Component
import Square from './Square'

// Constants
import { TURNS } from '@/constants/turns'

interface Props {
  currentTurn: TURNS
}

export default function Turns({ currentTurn }: Props) {
  return (
    <section className={styles.turn} style={{ gap: 6 }}>
      <Square isSelected={currentTurn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={currentTurn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}
