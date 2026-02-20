import { guidedTourSections, textContent } from '../data/matrixData'
import './SidePanel.css'

const NUM_SECTIONS = guidedTourSections.length

const SidePanel = ({ showMatrixIntro, currentState, tourClosed, onContinue, onCloseTour }) => {
  if (showMatrixIntro) {
    const matrix = textContent.matrix
    return (
      <div className="side-panel">
        <div className="side-panel-content">
          <h2 className="side-panel-title">{matrix.title}</h2>
          <p className="side-panel-description">{matrix.description}</p>
          <button className="side-panel-continue" onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    )
  }

  if (tourClosed) {
    return (
      <div className="side-panel">
        <div className="side-panel-content">
          <h2 className="side-panel-title">The Matrix</h2>
          <p className="side-panel-description">
            A visual grid representation of the activities, organizations, and goals operating under the Humansys umbrella. Each cell maps an initiative to its mission arc and operating lab.
          </p>
        </div>
      </div>
    )
  }

  const currentSection = guidedTourSections[currentState] || null
  const isLastSection = currentState >= NUM_SECTIONS - 1

  return (
    <div className="side-panel">
      {currentSection && (
        <div className="side-panel-content">
          <h2 className="side-panel-title">{currentSection.title}</h2>
          <p className="side-panel-description">{currentSection.description}</p>
          {isLastSection ? (
            <button className="side-panel-continue" onClick={onCloseTour}>
              Close
            </button>
          ) : (
            <button className="side-panel-continue" onClick={onContinue}>
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default SidePanel
