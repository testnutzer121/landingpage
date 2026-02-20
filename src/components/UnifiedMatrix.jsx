import './UnifiedMatrix.css'

const UnifiedMatrix = ({ onTileClick, highlightMode }) => {

  // Matrix structure
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
            RI: { text: 'Life OS', link: 'https://venturebuilder.humansys.xyz/' }
          },
          create: {
            VB: { text: 'Journex, Journeybook, Sciencefit', link: 'https://pipeline.humansys.xyz/' },
            EaaS: '',
            SIE: ''
          }
        },
        {
          arcName: '10X Capable World',
          arcId: '10X',
          think: {
            IMG: { text: 'Foundational Paper', link: 'https://ornate-sopapillas-9d5894.netlify.app/papers/foundational-papers/Foundational%20Paper-%2001v2.pdf' },
            RI: { text: 'Articels', link: 'https://humansys.substack.com/t/debate' }
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
            VB: { text: 'Meta Institute', link: 'https://venturebuilder.humansys.xyz/' },
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

  const renderCellContent = (content, categoryName, arcName, labId) => {
    if (!content) return null

    const contentText = typeof content === 'string' ? content : content.text
    const contentLink = typeof content === 'object' ? content.link : null

    if (!contentText || contentText.trim() === '') return null

    return (
      <div
        className="matrix-cell-content"
        onClick={(e) => {
          e.stopPropagation()
          if (onTileClick) {
            onTileClick({
              type: 'project',
              categoryName,
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
    <div className="unified-matrix-container" data-highlight={highlightMode || 'none'}>
      <div className="unified-matrix-table">
        {/* Header Row 1: Categories/Stages + Think + Create */}
        <div className="matrix-header-row-1">
          <div className="matrix-cell matrix-header-cell matrix-corner-header">
            Categories / Stages
          </div>
          <div className="matrix-cell matrix-header-cell matrix-empty-header"></div>
          <div
            className={`matrix-cell matrix-header-cell matrix-stage-header ${highlightMode === 'stages' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'stage', stage: 'think' })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Think
          </div>
          <div
            className={`matrix-cell matrix-header-cell matrix-stage-header ${highlightMode === 'stages' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'stage', stage: 'create' })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Create
          </div>
        </div>

        {/* Header Row 2: Arcs/Labs + 5 lab names */}
        <div className="matrix-header-row-2">
          <div className="matrix-cell matrix-header-cell matrix-empty-header"></div>
          <div className="matrix-cell matrix-header-cell matrix-corner-header">
            Arcs / Labs
          </div>
          <div
            className={`matrix-cell matrix-header-cell matrix-lab-header ${highlightMode === 'labs' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'lab', id: 'IMG', hasLink: true, link: 'https://ornate-sopapillas-9d5894.netlify.app/' })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Imaginers
          </div>
          <div
            className={`matrix-cell matrix-header-cell matrix-lab-header ${highlightMode === 'labs' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'lab', id: 'RI', hasLink: true, link: 'https://humansys.substack.com/' })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Research Institute
          </div>
          <div
            className={`matrix-cell matrix-header-cell matrix-lab-header ${highlightMode === 'labs' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'lab', id: 'VB', hasLink: true, link: 'https://venturebuilder.humansys.xyz/' })
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Venture Builder
          </div>
          <div
            className={`matrix-cell matrix-header-cell matrix-lab-header ${highlightMode === 'labs' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'lab', id: 'EaaS', hasLink: true, link: '/ecosystem-as-service' })
              }
            }}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            Ecosystem as a Service
            <span className="lab-year-badge">2027</span>
          </div>
          <div
            className={`matrix-cell matrix-header-cell matrix-lab-header ${highlightMode === 'labs' ? 'highlight-orange' : ''}`}
            onClick={() => {
              if (onTileClick) {
                onTileClick({ type: 'lab', id: 'SIE', hasLink: true, link: '/system-innovation-engine' })
              }
            }}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            System Innovation Engine
            <span className="lab-year-badge">2028</span>
          </div>
        </div>

        {/* Data Rows */}
        {matrixData.map((categoryData) => (
          <div
            key={`category-${categoryData.category}`}
            className="matrix-category-group"
          >
            {categoryData.arcs.map((arc, arcIndex) => {
              const isFirstArcInCategory = arcIndex === 0
              return (
                <div key={`${categoryData.category}-${arcIndex}`} className="matrix-data-row">
                  {/* Category Cell */}
                  {isFirstArcInCategory && (
                    <div
                      className={`matrix-cell matrix-category-cell ${highlightMode === 'categories' ? 'highlight-orange' : ''}`}
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

                  {/* Arc Cell — name + tagline */}
                  <div
                    className={`matrix-cell matrix-arc-cell ${highlightMode === 'arcs' ? 'highlight-orange' : ''}`}
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
                    {arc.arcName}
                  </div>

                  {/* Think Cells */}
                  <div
                    className={`matrix-cell matrix-data-cell matrix-think-cell ${highlightMode === 'projects' ? 'highlight-orange' : ''}`}
                    onClick={() => {
                      const hasContent = arc.think.IMG && (typeof arc.think.IMG === 'string' ? arc.think.IMG.trim() !== '' : arc.think.IMG.text && arc.think.IMG.text.trim() !== '')
                      if (!hasContent && onTileClick) {
                        onTileClick({ type: 'lab', id: 'IMG', hasLink: true, link: 'https://ornate-sopapillas-9d5894.netlify.app/' })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {renderCellContent(arc.think.IMG, categoryData.categoryName, arc.arcName, 'IMG')}
                  </div>
                  <div
                    className={`matrix-cell matrix-data-cell matrix-think-cell ${highlightMode === 'projects' ? 'highlight-orange' : ''}`}
                    onClick={() => {
                      const hasContent = arc.think.RI && (typeof arc.think.RI === 'string' ? arc.think.RI.trim() !== '' : arc.think.RI.text && arc.think.RI.text.trim() !== '')
                      if (!hasContent && onTileClick) {
                        onTileClick({ type: 'lab', id: 'RI', hasLink: true, link: 'https://humansys.substack.com/' })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {renderCellContent(arc.think.RI, categoryData.categoryName, arc.arcName, 'RI')}
                  </div>

                  {/* Create Cells */}
                  <div
                    className={`matrix-cell matrix-data-cell matrix-create-cell ${highlightMode === 'projects' ? 'highlight-orange' : ''}`}
                    onClick={() => {
                      const hasContent = arc.create.VB && (typeof arc.create.VB === 'string' ? arc.create.VB.trim() !== '' : arc.create.VB.text && arc.create.VB.text.trim() !== '')
                      if (!hasContent && onTileClick) {
                        onTileClick({ type: 'lab', id: 'VB', hasLink: true, link: 'https://venturebuilder.humansys.xyz/' })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {renderCellContent(arc.create.VB, categoryData.categoryName, arc.arcName, 'VB')}
                  </div>
                  <div
                    className={`matrix-cell matrix-data-cell matrix-create-cell ${highlightMode === 'projects' ? 'highlight-orange' : ''}`}
                    onClick={() => {
                      const hasContent = arc.create.EaaS && (typeof arc.create.EaaS === 'string' ? arc.create.EaaS.trim() !== '' : arc.create.EaaS.text && arc.create.EaaS.text.trim() !== '')
                      if (!hasContent && onTileClick) {
                        onTileClick({ type: 'lab', id: 'EaaS', hasLink: true, link: '/ecosystem-as-service' })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {renderCellContent(arc.create.EaaS, categoryData.categoryName, arc.arcName, 'EaaS')}
                  </div>
                  <div
                    className={`matrix-cell matrix-data-cell matrix-create-cell ${highlightMode === 'projects' ? 'highlight-orange' : ''}`}
                    onClick={() => {
                      const hasContent = arc.create.SIE && (typeof arc.create.SIE === 'string' ? arc.create.SIE.trim() !== '' : arc.create.SIE.text && arc.create.SIE.text.trim() !== '')
                      if (!hasContent && onTileClick) {
                        onTileClick({ type: 'lab', id: 'SIE', hasLink: true, link: '/system-innovation-engine' })
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {renderCellContent(arc.create.SIE, categoryData.categoryName, arc.arcName, 'SIE')}
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
