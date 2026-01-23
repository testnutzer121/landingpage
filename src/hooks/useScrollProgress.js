import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to track scroll progress through the matrix section
 * Divides scroll into 3 states: Matrix (0), Intersections (1), Capabilities (2)
 */
export const useScrollProgress = (containerRef) => {
  const [progress, setProgress] = useState(0)
  const [currentState, setCurrentState] = useState(0) // 0: Matrix, 1: Intersections, 2: Capabilities
  const [stateProgress, setStateProgress] = useState(0) // Progress within current state (0-1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      
      setProgress(scrollProgress)

      // Divide into 3 equal segments
      const segmentSize = 1 / 3
      const newState = Math.min(2, Math.floor(scrollProgress / segmentSize))
      setCurrentState(newState)

      // Calculate progress within current state
      const stateStart = newState * segmentSize
      const stateEnd = (newState + 1) * segmentSize
      const stateProgressValue = newState < 2 
        ? (scrollProgress - stateStart) / (stateEnd - stateStart)
        : 1
      setStateProgress(Math.max(0, Math.min(1, stateProgressValue)))
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [containerRef])

  return {
    progress, // Overall progress 0-1
    currentState, // 0, 1, or 2
    stateProgress // Progress within current state 0-1
  }
}

export default useScrollProgress
