// CSS
import styles from '@/css/winner.module.css'

// React
import type { PropsWithChildren } from 'react'

export default function WinnerModalLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.winner}>
      <div className={styles.text}>{children}</div>
    </div>
  )
}
