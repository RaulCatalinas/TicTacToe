// CSS
import styles from '@/css/square.module.css'

// React
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren { 
  handleUpdateBoard?: (index: number) => void
  index?: number, 
  isSelected?: boolean
}

export default function Square({ children, handleUpdateBoard, index, isSelected }: Props) {
  const handleClick = () => {
    if (handleUpdateBoard !== undefined)
    handleUpdateBoard(index ?? 0)
  }

  return (
    <div
      className={`${styles.square} ${isSelected ? styles['is-selected'] : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
