// CSS
import styles from '@/css/board.module.css'

// React
import type { PropsWithChildren } from 'react'

export default function GameLayout({ children }: PropsWithChildren) {
  return <section className={styles.game}>{children}</section>
}
