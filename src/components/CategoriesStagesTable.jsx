import './CategoriesStagesTable.css'

const CategoriesStagesTable = ({ onTileClick }) => {
  // Matrix structure - extract categories only
  const categories = [
    {
      category: 'HF',
      categoryName: 'Human Flourishing'
    },
    {
      category: 'SI',
      categoryName: 'Systemic Infrastructure'
    },
    {
      category: 'IV',
      categoryName: 'Innovation'
    }
  ]

  const stages = ['Think', 'Create']

  return (
    <div className="categories-stages-container">
      <div className="categories-stages-table">
        {/* Header Row */}
        <div className="categories-stages-header-row">
          <div className="categories-stages-cell categories-stages-header-cell categories-stages-corner-header">
            Category/Stage
          </div>
          {stages.map((stage) => (
            <div
              key={stage}
              className="categories-stages-cell categories-stages-header-cell categories-stages-stage-header"
              onClick={() => {
                if (onTileClick) {
                  onTileClick({
                    type: 'stage',
                    stage: stage.toLowerCase()
                  })
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {stage}
            </div>
          ))}
        </div>

        {/* Data Rows */}
        {categories.map((category) => (
          <div key={category.category} className="categories-stages-data-row">
            <div
              className="categories-stages-cell categories-stages-category-cell"
              onClick={() => {
                if (onTileClick) {
                  onTileClick({
                    type: 'category',
                    category: category.category,
                    categoryName: category.categoryName
                  })
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              {category.categoryName}
            </div>
            {stages.map((stage) => (
              <div
                key={`${category.category}-${stage}`}
                className="categories-stages-cell categories-stages-data-cell"
              >
                {/* Empty cells - just showing the structure */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesStagesTable
