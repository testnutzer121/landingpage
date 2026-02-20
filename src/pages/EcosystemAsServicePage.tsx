import { motion } from 'framer-motion'
import { 
  Globe, 
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
  Brain,
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
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'

const EcosystemAsServicePage = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['executive-summary']))

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const businessLines = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Innovation Line",
      customers: "Large enterprises, government agencies, industry clusters",
      offerings: [
        "Enterprise Data & Analytics Platform",
        "Corporate Venture Building Services", 
        "Innovation Scouting as a Service",
        "Regulatory Intelligence Modules"
      ],
      value: "Accelerated internal innovation cycles, data-driven market entry, de-risked new venture creation, real-time insights into emerging tech."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Entrepreneurship Line",
      customers: "Student founders, solopreneurs, aspiring entrepreneurs",
      offerings: [
        "JumpStarterKit - Business document generation",
        "NotionWorkspace - Operating system for app founders",
        "Journex - AI-copiloted journey roadmap",
        "JourneyBook - AI mentor with case studies",
        "Kidpreneur App - Gamified learning platform"
      ],
      value: "Accelerated idea validation, structured entrepreneurial guidance, personalized support, and increased venture viability."
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Venture Builder Line",
      customers: "Ecosystem builders, program providers, university hubs",
      offerings: [
        "VBaaS (Venture Builder as a Service)",
        "Founder Internship program",
        "Scalable Entrepreneurship Ecosystems as a Service",
        "Support Infrastructure for Startup Ecosystem",
        "Global Entrepreneurship Infrastructure (Superplatform)"
      ],
      value: "Streamlined venture creation, talent matching, access to a global network, and increased operational efficiency for ecosystem managers."
    }
  ]

  const rolloutPhases = [
    {
      phase: "Phase 1",
      title: "Remote Market-Testing",
      duration: "Month 0-1",
      description: "Offer existing SaaS modules to individual users to test demand. No on-site operations required.",
      activities: ["Deploy entrepreneurship-line tools", "Test JumpStarterKit, NotionWorkspace", "Validate user adoption"]
    },
    {
      phase: "Phase 2", 
      title: "Ecosystem Research & Mapping",
      duration: "Month 1-2",
      description: "Conduct stakeholder interviews, network analyses, and gap assessments to understand local workflows.",
      activities: ["Stakeholder interviews", "Network analysis", "Gap assessment", "Build key contacts"]
    },
    {
      phase: "Phase 3",
      title: "Insight-Driven Ideation & POC",
      duration: "Month 2-4", 
      description: "Spin up 2-3 micro-startups tackling top local pain points, deliver POCs and secure LOIs.",
      activities: ["Create micro-startups", "Develop POCs", "Secure Letters of Intent", "Validate concepts"]
    },
    {
      phase: "Phase 4",
      title: "Value-Uplift Dossier & Pitch",
      duration: "Ongoing after Phase 3",
      description: "Present hard data on adoption and demand, demonstrating clear ecosystem uplift value.",
      activities: ["Compile adoption data", "Measure ecosystem uplift", "Present to stakeholders", "Build case for master license"]
    },
    {
      phase: "Phase 5",
      title: "Close Deal & Full Rollout",
      duration: "Ongoing after Phase 4",
      description: "Finalize master license deal, achieve full-stack deployment, drive continuous improvement via AI feedback loops.",
      activities: ["Sign master license", "Full deployment", "Establish feedback loops", "Create replication blueprint"]
    }
  ]

  const ecosystemEvolution = [
    {
      phase: "Phase 1: Emergence",
      period: "Early 2000s - Early 2010s",
      characteristics: [
        "Foundations and early momentum",
        "Pioneering institutions (InvestHK's StartmeupHK)",
        "University initiatives (PolyU MicroFund)",
        "Resources created but often isolated",
        "Pilot programs with modest connectivity"
      ],
      metrics: {
        supportLatency: "High (weeks)",
        idleTime: "Significant",
        timeToValue: "Long"
      }
    },
    {
      phase: "Phase 2: Growth", 
      period: "Mid-2010s - Late 2010s",
      characteristics: [
        "Exponential expansion in size and complexity",
        "Proliferation of startup programs",
        "Co-working spaces (CoCoon)",
        "Accelerators (Plug and Play, Techstars)",
        "Government support expansion",
        "Successful startups recycling gains back"
      ],
      metrics: {
        supportLatency: "Medium (days)",
        idleTime: "Reduced",
        timeToValue: "Improved"
      }
    },
    {
      phase: "Phase 3: Maturity",
      period: "2020-2025",
      characteristics: [
        "Complete range of support",
        "Homegrown successes (unicorns)",
        "Dense and tightly connected networks",
        "Network effects at full strength",
        "Integration and digital twin efforts",
        "Preparation for global convergence"
      ],
      metrics: {
        supportLatency: "Low (hours)",
        idleTime: "Minimal",
        timeToValue: "Fast"
      }
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="font-landing min-h-screen bg-page-bg text-page-text"
    >
      {/* Hero Section */}
      <div className="bg-page-bg-elevated border-b border-page-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-page-bg-elevated0 to-page-bg0 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-page-text mb-6"
            >
              Ecosystem-as-a-Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-page-text-muted max-w-4xl mx-auto leading-relaxed mb-8"
            >
              The Future of Global Innovation
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-secondary-500 max-w-3xl mx-auto"
            >
              A subscription-based, venture-builder-led platform that packages, orchestrates, and continuously updates the fundamental capabilities of a startup ecosystem.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <section className="py-8 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-page-bg-elevated to-page-bg p-6 rounded-xl border border-page-border">
            <h2 className="text-xl font-semibold text-page-text mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'executive-summary', title: 'Executive Summary', icon: <Star className="w-4 h-4" /> },
                { id: 'definition', title: 'Defining EaaS', icon: <Target className="w-4 h-4" /> },
                { id: 'mechanics', title: 'How EaaS Operates', icon: <Cpu className="w-4 h-4" /> },
                { id: 'business-model', title: 'Business Model', icon: <DollarSign className="w-4 h-4" /> },
                { id: 'product-portfolio', title: 'Product Portfolio', icon: <Layers className="w-4 h-4" /> },
                { id: 'rollout', title: 'Phased Rollout', icon: <Rocket className="w-4 h-4" /> },
                { id: 'evolution', title: 'Ecosystem Evolution', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'future', title: 'Future State', icon: <Globe className="w-4 h-4" /> },
                { id: 'metrics', title: 'New Metrics', icon: <BarChart3 className="w-4 h-4" /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center space-x-2 text-left p-3 rounded-lg hover:bg-page-bg-elevated/50 transition-colors text-page-text hover:text-page-text"
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">Executive Summary</h2>
            <p className="text-lg text-page-text-muted max-w-4xl mx-auto">
              EaaS represents a paradigm shift in how startup and innovation ecosystems are supported and scaled.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-page-text mb-6">The EaaS Model</h3>
              <div className="space-y-4 text-page-text-muted">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-page-text mt-1 flex-shrink-0" />
                  <p><strong>Subscription-based platform</strong> that packages and orchestrates ecosystem capabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-page-text mt-1 flex-shrink-0" />
                  <p><strong>Government customers</strong> uplift entire ecosystems with zero additional cost for stakeholders</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-page-text mt-1 flex-shrink-0" />
                  <p><strong>Self-updating mechanism</strong> replaces slow, calendar-driven processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-page-text mt-1 flex-shrink-0" />
                  <p><strong>Global startup meta-network</strong> where innovation accelerates for entire societies</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-page-bg-elevated to-page-bg p-8 rounded-xl border border-page-border"
            >
              <h4 className="text-xl font-semibold text-page-text mb-4">Key Value Proposition</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <span className="text-page-text">One contract, full-stack ecosystem uplift</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Network className="w-5 h-5 text-primary-600" />
                  <span className="text-page-text">Real-time data and AI feedback loops</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary-600" />
                  <span className="text-page-text">Continuous improvement and innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-page-text">Borderless access to global resources</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Defining EaaS */}
      <section id="definition" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">Defining Ecosystem-as-a-Service (EaaS)</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Understanding the core concept, origin story, and overarching vision of EaaS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-xl border border-page-border"
            >
              <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-page-text mb-3">Core Definition</h3>
              <p className="text-page-text-muted">
                A meta-platform that externalizes and packages the underlying dynamics of a startup ecosystem into a continuously available, subscription-based offering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-xl border border-page-border"
            >
              <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-page-text" />
              </div>
              <h3 className="text-xl font-semibold text-page-text mb-3">Origin Story</h3>
              <p className="text-page-text-muted">
                Born from observing systemic flaws in traditional ecosystems - their lack of self-updating mechanisms and reliance on slow, calendar-driven processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-page-bg-elevated to-page-bg p-8 rounded-xl border border-page-border"
            >
              <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-page-text mb-3">Vision & Mission</h3>
              <p className="text-page-text-muted">
                To act as a "System Innovation Engine by Meta-Ecosystem Intelligence" and enable an open meta-ecosystem for system innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How EaaS Operates */}
      <section id="mechanics" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">How EaaS Operates: The Mechanics</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Understanding the core functions and operational mechanics of a self-updating ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Modular Infrastructure",
                description: "Delivering plug-and-play services and products through internal startups and in-house lines."
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Driven Orchestration",
                description: "Dynamically matching founders with mentors, investors, and resources at the moment of demand."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Real-time Insights",
                description: "Leveraging AI to monitor ecosystem health, identify gaps, and predict needs."
              },
              {
                icon: <Activity className="w-6 h-6" />,
                title: "Continuous Improvement",
                description: "Built-in analytics and ML models monitor usage and automatically refine service offerings."
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Capital Gateway",
                description: "Serving as the single point of licensing and subscription for governments."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Value Measurement",
                description: "Tracking macro-level uplift metrics to demonstrate ROI and ecosystem health."
              }
            ].map((function_, index) => (
              <motion.div
                key={function_.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-page-bg-elevated p-6 rounded-xl shadow-lg border border-page-border"
              >
                <div className="w-10 h-10 bg-page-border rounded-lg flex items-center justify-center mb-4">
                  {function_.icon}
                </div>
                <h3 className="text-lg font-semibold text-page-text mb-2">{function_.title}</h3>
                <p className="text-page-text-muted text-sm">{function_.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section id="business-model" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">EaaS Business Model</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              A B2G approach with systemic impact, ensuring access remains free for every ecosystem stakeholder.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-page-text mb-6">B2G Subscription Platform</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-page-bg-elevated to-page-bg p-6 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-page-text mb-2">Primary Payer</h4>
                  <p className="text-page-text-muted">Local or national government signs a Master License & Outcomes Contract</p>
                </div>
                <div className="bg-gradient-to-r from-accent-50 to-page-bg p-6 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-page-text mb-2">Pricing Logic</h4>
                  <p className="text-page-text-muted">Value-based pricing capturing 10-20% of net economic value created</p>
                </div>
                <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-page-text mb-2">Funding Sources</h4>
                  <p className="text-page-text-muted">Impact-first investors, development banks, government funding schemes</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-page-bg-elevated to-page-bg p-8 rounded-xl border border-page-border"
            >
              <h4 className="text-xl font-semibold text-page-text mb-4">Key Benefits</h4>
              <ul className="space-y-3 text-page-text-muted">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Free access for all ecosystem stakeholders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Aligned incentives with ecosystem performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Pay-for-Success pilot projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Measurable ROI and economic impact</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section id="product-portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">Product & Service Portfolio</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Three parallel business lines serving distinct end-user segments through comprehensive offerings.
            </p>
          </motion.div>

          <div className="space-y-8">
            {businessLines.map((line, index) => (
              <motion.div
                key={line.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-page-bg-elevated p-8 rounded-xl shadow-lg border border-page-border"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-page-border rounded-lg flex items-center justify-center mb-4">
                      {line.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-page-text mb-2">{line.title}</h3>
                    <p className="text-page-text-muted mb-4">
                      <strong>End Customers:</strong> {line.customers}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-page-text mb-3">Offerings</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {line.offerings.map((offering, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                          <span className="text-page-text-muted text-sm">{offering}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-page-text mb-2">Value Proposition</h4>
                    <p className="text-page-text-muted">{line.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phased Rollout */}
      <section id="rollout" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">Phased Rollout Plan</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              A five-phase approach designed to de-risk implementation and build demand before signing a master license.
            </p>
          </motion.div>

          <div className="space-y-6">
            {rolloutPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-page-bg-elevated to-page-bg p-6 rounded-xl border border-page-border">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-page-text">{phase.title}</h3>
                        <p className="text-secondary-500 text-sm">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-page-text-muted mb-4">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-600" />
                          <span className="text-page-text-muted text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  {index < rolloutPhases.length - 1 && (
                    <div className="hidden lg:block">
                      <ArrowRight className="w-8 h-8 text-primary-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Evolution */}
      <section id="evolution" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">The Evolution of Startup Ecosystems</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Understanding the S-Curve of ecosystem development from emergence to maturity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ecosystemEvolution.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-page-bg-elevated p-6 rounded-xl shadow-lg border border-page-border"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-page-bg-elevated0 to-page-bg0 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-page-text mb-2">{phase.phase}</h3>
                  <p className="text-secondary-500 text-sm">{phase.period}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-page-text mb-2">Characteristics</h4>
                    <ul className="space-y-2">
                      {phase.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="w-3 h-3 text-primary-600 mt-1 flex-shrink-0" />
                          <span className="text-page-text-muted text-sm">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-page-text mb-2">Metrics</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-page-text-muted">Support Latency:</span>
                        <span className="font-medium">{phase.metrics.supportLatency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-page-text-muted">Idle Time:</span>
                        <span className="font-medium">{phase.metrics.idleTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-page-text-muted">Time to Value:</span>
                        <span className="font-medium">{phase.metrics.timeToValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future State */}
      <section id="future" className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">The Future State: Borderless, AI-First Super-Networks</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              The future of startup ecosystems as always-online innovation metasystems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-page-text mb-6">Key Elements of the Future</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-page-bg-elevated to-page-bg p-6 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-page-text mb-2">Digital Twin Concept</h4>
                  <p className="text-page-text-muted">Interactive online mirror of every offline resource, enabling seamless inter-hub collaboration.</p>
                </div>
                <div className="bg-gradient-to-r from-accent-50 to-page-bg p-6 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-page-text mb-2">Global Meta-Ecosystem</h4>
                  <p className="text-page-text-muted">Multiple local hubs adopt compatible digital platforms, forming a single, interconnected metasystem.</p>
                </div>
                <div className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-lg border border-page-border">
                  <h4 className="font-semibold text-page-text mb-2">Collective Problem-Solving</h4>
                  <p className="text-page-text-muted">Single orchestrator can mobilize global startup ecosystem power against systemic societal issues.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-page-bg-elevated to-page-bg p-8 rounded-xl border border-page-border"
            >
              <h4 className="text-xl font-semibold text-page-text mb-4">Catalytic Shifts</h4>
              <ul className="space-y-3 text-page-text-muted">
                <li className="flex items-start space-x-2">
                  <Zap className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Generative AI & low-code platforms enabling full-stack venture tooling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Post-COVID policy focus on resilient, mission-oriented innovation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Globe className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Demand for borderless access to global resources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Brain className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>AI-first tech companies disrupting existing ecosystems</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Metrics */}
      <section id="metrics" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">New Metrics for a Perpetual Support System</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Success metrics focused on speed, responsiveness, and value creation in AI-driven metasystems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Support Response Latency",
                description: "Time for ecosystem to respond to founder needs",
                traditional: "Weeks",
                target: "Minutes/Hours",
                color: "from-red-50 to-orange-50"
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Founder Idle Time",
                description: "Time entrepreneurs spend waiting for resources",
                traditional: "Significant",
                target: "Minimal",
                color: "from-page-bg-elevated to-page-bg"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Time-to-Value Uplift",
                description: "Acceleration of value creation for new ventures",
                traditional: "Slow",
                target: "Fast",
                color: "from-blue-50 to-purple-50"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`bg-gradient-to-br ${metric.color} p-8 rounded-xl border border-page-border`}
              >
                <div className="w-16 h-16 bg-page-bg-elevated/50 rounded-lg flex items-center justify-center mb-6">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-semibold text-page-text mb-3">{metric.title}</h3>
                <p className="text-page-text-muted mb-6">{metric.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-page-text-muted">Traditional:</span>
                    <span className="font-medium text-red-600">{metric.traditional}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-page-text-muted">Target:</span>
                    <span className="font-medium text-page-text">{metric.target}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-page-text mb-4">Ready to Transform Your Ecosystem?</h2>
            <p className="text-lg text-page-text-muted mb-8 max-w-2xl mx-auto">
              Join the future of global innovation with Ecosystem-as-a-Service. One contract, full-stack ecosystem uplift.
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

export default EcosystemAsServicePage 