import './ArcsLabsTable.css'

const ArcsLabsTable = ({ onTileClick }) => {
  // Matrix structure - extract all arcs
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

  // Flatten all arcs into a single array
  const allArcs = matrixData.flatMap(category => 
    category.arcs.map(arc => ({
      ...arc,
      category: category.category,
      categoryName: category.categoryName
    }))
  )

  // Labs in order: Think labs first, then Create labs
  const labs = [
    { id: 'IMG', name: 'Imaginers', type: 'think', link: 'https://ornate-sopapillas-9d5894.netlify.app/' },
    { id: 'RI', name: 'Research Institute', type: 'think', link: 'https://project-change-log-t-fxu5.bolt.host/framework' },
    { id: 'VB', name: 'Venture Builder', type: 'create', link: 'https://dynamic-bonbon-f19224.netlify.app/' },
    { id: 'EaaS', name: 'Ecosystem as a Service', type: 'create', link: '/ecosystem-as-service' },
    { id: 'SIE', name: 'System Innovation Engine', type: 'create', link: '/system-innovation-engine' }
  ]

  const renderCellContent = (content, arc, labId) => {
    if (!content) {
      return null
    }

    // Handle both string and object format
    const contentText = typeof content === 'string' ? content : content.text
    const contentLink = typeof content === 'object' ? content.link : null

    if (!contentText || contentText.trim() === '') {
      return null
    }

    return (
      <div 
        className="arcs-labs-cell-content"
        onClick={(e) => {
          e.stopPropagation()
          if (onTileClick) {
            onTileClick({
              type: 'project',
              category: arc.category,
              arcName: arc.arcName,
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

  const getCellContent = (arc, labId) => {
    if (labId === 'IMG' || labId === 'RI') {
      return arc.think[labId]
    } else {
      return arc.create[labId]
    }
  }

  return (
    <div className="arcs-labs-container">
      <div className="arcs-labs-table">
        {/* Header Row */}
        <div className="arcs-labs-header-row">
          <div className="arcs-labs-cell arcs-labs-header-cell arcs-labs-corner-header">
            Arcs/Labs
          </div>
          {labs.map((lab) => (
            <div
              key={lab.id}
              className={`arcs-labs-cell arcs-labs-header-cell arcs-labs-lab-header ${lab.type === 'think' ? 'arcs-labs-think-header' : 'arcs-labs-create-header'}`}
              onClick={() => {
                if (onTileClick) {
                  onTileClick({
                    type: 'lab',
                    id: lab.id,
                    hasLink: !!lab.link,
                    link: lab.link
                  })
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {lab.name}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {allArcs.map((arc) => (
          <div key={arc.arcId} className="arcs-labs-data-row">
            <div
              className="arcs-labs-cell arcs-labs-arc-cell"
              onClick={() => {
                if (onTileClick) {
                  onTileClick({
                    type: 'arcs-labs',
                    category: arc.category,
                    arcName: arc.arcName,
                    arcId: arc.arcId
                  })
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {arc.arcName}
            </div>
            {labs.map((lab) => {
              const content = getCellContent(arc, lab.id)
              return (
                <div
                  key={`${arc.arcId}-${lab.id}`}
                  className={`arcs-labs-cell arcs-labs-data-cell ${lab.type === 'think' ? 'arcs-labs-think-cell' : 'arcs-labs-create-cell'}`}
                  onClick={(e) => {
                    const hasContent = content && (typeof content === 'string' ? content.trim() !== '' : content.text && content.text.trim() !== '')
                    if (!hasContent) {
                      if (onTileClick) {
                        onTileClick({
                          type: 'lab',
                          id: lab.id,
                          hasLink: !!lab.link,
                          link: lab.link
                        })
                      }
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {renderCellContent(content, arc, lab.id)}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArcsLabsTable
