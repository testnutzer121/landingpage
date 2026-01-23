import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import './App.css'

// Lazy load the TypeScript page components
const EcosystemAsServicePage = React.lazy(() => import('./pages/EcosystemAsServicePage.tsx'))
const ResearchPage = React.lazy(() => import('./pages/Research System/ResearchPage.tsx'))
const PublicationsPage = React.lazy(() => import('./pages/Research System/PublicationsPage.tsx'))
const ResearchHowWeWorkPage = React.lazy(() => import('./pages/Research System/ResearchHowWeWorkPage.tsx'))

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ecosystem-as-service" element={<EcosystemAsServicePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/resources/research/publications" element={<PublicationsPage />} />
            <Route path="/resources/research/how-we-work" element={<ResearchHowWeWorkPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
