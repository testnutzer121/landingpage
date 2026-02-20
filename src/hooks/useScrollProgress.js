import { useState, useEffect, useRef } from 'react'

const NUM_SECTIONS = 5

/**
 * Custom hook to track scroll progress through the matrix section
 * Divides scroll into 5 states: Stages (0), Categories (1), ARCs (2), Labs (3), Projects (4)
 */
export const useScrollProgress = (containerRef) => {
  const [progress, setProgress] = useState(0)
  const [currentState, setCurrentState] = useState(0)
  const [stateProgress, setStateProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

      setProgress(scrollProgress)

      const segmentSize = 1 / NUM_SECTIONS
      const newState = Math.min(NUM_SECTIONS - 1, Math.floor(scrollProgress / segmentSize))
      setCurrentState(newState)

      const stateStart = newState * segmentSize
      const stateEnd = (newState + 1) * segmentSize
      const stateProgressValue = newState < NUM_SECTIONS - 1
        ? (scrollProgress - stateStart) / (stateEnd - stateStart)
        : 1
      setStateProgress(Math.max(0, Math.min(1, stateProgressValue)))
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [containerRef])

  return {
    progress,
    currentState,
    stateProgress
  }
}

export default useScrollProgress
