import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Users, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Lightbulb,
  Database,
  MessageSquare,
  Calendar,
  FileText,
  Globe,
  BarChart3,
  Search,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  Network,
  Rocket,
  Cpu,
  Layers,
  GitBranch,
  PieChart,
  Activity,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
  Eye,
  Cog,
  Infinity
} from 'lucide-react'
import { useState } from 'react'

const SystemInnovationPage = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['vision']))

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const visionComponents = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "End-to-End Ownership",
      description: "Complete ownership of the innovation process with no friction and seamless feedback loops"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Innovation System Engine",
      description: "AI-first platform that scales across many sub-ecosystems with self-enhancement mechanisms"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Alignment & Orchestration",
      description: "Route capital, talent, and policy signals in real-time across global networks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Incentive Redesign",
      description: "Digital twin & funding model that local ecosystems can't build alone"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect multiple ecosystems via digital twin technology for global innovation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human Potential",
      description: "Enable everybody to reach full potential by automating mundane tasks"
    }
  ]

  const technicalPhases = [
    {
      phase: "Phase 1",
      title: "AI-Augmented Tooling Layer",
      duration: "Months 0-6",
      objective: "Deliver concierge-style assistants that accelerate founders from raw ideas to incubation artifacts",
      deliverables: [
        "JumpstarterKit v0.1 - LangChain wrapper for business documents",
        "NotionWorkspace v0.1 - Founders OS with GraphQL integration",
        "JourneyBook v0.1 - RAG pipeline with 10,000 mentorship Q&A",
        "Unified Identity & Session Layer - Auth0 with Kafka event bus"
      ],
      architecture: "Frontends → API Gateway → Shared LLM Hub → Postgres"
    },
    {
      phase: "Phase 2",
      title: "Integrated Platform Layer",
      duration: "Months 7-18",
      objective: "Refactor point solutions into first-party platform modules for holistic journey orchestration",
      deliverables: [
        "Journex v1.0 - Milestone/Task/Skill ontology engine with Neo4j",
        "Kidpreneur v1.0 - Flutter mobile client with gamification",
        "VBaaS v1.0 - Bipartite-matching solver for founder-intern matching",
        "Telemetry Pipeline - Clickstream metrics to Snowflake"
      ],
      architecture: "Frontends → GraphQL Gateway → Microservices → Kafka → Data Layer (Postgres/Neo4j/Snowflake)"
    },
    {
      phase: "Phase 3",
      title: "MetaBrain Sim & IP Layer",
      duration: "Months 19-48",
      objective: "Transition to autonomous, multi-agent venture simulation with IRL scoring (0-10)",
      deliverables: [
        "Intent Parser - Free-text to machine-readable problem statements",
        "Contextualiser - Multi-agent knowledge engine with persona agents",
        "Simulation Swarm (Q*) - Millions of goal-path evaluations",
        "IRL Cruncher - Investment Readiness Level scoring algorithm",
        "Insights Engine - Timestamped roadmaps with sensitivity analysis"
      ],
      architecture: "LangGraph → OpenAI GPT-4o-192k → Pinecone → S3/Iceberg → Kubernetes on AWS EKS"
    }
  ]

  const ventureBuilderStages = [
    {
      stage: "Ideation",
      range: "0-1",
      description: "Problem intake leads to AI drafts and human refinement",
      output: "Early traction, alpha MVP, pitch deck with market research",
      team: "Ideation Lab with AI assistance"
    },
    {
      stage: "Incubation",
      range: "1-10",
      description: "Turn concepts into incorporated companies with intern support",
      output: "10x growth in product demand and team growth",
      team: "Founder-Intern Programme with Notion Workspace"
    },
    {
      stage: "Acceleration",
      range: "10-100,000",
      description: "Focus on product-market fit with seed investment",
      output: "Investment-ready runway for external scaling",
      team: "Experienced advisors and serial founders"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-page-bg-elevated to-white"
    >
      {/* Hero Section */}
      <div className="bg-page-bg-elevated border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-page-bg-elevated0 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6"
            >
              System Innovation Engine
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              by Meta-Ecosystem Intelligence
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-page-text-muted max-w-3xl mx-auto"
            >
              Revolutionizing the entrepreneurial landscape by solving systemic issues through a self-improving, AI-first platform that orchestrates capital, talent, and policy signals in real-time on a global scale.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <section className="py-8 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-page-bg-elevated to-accent-50 p-6 rounded-xl border border-primary-200">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'vision', title: 'The North Star Vision', icon: <Star className="w-4 h-4" /> },
                { id: 'strategy', title: '5-Year Technical Strategy', icon: <Target className="w-4 h-4" /> },
                { id: 'phases', title: 'Technical Phases', icon: <Cpu className="w-4 h-4" /> },
                { id: 'operations', title: 'Current Operations', icon: <Activity className="w-4 h-4" /> },
                { id: 'venture-builder', title: 'Venture Builder Model', icon: <Rocket className="w-4 h-4" /> },
                { id: 'ecosystem', title: 'Meta-Intelligence Ecosystem', icon: <Network className="w-4 h-4" /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center space-x-2 text-left p-3 rounded-lg hover:bg-page-bg-elevated/50 transition-colors text-secondary-700 hover:text-page-text"
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The North Star Vision */}
      <section id="vision" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">The North Star: System Innovation Engine</h2>
            <p className="text-lg text-secondary-600 max-w-4xl mx-auto">
              The ultimate goal is to make system innovation a reality by creating a self-solving meta-ecosystem that delivers a 10× leap in addressing systemic issues.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-page-bg-elevated p-6 rounded-xl shadow-lg border border-secondary-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {component.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{component.title}</h3>
                <p className="text-secondary-600 text-sm">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Year Technical Strategy */}
      <section id="strategy" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">5-Year Technical Strategy</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              A phased roadmap designed to transition from human-assisted tooling to fully autonomous venture simulation and IP-driven technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Guiding Tenets</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-page-bg-elevated to-accent-50 p-4 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-secondary-900 mb-2">Founder-in-the-Loop → No-Founder-in-the-Loop Continuum</h4>
                  <p className="text-secondary-600 text-sm">Systematic reduction of human mediation culminating in fully autonomous simulation</p>
                </div>
                <div className="bg-gradient-to-r from-accent-50 to-secondary-50 p-4 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-secondary-900 mb-2">Layered Capability Stack</h4>
                  <p className="text-secondary-600 text-sm">Micro-tools feed platform services that supply advanced MetaBrain Sim</p>
                </div>
                <div className="bg-gradient-to-r from-page-bg-elevated to-primary-50 p-4 rounded-lg border border-secondary-200">
                  <h4 className="font-semibold text-secondary-900 mb-2">IP-Centric Moat</h4>
                  <p className="text-secondary-600 text-sm">Algorithms protected via patents and trade secrets</p>
                </div>
                <div className="bg-gradient-to-r from-page-bg-elevated to-accent-50 p-4 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-secondary-900 mb-2">Observability & Safety</h4>
                  <p className="text-secondary-600 text-sm">Robust monitoring and safety mechanisms throughout the system</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technical Phases */}
      <section id="phases" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Technical Phases</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              A systematic approach to building the infrastructure for the new generation of entrepreneurs.
            </p>
          </motion.div>

          <div className="space-y-8">
            {technicalPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-page-bg-elevated p-8 rounded-xl shadow-lg border border-secondary-200"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-page-bg-elevated0 to-accent-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-secondary-900">{phase.title}</h3>
                        <p className="text-page-text-muted">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-secondary-600 mb-4">{phase.objective}</p>
                    <div className="bg-page-bg p-4 rounded-lg">
                      <h4 className="font-semibold text-secondary-900 mb-2">Architecture</h4>
                      <p className="text-secondary-600 text-sm">{phase.architecture}</p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-4">Key Deliverables</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                          <span className="text-secondary-600 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Operations */}
      <section id="operations" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Bridging Current Operations</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              How current operations lay the foundation for the future masterplan through progressive integration and feedback loops.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Current State Foundation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Database className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary-900">Notion as Core Interface</h4>
                    <p className="text-secondary-600 text-sm">Heavy use of Notion for startup management as MVP frontend</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary-900">AI App Approach</h4>
                    <p className="text-secondary-600 text-sm">GPT wrappers for productivity enhancement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary-900">JourneyBook Development</h4>
                    <p className="text-secondary-600 text-sm">Initial product to get users and data as "jump starter"</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-page-bg-elevated to-accent-50 p-8 rounded-xl border border-primary-200"
            >
              <h4 className="text-xl font-semibold text-secondary-900 mb-4">Progressive Integration</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-600 text-sm">Phase-1 artifacts feed into Phase-2 structured data layers</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-600 text-sm">Telemetry data streams to Snowflake for Phase-3 contextualization</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-600 text-sm">MetaBrain Sim insights loop back to Phase-1/2 front-ends</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-secondary-600 text-sm">Closed-loop learning system for continuous improvement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venture Builder Model */}
      <section id="venture-builder" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Venture Builder Model</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              A structured approach to building the "venture factory" with three repeatable stages and dedicated teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ventureBuilderStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-page-bg-elevated p-6 rounded-xl shadow-lg border border-secondary-200"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-page-bg-elevated0 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{stage.stage}</h3>
                  <p className="text-page-text-muted text-sm">Range: {stage.range}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Description</h4>
                    <p className="text-secondary-600 text-sm">{stage.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Output</h4>
                    <p className="text-secondary-600 text-sm">{stage.output}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Team</h4>
                    <p className="text-secondary-600 text-sm">{stage.team}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta-Intelligence Ecosystem */}
      <section id="ecosystem" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Meta-Intelligence Ecosystem</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Building an entire "venture factory" that can surface high-potential, customer-validated ideas and drive systemic change.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Organizational Structure</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-page-bg-elevated to-accent-50 p-4 rounded-lg border border-primary-200">
                  <h4 className="font-semibold text-secondary-900 mb-2">Community Profile System</h4>
                  <ul className="text-secondary-600 text-sm space-y-1">
                    <li>• Divergent Denker</li>
                    <li>• Workspace (including "sowork" 2D digital concept)</li>
                    <li>• Programs (Imagineers as Profession, DeepImpact Imagineer)</li>
                    <li>• Ideation Lab</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-accent-50 to-secondary-50 p-4 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-secondary-900 mb-2">Talent Attraction</h4>
                  <p className="text-secondary-600 text-sm">Attract "polymath builders" with mission resonance, builder autonomy, and ethical oversight culture</p>
                </div>
                <div className="bg-gradient-to-r from-page-bg-elevated to-primary-50 p-4 rounded-lg border border-secondary-200">
                  <h4 className="font-semibold text-secondary-900 mb-2">Corporate Line</h4>
                  <p className="text-secondary-600 text-sm">Corporate innovation and partnerships beyond individual startups</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-page-bg-elevated to-accent-50 p-8 rounded-xl border border-primary-200"
            >
              <h4 className="text-xl font-semibold text-secondary-900 mb-4">Financial Model</h4>
              <div className="space-y-4 text-secondary-600">
                <div>
                  <h5 className="font-semibold text-secondary-900 mb-2">Revenue Streams</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• EaaS licenses (€100k ARR per ecosystem)</li>
                    <li>• Equity pool from VBaaS (2% equity in spun-out startups)</li>
                    <li>• Marketplace fees (5% on expert gigs, API calls)</li>
                    <li>• Premium streams from corporates</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-secondary-900 mb-2">Funding Strategy</h5>
                  <p className="text-sm">Impact investors, governments, and high-net-worth individuals focused on solving systemic issues</p>
                </div>
                <div>
                  <h5 className="font-semibold text-secondary-900 mb-2">Exit Strategy</h5>
                  <p className="text-sm">Strategic "roll-up & sell" to big-tech acquirers or public market "SPAC Roll-Up"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Join the System Innovation Revolution</h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Be part of the infrastructure for the new generation of entrepreneurs. Redefine how society creates, tests, and scales ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="btn-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default SystemInnovationPage 