import { studios, getArcsByStudio } from '../data/matrixData'
import './CapabilitiesGrid.css'

const CapabilitiesGrid = ({ onTileClick, scrollProgress }) => {
  // Calculate opacity - visible when scroll progress is in state 2 (capabilities)
  // Fade in from 0.66 to 1.0
  const state2Start = 0.66
  let opacity = 0
  if (scrollProgress >= state2Start) {
    const fadeInProgress = (scrollProgress - state2Start) / (1 - state2Start)
    opacity = Math.min(1, fadeInProgress)
  }

  // Studio colors
  const studioColors = {
    HF: {
      bg: '#8D2D55',
      border: '#D15C8D',
      text: '#212121'
    },
    ENT: {
      bg: '#206B35',
      border: '#4CA866',
      text: '#212121'
    }
  }

  return (
    <div 
      className="capabilities-grid-container"
      style={{ 
        opacity,
        pointerEvents: opacity > 0.5 ? 'auto' : 'none'
      }}
    >
      <div className="capabilities-grid-header">
        <h2 className="capabilities-title">Domains</h2>
      </div>
      <div className="capabilities-grid">
        {studios.map(studio => {
          const studioArcs = getArcsByStudio(studio.id)
          const colors = studioColors[studio.id] || studioColors.HF
          
          return (
            <div key={studio.id} className="capabilities-column">
              {/* Studio Header */}
              <div 
                className="capabilities-studio-header"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text
                }}
                onClick={() => onTileClick({ type: 'studio', id: studio.id })}
              >
                <div className="capabilities-studio-letter">{studio.abbreviation}</div>
                <div className="capabilities-studio-name">{studio.name}</div>
              </div>
              
              {/* ARC Capability Blocks */}
              {studioArcs.map(arc => (
                <div
                  key={arc.id}
                  className="capabilities-block"
                  style={{
                    borderColor: colors.border,
                    color: colors.border
                  }}
                  onClick={() => onTileClick({ type: 'arc', id: arc.id })}
                >
                  <div className="capabilities-block-id">{arc.abbreviation}</div>
                  <div className="capabilities-block-description">{arc.description}</div>
                </div>
              ))}
              
              {/* Empty placeholder blocks */}
              {Array.from({ length: Math.max(0, 6 - studioArcs.length) }).map((_, index) => (
                <div key={`empty-${index}`} className="capabilities-block-empty"></div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CapabilitiesGrid
