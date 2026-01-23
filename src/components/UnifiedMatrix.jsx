import { useState } from 'react'
import './UnifiedMatrix.css'

const UnifiedMatrix = ({ onTileClick }) => {
  const [viewMode, setViewMode] = useState('projects') // 'categories', 'arcs', 'projects'

  // Matrix structure based on the image
  const matrixData = [
    {
      category: 'HF',
      categoryName: 'Human Flourishing',
      arcs: [
        {
          arcName: 'Argumentation Age',
          arcId: 'ARGAGE',
          think: {
            IMG: 'Argumentation Age',
            RI: { text: 'Life OS', link: 'https://vision-one.notion.site/Systematic-Venture-Building-Applied-on-HumanPotencial-Tech-2ebdcae724f0801d9388e558c8deb0c5?pvs=74' }
          },
          create: {
            VB: '',
            EaaS: '',
            SIE: { text: 'Journex, Journeybook, Sciencefit', link: 'https://quick-website-replic-344q.bolt.host/' }
          }
        },
        {
          arcName: '10X Capable World',
          arcId: '10X',
          think: {
            IMG: { text: 'Foundational Paper', link: 'https://ornate-sopapillas-9d5894.netlify.app/papers/foundational-papers/Foundational%20Paper-%2001v2.pdf' },
            RI: { text: 'Articels', link: 'https://project-change-log-t-fxu5.bolt.host/problemspace' }
          },
          create: {
            VB: '',
            EaaS: { text: 'Nexus Community', link: 'https://sweet-bienenstitch-54a41d.netlify.app/' },
            SIE: ''
          }
        }
      ]
    },
    {
      category: 'SI',
      categoryName: 'Systemic Infrastructure',
      arcs: [
        {
          arcName: 'Field Catalyst Human Potential Tech',
          arcId: 'FCHPT',
          think: {
            IMG: '',
            RI: { text: 'Field Map', link: 'https://interactive-hfpi-fie-vdip.bolt.host/' }
          },
          create: {
            VB: { text: 'Meta Institute', link: 'https://dynamic-bonbon-f19224.netlify.app/view/62019d85-dc44-487b-840a-6e676c20509e' },
            EaaS: '',
            SIE: ''
          }
        },
        {
          arcName: 'Digitalize and Connect Startup Ecosystems',
          arcId: 'DCSE',
          think: {
            IMG: '',
            RI: ''
          },
          create: {
            VB: '',
            EaaS: { text: 'Mission Impossible', link: 'https://vision-one.notion.site/Mission-Possible-Workshop-2f1dcae724f0801594d0c1076a1fa7fd?source=copy_link' },
            SIE: ''
          }
        }
      ]
    },
    {
      category: 'IV',
      categoryName: 'Innovation',
      arcs: [
        {
          arcName: 'Entrepreneurship Mainstream',
          arcId: 'ENTMAIN',
          think: {
            IMG: '',
            RI: ''
          },
          create: {
            VB: '',
            EaaS: { text: 'Ecosystem Research', link: '/research' },
            SIE: ''
          }
        },
        {
          arcName: '10X Startup Creation Process',
          arcId: '10XSTARTUP',
          think: {
            IMG: { text: 'Venture Creation Framework', link: 'https://ornate-sopapillas-9d5894.netlify.app/papers/visionary-papers/Visionary%20Paper%20%E2%80%93%20Simulation%E2%80%91driven%20Venture%20Creation%20Frameworkv2.pdf' },
            RI: ''
          },
          create: {
            VB: '',
            EaaS: '',
            SIE: ''
          }
        }
      ]
    }
  ]

  const labs = [
    { id: 'IMG', name: 'Imaginers', type: 'think' },
    { id: 'RI', name: 'Research Institute', type: 'think' },
    { id: 'VB', name: 'Venture Builder', type: 'create' },
    { id: 'EaaS', name: 'Ecosystem as a Service', type: 'create' },
    { id: 'SIE', name: 'System Innovation Engine', type: 'create' }
  ]

  const renderCellContent = (content, category, arcName, labId) => {
    if (!content) {
      return null
    }

    // Handle both string and object format
    const contentText = typeof content === 'string' ? content : content.text
    const contentLink = typeof content === 'object' ? content.link : null

    if (!contentText || contentText.trim() === '') {
      return null
    }

    if (viewMode === 'categories') {
      return null // Don't show content in categories mode
    }

    if (viewMode === 'arcs') {
      return null // Don't show content in arcs mode
    }

    // Projects mode - show the content
    return (
      <div 
        className="matrix-cell-content"
        onClick={(e) => {
          e.stopPropagation()
          if (onTileClick) {
            onTileClick({
              type: 'project',
              category,
              arcName,
              labId,
              content: contentText,
              link: contentLink
            })
          }
        }}
        style={{ pointerEvents: 'auto' }}
      >
        {contentText}
      </div>
    )
  }

  return (
    <div className="unified-matrix-container" data-view={viewMode}>
      {/* Matrix Table */}
      <div className="unified-matrix-table">
        {/* Header Row 1 */}
        <div className="matrix-header-row-1">
          <div className="matrix-cell matrix-header-cell matrix-corner-header">
            Category/Stage
          </div>
          <div className="matrix-cell matrix-header-cell matrix-empty-header"></div>
          <div 
            className="matrix-cell matrix-header-cell matrix-think-header" 
            colSpan={2}
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'stage',
                  stage: 'think'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Think
          </div>
          <div 
            className="matrix-cell matrix-header-cell matrix-create-header" 
            colSpan={3}
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'stage',
                  stage: 'create'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Create
          </div>
        </div>

        {/* Header Row 2 */}
        <div className="matrix-header-row-2">
          <div className="matrix-cell matrix-header-cell matrix-empty-header"></div>
          <div 
            className="matrix-cell matrix-header-cell matrix-corner-header"
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'arcs-labs',
                  title: 'Arcs/Labs'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Arcs/Labs
          </div>
          <div 
            className="matrix-cell matrix-header-cell matrix-lab-header"
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'lab',
                  id: 'IMG',
                  hasLink: true,
                  link: 'https://ornate-sopapillas-9d5894.netlify.app/'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Imaginers
          </div>
          <div 
            className="matrix-cell matrix-header-cell matrix-lab-header"
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'lab',
                  id: 'RI',
                  hasLink: true,
                  link: 'https://project-change-log-t-fxu5.bolt.host/framework'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Research Institute
          </div>
          <div 
            className="matrix-cell matrix-header-cell matrix-lab-header"
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'lab',
                  id: 'VB',
                  hasLink: true,
                  link: 'https://dynamic-bonbon-f19224.netlify.app/'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Venture Builder
          </div>
          <div 
            className="matrix-cell matrix-header-cell matrix-lab-header"
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'lab',
                  id: 'EaaS',
                  hasLink: true,
                  link: '/ecosystem-as-service'
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Ecosystem as a Service
          </div>
          <div 
            className="matrix-cell matrix-header-cell matrix-lab-header"
            onClick={() => {
              if (onTileClick) {
                onTileClick({
                  type: 'lab',
                  id: 'SIE',
                  hasLink: false
                })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            System Innovation Engine
          </div>
        </div>

        {/* Data Rows */}
        {matrixData.map((categoryData, categoryIndex) => (
          <div 
            key={`category-${categoryData.category}`} 
            className="matrix-category-group"
          >
            {categoryData.arcs.map((arc, arcIndex) => {
              const isFirstArcInCategory = arcIndex === 0
              
              return (
                <div key={`${categoryData.category}-${arcIndex}`} className="matrix-data-row">
                  {/* Category/Stage Cell - only on first row of category */}
                  {isFirstArcInCategory && (
                    <div 
                      className={`matrix-cell matrix-category-cell ${viewMode === 'categories' ? 'highlighted' : ''}`}
                      onClick={() => {
                        if (onTileClick) {
                          onTileClick({
                            type: 'category',
                            category: categoryData.category,
                            categoryName: categoryData.categoryName
                          })
                        }
                      }}
                    >
                      {categoryData.categoryName}
                    </div>
                  )}
                  {!isFirstArcInCategory && <div className="matrix-cell matrix-empty-cell"></div>}
                  
                  {/* Arcs/Labs Cell - arc name goes here (directly under empty header column) */}
                  <div 
                    className={`matrix-cell matrix-arc-cell ${viewMode === 'arcs' ? 'highlighted' : ''}`}
                    onClick={() => {
                      if (onTileClick) {
                        onTileClick({
                          type: 'arcs-labs',
                          category: categoryData.category,
                          arcName: arc.arcName,
                          arcId: arc.arcId
                        })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {viewMode === 'arcs' || viewMode === 'projects' ? arc.arcName : ''}
                  </div>

                {/* Think Cells */}
                <div 
                  className="matrix-cell matrix-data-cell matrix-think-cell"
                  onClick={(e) => {
                    // Check if click is on empty cell (not on project content)
                    const hasContent = arc.think.IMG && (typeof arc.think.IMG === 'string' ? arc.think.IMG.trim() !== '' : arc.think.IMG.text && arc.think.IMG.text.trim() !== '')
                    if (!hasContent) {
                      if (onTileClick) {
                        onTileClick({
                          type: 'lab',
                          id: 'IMG',
                          hasLink: true,
                          link: 'https://ornate-sopapillas-9d5894.netlify.app/'
                        })
                      }
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {renderCellContent(arc.think.IMG, categoryData.category, arc.arcName, 'IMG')}
                </div>
                <div 
                  className="matrix-cell matrix-data-cell matrix-think-cell"
                  onClick={(e) => {
                    const hasContent = arc.think.RI && (typeof arc.think.RI === 'string' ? arc.think.RI.trim() !== '' : arc.think.RI.text && arc.think.RI.text.trim() !== '')
                    if (!hasContent) {
                      if (onTileClick) {
                        onTileClick({
                          type: 'lab',
                          id: 'RI',
                          hasLink: true,
                          link: 'https://project-change-log-t-fxu5.bolt.host/framework'
                        })
                      }
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {renderCellContent(arc.think.RI, categoryData.category, arc.arcName, 'RI')}
                </div>

                {/* Create Cells */}
                <div 
                  className="matrix-cell matrix-data-cell matrix-create-cell"
                  onClick={(e) => {
                    const hasContent = arc.create.VB && (typeof arc.create.VB === 'string' ? arc.create.VB.trim() !== '' : arc.create.VB.text && arc.create.VB.text.trim() !== '')
                    if (!hasContent) {
                      if (onTileClick) {
                        onTileClick({
                          type: 'lab',
                          id: 'VB',
                          hasLink: true,
                          link: 'https://dynamic-bonbon-f19224.netlify.app/'
                        })
                      }
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {renderCellContent(arc.create.VB, categoryData.category, arc.arcName, 'VB')}
                </div>
                <div 
                  className="matrix-cell matrix-data-cell matrix-create-cell"
                  onClick={(e) => {
                    const hasContent = arc.create.EaaS && (typeof arc.create.EaaS === 'string' ? arc.create.EaaS.trim() !== '' : arc.create.EaaS.text && arc.create.EaaS.text.trim() !== '')
                    if (!hasContent) {
                      if (onTileClick) {
                        onTileClick({
                          type: 'lab',
                          id: 'EaaS',
                          hasLink: true,
                          link: '/ecosystem-as-service'
                        })
                      }
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {renderCellContent(arc.create.EaaS, categoryData.category, arc.arcName, 'EaaS')}
                </div>
                <div 
                  className="matrix-cell matrix-data-cell matrix-create-cell"
                  onClick={(e) => {
                    const hasContent = arc.create.SIE && (typeof arc.create.SIE === 'string' ? arc.create.SIE.trim() !== '' : arc.create.SIE.text && arc.create.SIE.text.trim() !== '')
                    if (!hasContent) {
                      if (onTileClick) {
                        onTileClick({
                          type: 'lab',
                          id: 'SIE',
                          hasLink: false
                        })
                      }
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {renderCellContent(arc.create.SIE, categoryData.category, arc.arcName, 'SIE')}
                </div>
              </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnifiedMatrix
