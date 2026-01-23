import { useEffect } from 'react'
import { getArcById, getLabById, getStudioById, getProjectById } from '../data/matrixData'
import { getProjectDescription } from '../data/projectData'
import './TileModal.css'

const TileModal = ({ tileData, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!tileData) return null

  const { type, id, relatedItems } = tileData

  let title = ''
  let abbreviation = ''
  let description = ''
  let additionalInfo = null
  let link = null
  let hasLink = false

  // Get data based on tile type
  switch (type) {
    case 'category':
      title = tileData.categoryName || 'Category'
      abbreviation = tileData.category || ''
      if (tileData.category === 'HF' || tileData.categoryName === 'Human Flourishing') {
        description = 'We operate in the categories of human flourishing, which includes edge detection, systemic infrastructure, meta systems, collective problem solving, a social support layer under systemic infrastructure, and innovation (previously entrepreneurship).'
      } else if (tileData.category === 'IV' || tileData.categoryName === 'Innovation') {
        description = 'Innovation encompasses our work in mainstreaming entrepreneurship and making venture creation accessible to everyone. This category includes research initiatives focused on ecosystem integration strategies for next-generation venture builders.'
      } else if (tileData.category === 'SI' || tileData.categoryName === 'Systemic Infrastructure') {
        description = 'Systemic Infrastructure represents the foundational systems and structures that enable our work. This includes field catalysts, digitalization of startup ecosystems, and the infrastructure needed to support innovation and human flourishing.'
      } else {
        description = `Category: ${tileData.categoryName || tileData.category}`
      }
      break
    case 'stage':
      if (tileData.stage === 'think') {
        title = 'Think'
        description = 'The activities of theoretical solutionism and problem understanding and analysis.'
      } else if (tileData.stage === 'create') {
        title = 'Create'
        description = 'The activities of executing on solutions.'
      } else {
        title = tileData.stage || 'Stage'
        description = `Stage: ${tileData.stage}`
      }
      break
    case 'arcs-labs':
      title = tileData.title || tileData.arcName || 'Arcs/Labs'
      abbreviation = tileData.arcId || ''
      description = ''
      // This will be handled specially in the render section
      break
    case 'arc':
      // Try to get arc by id first, then by name if id not found
      let arc = id ? getArcById(id) : null
      if (!arc && tileData.arcId) {
        arc = getArcById(tileData.arcId)
      }
      if (!arc && tileData.arcName) {
        // Find arc by name
        const allArcs = require('../data/matrixData').arcs
        arc = allArcs.find(a => a.name === tileData.arcName || a.abbreviation === tileData.arcName)
      }
      if (arc) {
        title = arc.name
        abbreviation = arc.abbreviation
        description = arc.description
        const studio = getStudioById(arc.studioId)
        if (studio) {
          additionalInfo = { label: 'Studio', value: studio.name }
        }
      }
      break
    case 'lab':
      const lab = getLabById(id)
      if (lab) {
        title = lab.name
        abbreviation = lab.abbreviation
        description = lab.description
        additionalInfo = { label: 'Overcategory', value: lab.overcategory }
        // Get link from tileData if provided
        if (tileData.hasLink && tileData.link) {
          hasLink = true
          link = tileData.link
        } else if (lab.link) {
          hasLink = true
          link = lab.link
        }
      }
      break
    case 'studio':
      const studio = getStudioById(id)
      if (studio) {
        title = studio.name
        abbreviation = studio.abbreviation
        description = studio.purpose
      }
      break
    case 'intersection':
      if (relatedItems) {
        const arc = getArcById(relatedItems.arcId)
        const lab = getLabById(relatedItems.labId)
        const studio = relatedItems.studioId ? getStudioById(relatedItems.studioId) : null
        const project = relatedItems.projectId ? getProjectById(relatedItems.projectId) : null

        title = project ? project.name : 'Intersection'
        abbreviation = `${arc?.abbreviation || ''} + ${lab?.abbreviation || ''}`
        description = `This intersection represents the collaboration between ${arc?.name || 'ARC'} and ${lab?.name || 'Lab'}.`
        
        if (project) {
          description += ` The project "${project.name}" is part of this intersection.`
        }
        if (studio) {
          description += ` This work is part of the ${studio.name} studio.`
        }
      }
      break
    case 'project':
      const projectInfo = getProjectDescription(tileData.content || '')
      title = projectInfo.title || tileData.content || 'Project'
      abbreviation = tileData.labId || ''
      description = projectInfo.description || `Project: ${tileData.content}`
      if (tileData.arcName) {
        description += `\n\nPart of ARC: ${tileData.arcName}`
      }
      if (tileData.category) {
        description += `\n\nCategory: ${tileData.category}`
      }
      // Use link from projectInfo or tileData
      if (projectInfo.link && projectInfo.link !== 'get url' && projectInfo.link !== 'research page') {
        hasLink = true
        link = projectInfo.link
      } else if (tileData.link && tileData.link !== 'get url' && tileData.link !== 'research page') {
        hasLink = true
        link = tileData.link
      }
      break
    case 'matrix2x2':
      if (tileData.rowName && tileData.colName) {
        title = `${tileData.rowName} × ${tileData.colName}`
        abbreviation = `${tileData.rowId || ''} × ${tileData.colId || ''}`
        description = `This intersection represents the collaboration between ${tileData.rowName} and ${tileData.colName}.`
      } else if (tileData.rowName) {
        title = tileData.rowName
        abbreviation = tileData.rowId
        description = `Focus area: ${tileData.rowName}`
      } else if (tileData.colName) {
        title = tileData.colName
        abbreviation = tileData.colId
        description = `Approach: ${tileData.colName}`
      }
      break
    default:
      break
  }

  return (
    <div className="tile-modal-overlay" onClick={onClose}>
      <div className="tile-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="tile-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        
        {/* Left Panel - Logo/Title and Links */}
        <div className="tile-modal-left-panel">
          <div className="tile-modal-logo-section">
            <div className="tile-modal-logo-placeholder"></div>
            <h2 className="tile-modal-title-left">{title}</h2>
          </div>
          {hasLink && link && (
            <div className="tile-modal-links-section">
              <h3 className="tile-modal-links-heading">LINKS</h3>
              <a
                href={link}
                target={link.startsWith('/') ? '_self' : '_blank'}
                rel={link.startsWith('/') ? '' : 'noopener noreferrer'}
                className="tile-modal-link-item"
                onClick={(e) => {
                  if (link.startsWith('/')) {
                    e.preventDefault()
                    window.location.href = link
                  }
                }}
              >
                Website ↗
              </a>
            </div>
          )}
        </div>

        {/* Right Panel - Description */}
        <div className="tile-modal-right-panel">
          <h2 className="tile-modal-title-right">{title}</h2>
          {abbreviation && (
            <span className="tile-modal-abbreviation">{abbreviation}</span>
          )}
          {additionalInfo && (
            <div className="tile-modal-info">
              <strong>{additionalInfo.label}:</strong> {additionalInfo.value}
            </div>
          )}
          <div className="tile-modal-description">
            {type === 'arcs-labs' ? (
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Arcs</h3>
                  <p>Impact goals aimed at our categories achieved by projects and initiatives of our labs.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Labs</h3>
                  <p>Soft organizations. The function has systems the company is made of, covering the whole problem-solution process.</p>
                </div>
              </div>
            ) : (
              <p>{description}</p>
            )}
          </div>
          {relatedItems && type === 'intersection' && (
            <div className="tile-modal-related">
              <h3>Related Items</h3>
              <ul>
                {relatedItems.arcId && (
                  <li>ARC: {getArcById(relatedItems.arcId)?.name}</li>
                )}
                {relatedItems.labId && (
                  <li>Lab: {getLabById(relatedItems.labId)?.name}</li>
                )}
                {relatedItems.studioId && (
                  <li>Studio: {getStudioById(relatedItems.studioId)?.name}</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TileModal
