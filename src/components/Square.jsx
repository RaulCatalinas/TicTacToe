/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import styles from '@/css/square.module.css'

export default function Square({ children, updateBoard, index, isSelected }) {
  const handleClick = () => {
    updateBoard(index)
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
