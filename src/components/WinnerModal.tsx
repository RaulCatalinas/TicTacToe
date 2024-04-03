// Components
import PlayAgainButton from './PlayAgainButton.js'
import Square from './Square.js'

// Constants
import { TEXTS } from '@/constants/texts.js'

// Layouts
import WinnerModalLayout from '@/layouts/WinnerModalLayout'

// Types
import { Winner } from '@/types/winner'

interface Props {
  winner: Winner,
  resetWinner: () => void,
  resetTurn: () => void,
  resetBoard: () => void,
}

export default function WinnerModal({
  winner,
  resetWinner,
  resetTurn,
  resetBoard
}: Props) {
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
