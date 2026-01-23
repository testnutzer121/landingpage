import { arcs, labs, studios, intersections, getLabById } from '../data/matrixData'
import './IntersectionsGrid.css'

const IntersectionsGrid = ({ onTileClick, scrollProgress }) => {
  // Calculate opacity - visible when scroll progress is in state 1 (intersections)
  // Fade in from 0.33 to 0.66, fade out from 0.66 to 1.0
  const state1Start = 0.33
  const state1End = 0.66
  const state2Start = 0.66
  
  let opacity = 0
  if (scrollProgress >= state1Start && scrollProgress <= state1End) {
    opacity = 1
  } else if (scrollProgress > state1End && scrollProgress < state2Start + 0.1) {
    // Fade out as transitioning to capabilities
    opacity = 1 - ((scrollProgress - state1End) / 0.1)
  } else if (scrollProgress < state1Start) {
    // Fade in from matrix
    opacity = (scrollProgress - (state1Start - 0.1)) / 0.1
    opacity = Math.max(0, Math.min(1, opacity))
  }

  // Find intersection for a given arc and lab
  const findIntersection = (arcId, labId) => {
    return intersections.find(
      i => i.arcId === arcId && i.labId === labId
    )
  }

  return (
    <div 
      className="intersections-grid-container"
      style={{ 
        opacity,
        pointerEvents: opacity > 0.5 ? 'auto' : 'none'
      }}
    >
      <div className="intersections-grid">
        {/* Header row with Labs */}
        <div className="intersections-grid-header">
          <div className="intersections-grid-cell intersections-header-cell"></div>
          {labs.map(lab => (
            <div 
              key={lab.id}
              className="intersections-grid-cell intersections-header-cell intersections-lab-header"
              onClick={() => {
                // Always show modal first for labs
                onTileClick({ type: 'lab', id: lab.id, hasLink: !!lab.link, link: lab.link })
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="intersections-cell-abbrev">{lab.abbreviation}</div>
              <div className="intersections-cell-name">{lab.name}</div>
            </div>
          ))}
        </div>
        
        {/* Rows with ARCs */}
        {arcs.map(arc => (
          <div key={arc.id} className="intersections-grid-row">
            <div 
              className="intersections-grid-cell intersections-header-cell intersections-arc-header"
              onClick={() => onTileClick({ type: 'arc', id: arc.id })}
            >
              <div className="intersections-cell-abbrev">{arc.abbreviation}</div>
              <div className="intersections-cell-name">{arc.name}</div>
            </div>
            {labs.map(lab => {
              const intersection = findIntersection(arc.id, lab.id)
              const hasIntersection = !!intersection
              
              return (
                <div 
                  key={`${arc.id}-${lab.id}`}
                  className={`intersections-grid-cell intersections-data-cell ${hasIntersection ? 'has-intersection' : ''}`}
                  onClick={() => onTileClick({ 
                    type: hasIntersection ? 'intersection' : 'empty',
                    id: `${arc.id}-${lab.id}`,
                    relatedItems: intersection ? {
                      arcId: arc.id,
                      labId: lab.id,
                      studioId: intersection.studioId,
                      projectId: intersection.projectId
                    } : { arcId: arc.id, labId: lab.id }
                  })}
                >
                  {intersection && (
                    <div className="intersection-content">
                      {intersection.projectName && (
                        <div className="intersection-project">{intersection.projectName}</div>
                      )}
                      <div className="intersection-label">
                        {arc.abbreviation}<sup>A</sup> + {lab.abbreviation}<sup>L</sup>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default IntersectionsGrid
