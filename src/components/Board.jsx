// CSS
import styles from '@/css/board.module.css'

// Hooks
import { useBoard } from '@/hooks/useBoard.js'
import { useTurn } from '@/hooks/useTurn.js'

// Components
import Square from './Square.jsx'
import Turns from './Turns.jsx'

// Constants
import { TURNS } from '@/constants/turns.js'

export default function Board() {
  const { board, updateBoard } = useBoard(Array(9).fill(null))
  const { turn, changeTurn } = useTurn(TURNS.X)

  return (
    <main className={styles.board}>
      <h1>TicTacToe</h1>
      <section className={styles.game}>
        {board.map((_, index) => {
          return <Square key={index}>{board[index]}</Square>
        })}
      </section>

      <Turns currentTurn={turn} />
    </main>
  )
}
