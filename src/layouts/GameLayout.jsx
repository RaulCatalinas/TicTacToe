import styles from '@/css/board.module.css'

export default function GameLayout({ children }) {
  return <section className={styles.game}>{children}</section>
}
