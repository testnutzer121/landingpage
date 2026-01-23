import { useState } from 'react'
import './Matrix2x2.css'

const Matrix2x2 = ({ onTileClick }) => {
  const [selectedCell, setSelectedCell] = useState(null)

  // Matrix structure:
  // Top row: Think, Create (right to left)
  // Side column: Human Flourishing, Systemic Infrastructure, Innovation (top to bottom)
  
  const rows = [
    { id: 'HF', name: 'Human Flourishing' },
    { id: 'SI', name: 'Systemic Infrastructure' },
    { id: 'INN', name: 'Innovation' }
  ]

  const columns = [
    { id: 'create', name: 'Create' }, // Left
    { id: 'think', name: 'Think' }   // Right (right to left order)
  ]

  const handleCellClick = (rowId, colId) => {
    const cellData = {
      type: 'matrix2x2',
      rowId,
      colId,
      rowName: rows.find(r => r.id === rowId)?.name,
      colName: columns.find(c => c.id === colId)?.name
    }
    setSelectedCell(cellData)
    if (onTileClick) {
      onTileClick(cellData)
    }
  }

  return (
    <div className="matrix-2x2-container">
      <div className="matrix-2x2-grid">
        {/* Empty top-left corner */}
        <div className="matrix-2x2-cell matrix-2x2-corner"></div>
        
        {/* Column headers (Think, Create) - right to left */}
        {columns.map(col => (
          <div 
            key={col.id}
            className="matrix-2x2-cell matrix-2x2-header matrix-2x2-col-header"
            onClick={() => handleCellClick(null, col.id)}
          >
            <div className="matrix-2x2-header-text">{col.name}</div>
          </div>
        ))}
        
        {/* Rows with row headers and cells */}
        {rows.map(row => (
          <div key={row.id} className="matrix-2x2-row">
            {/* Row header */}
            <div 
              className="matrix-2x2-cell matrix-2x2-header matrix-2x2-row-header"
              onClick={() => handleCellClick(row.id, null)}
            >
              <div className="matrix-2x2-header-text">{row.name}</div>
            </div>
            
            {/* Cells for this row */}
            {columns.map(col => (
              <div
                key={`${row.id}-${col.id}`}
                className={`matrix-2x2-cell matrix-2x2-data-cell ${
                  selectedCell?.rowId === row.id && selectedCell?.colId === col.id ? 'selected' : ''
                }`}
                onClick={() => handleCellClick(row.id, col.id)}
              >
                {/* Cell content - can be customized */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Matrix2x2
