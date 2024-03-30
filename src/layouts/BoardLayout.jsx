import styles from '@/css/board.module.css'

export default function BoardLayout({ children }) {
  return (
    <div className={styles.board}>
      <h1>TicTacToe</h1>
      {children}
    </div>
  )
}
