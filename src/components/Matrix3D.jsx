import { useState, useEffect } from 'react'
import { arcs, labs, studios, getLabById } from '../data/matrixData'
import './Matrix3D.css'

const Matrix3D = ({ onTileClick, scrollProgress }) => {
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920)

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Calculate transform based on scroll progress
  // At progress 0, top-down view (no rotation). At progress 1, transitioning to flat
  // Matrix is now 3x larger (2568px), scale to fit 80% of viewport
  const rotationX = 0 // Start with top-down view (no rotation)
  const rotationZ = 0 // Start with top-down view (no rotation)
  const targetWidth = viewportWidth * 0.8
  const fitScale = targetWidth / 2568 // Scale to fit 80% of viewport
  const baseScale = fitScale * 0.8 // Start at 80% of fit scale
  const scale = baseScale + (scrollProgress * fitScale * 0.2) // Animate to 100% of fit scale
  const translateX = 0 // No translation for top-down view
  const translateY = scrollProgress * 50 * 3 // 3x for larger matrix

  const transform = `rotateX(${rotationX}deg) rotateY(0deg) rotateZ(${rotationZ}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`
  const opacity = 1 - scrollProgress

  return (
    <div 
      className="matrix-3d-container"
      style={{ 
        transform,
        opacity,
        pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
      }}
    >
      {/* Top Layer: ARCs x Labs Grid */}
      <div className="matrix-layer matrix-top-layer">
        <div className="matrix-grid">
          {/* Header row with Labs */}
          <div className="matrix-grid-header">
            <div className="matrix-grid-cell matrix-header-cell"></div>
              {labs.map(lab => (
              <div 
                key={lab.id}
                className="matrix-grid-cell matrix-header-cell matrix-lab-header"
                onClick={() => {
                  // Always show modal first for labs
                  onTileClick({ type: 'lab', id: lab.id, hasLink: !!lab.link, link: lab.link })
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="matrix-cell-abbrev">{lab.abbreviation}</div>
                <div className="matrix-cell-name">{lab.name}</div>
              </div>
            ))}
          </div>
          
          {/* Rows with ARCs */}
          {arcs.map(arc => (
            <div key={arc.id} className="matrix-grid-row">
              <div 
                className="matrix-grid-cell matrix-header-cell matrix-arc-header"
                onClick={() => onTileClick({ type: 'arc', id: arc.id })}
              >
                <div className="matrix-cell-abbrev">{arc.abbreviation}</div>
                <div className="matrix-cell-name">{arc.name}</div>
              </div>
              {labs.map(lab => (
                <div 
                  key={`${arc.id}-${lab.id}`}
                  className="matrix-grid-cell matrix-data-cell"
                  onClick={() => onTileClick({ 
                    type: 'intersection', 
                    id: `${arc.id}-${lab.id}`,
                    relatedItems: { arcId: arc.id, labId: lab.id }
                  })}
                >
                  {/* Empty cell for now - intersections will be shown in IntersectionsGrid */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Layer: Overcategories */}
      <div className="matrix-layer matrix-bottom-layer">
        <div className="overcategories-layer">
          <div className="overcategory-tile">Creation</div>
          <div className="overcategory-tile">Execution</div>
        </div>
      </div>
    </div>
  )
}

export default Matrix3D
