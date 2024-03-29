import styles from '@/css/square.module.css'

export default function Square({ children, updateBoard, index, isSelected }) {
  return (
    <div
      className={`${styles.square} ${isSelected ? styles['is-selected'] : ''}`}
    >
      {children}
    </div>
  )
}
