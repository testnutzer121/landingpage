import { textContent } from '../data/matrixData'
import './SidePanel.css'

const SidePanel = ({ currentState, stateProgress }) => {
  const getTextForState = (state) => {
    switch (state) {
      case 0:
        return null // No text for matrix state
      case 1:
        return textContent.intersections
      case 2:
        return textContent.capabilities
      default:
        return null
    }
  }

  const currentText = getTextForState(currentState)
  const nextText = currentState < 2 ? getTextForState(currentState + 1) : null

  // Calculate opacity for current and next text based on state progress
  const currentOpacity = currentState < 2 ? 1 - stateProgress : 1
  const nextOpacity = nextText ? stateProgress : 0

  // Don't render anything if there's no text to show
  if (!currentText && !nextText) {
    return null
  }

  return (
    <div className="side-panel">
      {currentText && (
        <div 
          className="side-panel-content"
          style={{ opacity: currentOpacity }}
        >
          <h2 className="side-panel-title">{currentText.title}</h2>
          <p className="side-panel-description">{currentText.description}</p>
        </div>
      )}
      {nextText && (
        <div 
          className="side-panel-content side-panel-next"
          style={{ opacity: nextOpacity }}
        >
          <h2 className="side-panel-title">{nextText.title}</h2>
          <p className="side-panel-description">{nextText.description}</p>
        </div>
      )}
    </div>
  )
}

export default SidePanel
