import { useState, useRef } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import UnifiedMatrix from './UnifiedMatrix'
import SidePanel from './SidePanel'
import TileModal from './TileModal'
import './MatrixSection.css'

const MatrixSection = () => {
  const [showDetailedMatrix, setShowDetailedMatrix] = useState(false)
  const containerRef = useRef(null)
  const { progress, currentState, stateProgress } = useScrollProgress(containerRef)
  const [selectedTile, setSelectedTile] = useState(null)

  const handleTileClick = (tileData) => {
    setSelectedTile(tileData)
  }

  const handleCloseModal = () => {
    setSelectedTile(null)
  }

  // Calculate scroll progress for Matrix3D (fades out in state 1)
  const matrix3DProgress = currentState === 0 
    ? stateProgress 
    : currentState > 0 
      ? 1 
      : 0

  // Calculate scroll progress for IntersectionsGrid (visible in state 1)
  const intersectionsProgress = progress

  // Calculate scroll progress for CapabilitiesGrid (visible in state 2)
  const capabilitiesProgress = progress

  return (
    <div className="matrix-section">
      <div className="matrix-section-header">
        <h1 className="matrix-section-title">How do we structure our response? ↓</h1>
      </div>
      
      <div className="matrix-section-container" ref={containerRef}>
        <div className="matrix-section-content">
          {/* Side Panel */}
          <SidePanel 
            currentState={currentState} 
            stateProgress={stateProgress}
          />

          {/* Matrix Visualization Area */}
          <div className="matrix-visualization-area">
            <div className="matrix-visualization-wrapper">
              {/* Unified Matrix */}
              <UnifiedMatrix onTileClick={handleTileClick} />
            </div>
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
