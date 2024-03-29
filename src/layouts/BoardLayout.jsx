import styles from '@/css/board.module.css'

export default function BoardLayout({ children }) {
  return (
    <main className={styles.board}>
      <h1>TicTacToe</h1>
      {children}
    </main>
  )
}
