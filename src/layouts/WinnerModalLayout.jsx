import styles from '@/css/winner.module.css'

export default function WinnerModalLayout({ children }) {
  return (
    <div className={styles.winner}>
      <div className={styles.text}>{children}</div>
    </div>
  )
}
