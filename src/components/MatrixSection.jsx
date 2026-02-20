import { useState } from 'react'
import { guidedTourSections } from '../data/matrixData'
import UnifiedMatrix from './UnifiedMatrix'
import SidePanel from './SidePanel'
import TileModal from './TileModal'
import './MatrixSection.css'

const MatrixSection = () => {
  const [showMatrixIntro, setShowMatrixIntro] = useState(true)
  const [currentState, setCurrentState] = useState(0)
  const [selectedTile, setSelectedTile] = useState(null)
  const [tourClosed, setTourClosed] = useState(false)

  const handleTileClick = (tileData) => {
    setSelectedTile(tileData)
  }

  const handleCloseModal = () => {
    setSelectedTile(null)
  }

  const handleContinue = () => {
    if (showMatrixIntro) {
      setShowMatrixIntro(false)
      setCurrentState(0)
      return
    }
    if (currentState < guidedTourSections.length - 1) {
      setCurrentState(currentState + 1)
    }
  }

  const handleCloseTour = () => {
    setTourClosed(true)
  }

  const highlightMode = showMatrixIntro || tourClosed ? null : (guidedTourSections[currentState]?.id || null)

  return (
    <div className="matrix-section">
      <div className="matrix-section-content">
        {/* Side Panel - Left */}
        <SidePanel
          showMatrixIntro={showMatrixIntro}
          currentState={currentState}
          tourClosed={tourClosed}
          onContinue={handleContinue}
          onCloseTour={handleCloseTour}
        />

        {/* Matrix Visualization - Right */}
        <div className="matrix-visualization-area">
          <div className="matrix-visualization-wrapper">
            <UnifiedMatrix
              onTileClick={handleTileClick}
              highlightMode={highlightMode}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTile && (
        <TileModal
          tileData={selectedTile}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default MatrixSection
