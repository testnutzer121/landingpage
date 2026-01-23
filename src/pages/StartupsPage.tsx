import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Rocket, Globe, Zap, BookOpen, Code, Target, Clock, Award, Heart, Brain, TrendingUp, CheckCircle, XCircle, Map } from 'lucide-react'

const journeyPhases = [
  {
    phase: 'The Spark & The Maze',
    subtitle: 'Idea / Problem-Fit',
    before: [
      'Ideas trapped in your head with no clear path to convert into testable value propositions',
      'Endless "search + copy" loop trying to manually research and draft Lean Canvases',
      'Time-costly process taking weeks to get from raw idea to operational startup',
      'Working in isolation, unsure if you\'re on the right track'
    ],
    after: [
      'Instant Kickstart: 10-minute Q&A turns into polished Startup Pack in under 2 hours',
      'AI-Powered Document Generation: Rapid conversion of thoughts into usable business documents',
      'Clearer Vision: Immediate clarity on value proposition, competitive landscape, and assumptions',
      'Massive head start with zero prior experience needed'
    ],
    icon: <Zap className="w-8 h-8 text-primary-600" />,
    tool: 'Jumpstarterkit'
  },
  {
    phase: 'Building Your Foundation',
    subtitle: 'Launch / Company-Fit & MVP Development',
    before: [
      'Fragmented tooling with 350+ apps leading to 4 hours/week lost to context-switching',
      'Chaos of manual setup for canvases, sprint boards, and dashboards',
      'Process debt as each startup rebuilds its own processes',
      'Difficulty tracking project tasks, customer feedback, and business model iterations'
    ],
    after: [
      'All-in-One Startup OS: Unified hub for roadmaps, tasks, milestones, and progress metrics',
      'Automated Workspace Setup: AI parses Jumpstarterkit PDF to auto-populate your workspace',
      'Streamlined Operations: Pre-configured Notion schema for high time efficiency',
      'Single source of truth preventing chaos and enabling focused work'
    ],
    icon: <Code className="w-8 h-8 text-primary-600" />,
    tool: 'NotionWorkspace'
  },
  {
    phase: 'Gaining Momentum & Growing',
    subtitle: 'Scale / Market-Fit',
    before: [
      'Mentorship scarcity with limited access to timely, context-driven advice',
      'Unstructured growth leading to emotional toll and frustration',
      'Funding hurdles for under-25 founders lacking transparent pathways',
      'Decision paralysis without expert guidance for critical choices'
    ],
    after: [
      'Personal AI Mentor: Context-driven on-demand AI mentors accelerating decision-making',
      'Expert Guidance: 10,000+ curated founder mentorship Q&A with Hong Kong exit case studies',
      'Continuous Support: Survey scripts, deep-work sprints, and complex process demystification',
      'Data-Driven Decisions: Decision trees and founder-skill gaps radar for informed choices'
    ],
    icon: <BookOpen className="w-8 h-8 text-primary-600" />,
    tool: 'JourneyBook'
  }
]

const StartupsPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              The Ambitious Student Founder
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Are you a student with a groundbreaking idea, burning with the desire to build something real, but constantly battling the clock, limited funds, and the chaos of balancing demanding coursework with your entrepreneurial dreams?
            </p>
            <p className="text-lg text-primary-700 font-medium">
              We hear you. You're the "Adrian Ng" – the bright, driven individual in Hong Kong or Singapore who knows how to code or strategize, and is ready to turn a raw concept into a tangible startup, but needs a clear path, fast answers, and the right tools without breaking the bank or sacrificing your grades.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Is You Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Why This Is You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary-600" />,
                title: "You're an A-player with high self-efficacy",
                description: "You're passionate about solving problems and building software-centric products like apps or SaaS, often leveraging AI."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
                title: "You're comfortable with digital tools",
                description: "You frequently use platforms like Notion, WhatsApp, Discord, or WeChat for mobile-first communication."
              },
              {
                icon: <Heart className="w-8 h-8 text-primary-600" />,
                title: "You're balancing multiple priorities",
                description: "You're managing demanding coursework, maybe a part-time job, and that burning desire to build something amazing."
              },
              {
                icon: <Map className="w-8 h-8 text-primary-600" />,
                title: "You need a clear roadmap",
                description: "The journey from ideation to pre-seed fundraising often feels like navigating a maze blindfolded, with no clear roadmap, fragmented resources, and constant time fragmentation."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary-50"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Our Mission is to Empower You
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              We provide the AI-powered tools and an integrated ecosystem that transforms your concepts into fundable ventures, making entrepreneurship accessible and efficient alongside your demanding student life.
            </p>
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">100% Free for Students</h3>
              <p className="text-secondary-600">
                Our current offers are 100% free for students, because we understand you have no monetary means or options for costly tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Our Products and Services - Horizontal Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Discover Our Products and Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Your journey as a student founder, visualized: see how each phase transforms with our tools.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="overflow-x-auto pb-8">
            <div className="relative flex items-center min-w-[900px]">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary-200 z-0" style={{ transform: 'translateY(-50%)' }} />
              {/* Milestones */}
              {journeyPhases.map((phase, idx) => (
                <div
                  key={phase.phase}
                  className="relative z-10 flex flex-col items-center mx-8 min-w-[260px]"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(idx)}
                  tabIndex={0}
                >
                  {/* Timeline dot */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 ${activeIndex === idx ? 'border-primary-600 bg-primary-50' : 'border-secondary-400 bg-white'} shadow transition-all duration-200`}>
                    {phase.icon}
                  </div>
                  {/* Phase label */}
                  <div className="mt-2 text-primary-700 font-bold text-lg">{idx + 1}. {phase.phase}</div>
                  <div className="text-secondary-500 text-sm mb-2">{phase.subtitle}</div>
                  {/* Card: Before/After */}
                  <div className={`w-64 rounded-xl shadow-lg border border-secondary-200 p-5 bg-white transition-all duration-300 ${activeIndex === idx ? 'ring-2 ring-primary-400 scale-105 z-20' : ''}`}
                    style={{ minHeight: 220 }}
                  >
                    <div className="flex items-center mb-2">
                      {activeIndex === idx ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 mr-2" />
                      )}
                      <span className={`font-semibold ${activeIndex === idx ? 'text-green-700' : 'text-red-700'}`}>{activeIndex === idx ? 'With Our Tools' : 'Before'}</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {(activeIndex === idx ? phase.after : phase.before).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0 ${activeIndex === idx ? 'bg-green-500' : 'bg-red-400'}`}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {activeIndex === idx && (
                      <Link to={`/solutions/ai-tools/${phase.tool.toLowerCase()}`} className="btn-primary mt-4 inline-block">
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex justify-center mt-8 gap-8 text-sm text-secondary-600">
              <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-400 mr-2 inline-block"></span> Before</div>
              <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 mr-2 inline-block"></span> With Our Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Your Co-Pilots for Success
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We're here to show you how Jumpstarterkit, NotionWorkspace, and JourneyBook aren't just tools – they're your co-pilots, transforming the chaos of early-stage entrepreneurship into a streamlined, exciting quest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Jumpstarterkit</h3>
              <p className="text-secondary-600 mb-4">
                Transform your raw idea into a polished startup pack in under 2 hours with AI-powered document generation.
              </p>
              <Link to="/solutions/ai-tools/jumpstarterkit" className="btn-primary">
                Learn More
              </Link>
            </div>

            <div className="card text-center">
              <Code className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">NotionWorkspace</h3>
              <p className="text-secondary-600 mb-4">
                Your all-in-one startup OS that unifies roadmaps, tasks, and progress metrics in one shareable hub.
              </p>
              <Link to="/solutions/ai-tools/notionworkspace" className="btn-primary">
                Learn More
              </Link>
            </div>

            <div className="card text-center">
              <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">JourneyBook</h3>
              <p className="text-secondary-600 mb-4">
                Your personal AI mentor with 10,000+ curated founder mentorship Q&A and Hong Kong exit case studies.
              </p>
              <Link to="/solutions/ai-tools/journeybook" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              These tools work together to provide you with a continuous, software-defined safety-net that today's ecosystem often lacks. You're not just building a startup; you're shaping the future of entrepreneurship itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions" className="btn-secondary">
                Explore Our Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StartupsPage 