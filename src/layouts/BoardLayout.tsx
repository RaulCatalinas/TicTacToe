// CSS
import styles from '@/css/board.module.css'

// React
import type { PropsWithChildren } from 'react'

export default function BoardLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.board}>
      <h1>3 En Raya</h1>
      {children}
    </div>
  )
}
