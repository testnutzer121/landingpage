import { useState } from 'react'
import Matrix2x2 from './Matrix2x2'
import TileModal from './TileModal'
import './Matrix2x2View.css'

const Matrix2x2View = ({ onNext }) => {
  const [selectedTile, setSelectedTile] = useState(null)

  const textContent = {
    title: 'Our Framework',
    description: 'Our collaborative approach is organized across two key dimensions: how we think and create, and the domains we focus on - Human Flourishing, Systemic Infrastructure, and Innovation.',
    think: {
      title: 'Think',
      description: 'The thinking dimension encompasses our research, analysis, and conceptual work. This includes developing sociotechnical imaginaries, applying systems thinking, and producing deep research and solution concepts for systemic issues.'
    },
    create: {
      title: 'Create',
      description: 'The creation dimension focuses on execution and implementation. This includes building ventures, developing infrastructure, and creating tangible solutions that address systemic problems.'
    },
    humanFlourishing: {
      title: 'Human Flourishing',
      description: 'Engaging in the well-being economy while steering technological development towards human flourishing and unlocking human potential - helping individuals with personal success.'
    },
    systemicInfrastructure: {
      title: 'Systemic Infrastructure',
      description: 'Building the foundational systems and infrastructure that support innovation ecosystems and enable collective problem-solving at scale.'
    },
    innovation: {
      title: 'Innovation',
      description: 'Driving innovation through entrepreneurship, venture building, and creating the conditions for breakthrough solutions to emerge.'
    }
  }

  const handleTileClick = (tileData) => {
    setSelectedTile(tileData)
  }

  const handleCloseModal = () => {
    setSelectedTile(null)
  }

  const getCurrentText = () => {
    if (!selectedTile) {
      return textContent
    }

    if (selectedTile.colId === 'think') {
      return { ...textContent, ...textContent.think }
    }
    if (selectedTile.colId === 'create') {
      return { ...textContent, ...textContent.create }
    }
    if (selectedTile.rowId === 'HF') {
      return { ...textContent, ...textContent.humanFlourishing }
    }
    if (selectedTile.rowId === 'SI') {
      return { ...textContent, ...textContent.systemicInfrastructure }
    }
    if (selectedTile.rowId === 'INN') {
      return { ...textContent, ...textContent.innovation }
    }

    return textContent
  }

  const currentText = getCurrentText()

  return (
    <div className="matrix-2x2-view">
      <div className="matrix-2x2-view-content">
        {/* Left side - Text */}
        <div className="matrix-2x2-text-panel">
          <h2 className="matrix-2x2-text-title">{currentText.title}</h2>
          <p className="matrix-2x2-text-description">{currentText.description}</p>
          
          {selectedTile && (
            <div className="matrix-2x2-selected-info">
              <h3 className="matrix-2x2-selected-title">
                {selectedTile.rowName && selectedTile.colName 
                  ? `${selectedTile.rowName} × ${selectedTile.colName}`
                  : selectedTile.rowName || selectedTile.colName
                }
              </h3>
              <p className="matrix-2x2-selected-description">
                {selectedTile.colId === 'think' && currentText.think?.description}
                {selectedTile.colId === 'create' && currentText.create?.description}
                {selectedTile.rowId === 'HF' && currentText.humanFlourishing?.description}
                {selectedTile.rowId === 'SI' && currentText.systemicInfrastructure?.description}
                {selectedTile.rowId === 'INN' && currentText.innovation?.description}
              </p>
            </div>
          )}
        </div>

        {/* Right side - Matrix */}
        <div className="matrix-2x2-matrix-panel">
          <Matrix2x2 onTileClick={handleTileClick} />
        </div>
      </div>

      {/* Navigation button */}
      <div className="matrix-2x2-navigation">
        <button className="matrix-2x2-next-button" onClick={onNext}>
          Explore Detailed Matrix →
        </button>
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

export default Matrix2x2View
