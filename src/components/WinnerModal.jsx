// Components
import PlayAgainButton from './PlayAgainButton.jsx'
import Square from './Square.jsx'

// Constants
import { TEXTS } from '@/constants/texts.js'
import WinnerModalLayout from '@/layouts/WinnerModalLayout.jsx'

export default function WinnerModal({
  winner,
  resetWinner,
  resetTurn,
  resetBoard
}) {
  return (
    <WinnerModalLayout>
      <p style={{ fontSize: 21 }}>{winner ? TEXTS.victory : TEXTS.draw}</p>

      {winner && (
        <span>
          <Square>{winner}</Square>
        </span>
      )}

      <PlayAgainButton
        resetWinner={resetWinner}
        resetTurn={resetBoard}
        resetBoard={resetTurn}
      />
    </WinnerModalLayout>
  )
}
