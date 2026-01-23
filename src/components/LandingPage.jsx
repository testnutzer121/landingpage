import { useRef } from 'react'
import MatrixSection from './MatrixSection'
import './LandingPage.css'
import logoImage from '../images/logo.png'

const LandingPage = () => {
  const economicOptionsRef = useRef(null)
  const matrixRef = useRef(null)
  const paradigmsRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="landing-nav">
        <div className="nav-content">
          <a 
            href="https://project-change-log-t-fxu5.bolt.host/changelog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            Change Log
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <img src={logoImage} alt="Humansys Logo" className="logo-image" />
            <h1 className="brand-name">Humansys</h1>
          </div>
          <h2 className="hero-title">Building a better tomorrow through technology</h2>
          <p className="hero-description">
            We believe in progress as a route for a better world, and we believe that progress is driven by innovation.
          </p>
          <p className="hero-description">
            We see our mission in building capabilities to solve wicked problems / systemic issues. We believe that solving the problems that stand in our way to solve those problems is done through systemic infrastructure.
          </p>
          <p className="hero-description">
            Our ultimate mission is to create a world of human flourishing. Therefore, we think and create through our labs to achieve our arcs.
          </p>
        </div>
      </section>

      {/* Matrix Section */}
      <section className="matrix-section-wrapper" ref={matrixRef}>
        <MatrixSection />
      </section>

      {/* Hidden Sections - Paradigms to Beyond Monetary Capital */}
      {false && (
      <>
      <section className="paradigms-section" ref={paradigmsRef}>
        <div className="section-content">
          <h2 className="section-title">Paradigms</h2>
          <p className="section-intro">
            The Enlightenment, Industrial and Scientific revolutions created many advances for society. But what about their impact on deep ways of being and knowing? From the concept of thingification to the devaluation of mother earth, the psychological baseline of many societies was fundamentally altered. From our perspective, the worldview that condoned the treatment of land and living beings as disposable, exploitable resources, was also at play in the coding of our dominant socioeconomic systems. Humansys sets out to reject the concept of separation and to reimagine our foundational economic relationships.
          </p>

          <div className="paradigm-items">
            <div className="paradigm-item">
              <h3 className="paradigm-title">Property</h3>
              <p className="paradigm-description">
                Words like property and ownership are often associated with ideas of dominion and control, allowing us to treat elements of the living world (such as land and rare earth minerals) as objects. Deep down though, do we really believe that timber holds more value than a forest? Or that a whale's life is interchangeable with a barrel of oil? What would it mean to explore systems of organising that move beyond the paradigm of control?
              </p>
            </div>

            <div className="paradigm-item">
              <h3 className="paradigm-title">Technology</h3>
              <p className="paradigm-description">
                Emergent technologies can be framed as a threat, but they could also facilitate a new freedom to care. The field of quantum physics has enabled a granular visualisation of the shapeshifting and relational nature of living systems. Perhaps what we have previously framed as a boring revolution is also an invitation to sense and see the world through a quantum lens. Perhaps in the future our governing institutions will exist to advance and scaffold the continuous learning of a self-aware system.
              </p>
            </div>

            <div className="paradigm-item">
              <h3 className="paradigm-title">Money</h3>
              <p className="paradigm-description">
                Recognising that financial capital is intertwined and enabled by living and social systems is foundational to our work. Imagine how our relationship to finance might change if we understood the act of investing to be a commitment to our collective futures? What would a system look like where the ways of creating and stewarding money are decentralised and respectful of non-comparable value flows?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worldview Philosophies Section */}
      <section className="philosophies-section">
        <div className="section-content">
          <h2 className="section-title">Worldview philosophies</h2>
          <p className="section-intro">
            Based on this new paradigm we are proposing three worldview philosophies that we think could underpin a desirable future economy. From there, we have identified six structural shifts that we are hypothesising would need to occur for that to become a reality. The philosophies and shifts are not fixed, instead they are narratives that thread through the different dimensions of our Ecosystem Matrix, as we seek to test them in different contexts.
          </p>

          <div className="philosophy-items">
            <div className="philosophy-item">
              <h3 className="philosophy-title">Rooted in the recognition of the full web of life</h3>
              <p className="philosophy-description">
                From violence, scarcity and separation to a thriving planetary community of interbecoming.
              </p>
              <div className="philosophy-tags">
                <span className="tag">NEL</span>
                <span className="tag">RCA</span>
                <span className="tag">PCA</span>
                <span className="tag">CDS</span>
              </div>
            </div>

            <div className="philosophy-item">
              <h3 className="philosophy-title">Grounded in a non-bounded understanding of value</h3>
              <p className="philosophy-description">
                From extractive profit-driven goals to entangled, intergenerational and distributed value systems.
              </p>
              <div className="philosophy-tags">
                <span className="tag">NEL</span>
                <span className="tag">CSL</span>
                <span className="tag">BEA</span>
                <span className="tag">M0A</span>
                <span className="tag">CDS</span>
              </div>
            </div>

            <div className="philosophy-item">
              <h3 className="philosophy-title">Enabled by technological ecosystems of care</h3>
              <p className="philosophy-description">
                From the utilitarian 'othering' of technology to animistic interfaces of wisdom and care.
              </p>
              <div className="philosophy-tags">
                <span className="tag">NEL</span>
                <span className="tag">NZA</span>
                <span className="tag">CTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Structural Shifts Section */}
      <section className="shifts-section">
        <div className="section-content">
          <h2 className="section-title">Proposed structural shifts</h2>

          <div className="shift-items">
            <div className="shift-item">
              <h3 className="shift-title">Beyond Property</h3>
              <p className="shift-description">
                From exerting control over 'objects' to seeking reciprocal relationships with the full web of life.
              </p>
              <div className="shift-tags">
                <span className="tag">PBL</span>
                <span className="tag">RCA</span>
              </div>
            </div>

            <div className="shift-item">
              <h3 className="shift-title">Beyond Labour</h3>
              <p className="shift-description">
                From humans employed as resources to vocations of creativity, purpose and care.
              </p>
              <div className="shift-tags">
                <span className="tag">NEL</span>
                <span className="tag">7GA</span>
                <span className="tag">NFA</span>
                <span className="tag">ODS</span>
              </div>
            </div>

            <div className="shift-item">
              <h3 className="shift-title">Beyond Extraction</h3>
              <p className="shift-description">
                From extractive resource claims to the infinite guardianship of the global commons.
              </p>
              <div className="shift-tags">
                <span className="tag">SML</span>
                <span className="tag">M0A</span>
                <span className="tag">PCA</span>
                <span className="tag">RNA</span>
              </div>
            </div>

            <div className="shift-item">
              <h3 className="shift-title">Beyond Private Contracts</h3>
              <p className="shift-description">
                From linear agreements that optimise for the few to multi-party, dynamic, digital treaties of respect.
              </p>
              <div className="shift-tags">
                <span className="tag">BTRL</span>
                <span className="tag">RCA</span>
                <span className="tag">NFA</span>
              </div>
            </div>

            <div className="shift-item">
              <h3 className="shift-title">Beyond Governance</h3>
              <p className="shift-description">
                From centralised enforcement to nurturing institutions of stewardship.
              </p>
              <div className="shift-tags">
                <span className="tag">SDL</span>
                <span className="tag">BTRL</span>
                <span className="tag">NZA</span>
              </div>
            </div>

            <div className="shift-item">
              <h3 className="shift-title">Beyond Monetary Capital</h3>
              <p className="shift-description">
                From the accumulation of financial wealth to a social contract that regeneratively stewards the diverse capitals of life.
              </p>
              <div className="shift-tags">
                <span className="tag">CSL</span>
                <span className="tag">NEL</span>
                <span className="tag">7GA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  )
}

export default LandingPage
