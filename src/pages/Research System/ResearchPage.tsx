import React from 'react'
import { Link } from 'react-router-dom'
import './ResearchPage.css'
import { 
  Search, 
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
  Globe,
  BarChart3,
  Zap,
  ArrowRight
} from 'lucide-react'

const ResearchPage = () => {
  const researchAreas = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Ecosystem Analysis",
      description: "Deep dives into local startup ecosystems and global entrepreneurship trends, analyzing existing offerings and identifying gaps."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Demand & Ecosystem Fit",
      description: "Assessing viability and integration potential with existing programs, understanding stakeholder needs and expectations."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Startup Journey & Pain Points",
      description: "Analyzing the entrepreneurial journey from ideation to acceleration, identifying frictions and service gaps."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "System Innovation",
      description: "Researching how AI-first tech companies can disrupt ecosystems by becoming incubator/venture builder wrappers."
    }
  ]

  const coreModules = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Interview & Survey Toolkit",
      description: "Auto-generates inquiry text, embeds questionnaire links, and stores recordings/transcripts."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Notion-style databases for papers, tasks, and timelines, tagged by theme and stakeholder."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Feedback & Review System",
      description: "RAG-powered Search Agent surfaces concepts to experts, enabling inline commenting and weekly digests."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Planning & Milestone Tracker",
      description: "Manages objectives, milestones, and Gantt timelines, connecting research outputs to delivery roadmap."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI Companion Suite",
      description: "Search Agent, AI writing copilot, Paper Digest, and Notebook-LLM for comprehensive research support."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation & Agent Layer",
      description: "n8n workflows and agent system for automation, with Slack/Notion integrations and auto-reporting."
    }
  ]

  return (
    <div className="research-page font-landing min-h-screen bg-page-bg text-page-text">
      {/* Hero Section */}
      <div className="bg-page-bg-elevated border-b border-page-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="fade-in-delay-1 text-4xl md:text-5xl font-bold text-page-text mb-6">
              Investigating Ecosystem Integration Strategies for a Next-Generation Venture Builder
            </h1>
            <p className="fade-in-delay-2 text-xl text-page-text-muted max-w-4xl mx-auto leading-relaxed">
              Building an AI-assisted "research operating system" that allows academics, product teams, and student researchers to collect, structure, validate, and circulate ecosystem knowledge at scale.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-delay-3 text-center mb-12">
            <h2 className="text-3xl font-bold text-page-text mb-4">Core Mission & Objectives</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Transforming scattered contacts, papers, interviews, and feedback loops into a continuously learning knowledge graph that can be queried and extended by anyone in the company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-in-delay-4 bg-page-bg-elevated p-8 rounded-xl shadow-lg border border-page-border">
              <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-page-text" />
              </div>
              <h3 className="text-xl font-semibold text-page-text mb-3">Knowledge/Data Sourcing</h3>
              <p className="text-page-text-muted">
                To understand and gather insights on entrepreneurship ecosystems through systematic data collection and analysis.
              </p>
            </div>

            <div className="fade-in-delay-5 bg-page-bg-elevated p-8 rounded-xl shadow-lg border border-page-border">
              <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-page-text" />
              </div>
              <h3 className="text-xl font-semibold text-page-text mb-3">Concept Feedback Loop</h3>
              <p className="text-page-text-muted">
                To validate proposed improvements and concepts for the venture builder through continuous feedback and iteration.
              </p>
            </div>

            <div className="fade-in-delay-6 bg-page-bg-elevated p-8 rounded-xl shadow-lg border border-page-border">
              <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-page-text" />
              </div>
              <h3 className="text-xl font-semibold text-page-text mb-3">Strategic Insights</h3>
              <p className="text-page-text-muted">
                To inform "where we will play" and "how we will win" within the overall business strategy through data-backed insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-page-text mb-4">Areas of Research Focus</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Our research spans multiple dimensions of the entrepreneurship ecosystem, from local market analysis to global innovation trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const delayClass = index === 0 ? 'fade-in-delay-4' : index === 1 ? 'fade-in-delay-5' : index === 2 ? 'fade-in-delay-6' : 'fade-in-delay-6'
              return (
              <div
                key={area.title}
                className={`${delayClass} bg-page-bg p-8 rounded-xl border border-page-border`}
              >
                <div className="w-12 h-12 bg-page-border rounded-lg flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-page-text mb-3">{area.title}</h3>
                <p className="text-page-text-muted">{area.description}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-page-text mb-4">How the Research System Works</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Our systematic process and tools employ cutting-edge technology to facilitate AI-assisted structured research on ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreModules.map((module, index) => {
              const delayClass = index < 3 ? `fade-in-delay-${4 + index}` : 'fade-in-delay-6'
              return (
              <div
                key={module.title}
                className={`${delayClass} bg-page-bg-elevated p-6 rounded-xl shadow-lg border border-page-border`}
              >
                <div className="w-10 h-10 bg-page-border rounded-lg flex items-center justify-center mb-4">
                  {module.icon}
                </div>
                <h3 className="text-lg font-semibold text-page-text mb-2">{module.title}</h3>
                <p className="text-page-text-muted text-sm">{module.description}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Connection to Venture Builder */}
      <section className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-page-text mb-4">Connection to the Venture Builder Model</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Our research system is crucial for the venture builder's operational model, ensuring data-driven decision making and continuous improvement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold text-page-text mb-6">Research-Driven Innovation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-page-border rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-3 h-3 text-page-text" />
                  </div>
                  <p className="text-page-text-muted">
                    The research system funnels and aggregates feedback, informing the problem sourcing, ideation, and validation process.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-page-border rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-3 h-3 text-page-text" />
                  </div>
                  <p className="text-page-text-muted">
                    It supports venture builder capabilities by providing insights on what new services and products are needed.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-page-border rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-3 h-3 text-page-text" />
                  </div>
                  <p className="text-page-text-muted">
                    This approach ensures the venture builder is a "self-improving mechanism" where insights flow into the development pipeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="slide-in-right bg-page-bg p-8 rounded-xl border border-page-border">
              <h4 className="text-xl font-semibold text-page-text mb-4">Expected Outputs & Impact</h4>
              <ul className="space-y-3 text-page-text-muted">
                <li className="flex items-start space-x-2">
                  <BookOpen className="w-4 h-4 text-page-text mt-1 flex-shrink-0" />
                  <span>Detailed research reports and white papers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-page-text mt-1 flex-shrink-0" />
                  <span>Validated concepts with empirical evidence</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-page-text mt-1 flex-shrink-0" />
                  <span>Strategic recommendations for ecosystem integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-page-text mt-1 flex-shrink-0" />
                  <span>Academic contributions to venture building models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Sub-pages Navigation */}
      <section className="py-16 bg-page-bg-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-page-text mb-4">Explore Our Research</h2>
            <p className="text-lg text-page-text-muted max-w-3xl mx-auto">
              Dive deeper into our research methodology and access our latest publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in-delay-4 bg-page-bg p-8 rounded-xl border border-page-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-page-border rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-page-text" />
                </div>
                <h3 className="text-2xl font-semibold text-page-text mb-4">How We Work</h3>
                <p className="text-page-text-muted mb-6">
                  Discover our AI-assisted research operating system, methodology, and technology stack that powers our ecosystem research.
                </p>
                <Link
                  to="/resources/research/how-we-work"
                  className="btn-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="fade-in-delay-5 bg-page-bg p-8 rounded-xl border border-page-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-page-border rounded-lg flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-page-text" />
                </div>
                <h3 className="text-2xl font-semibold text-page-text mb-4">Publications</h3>
                <p className="text-page-text-muted mb-6">
                  Access our latest research papers, white papers, and technical reports on entrepreneurship ecosystems and venture building.
                </p>
                <Link
                  to="/resources/research/publications"
                  className="btn-secondary"
                >
                  Browse Publications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-page-text mb-4">Join Our Research Community</h2>
            <p className="text-lg text-page-text-muted mb-8 max-w-2xl mx-auto">
              Collaborate with academics, student researchers, and product teams to advance our understanding of entrepreneurship ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/community"
                className="btn-primary"
              >
                Join Community
              </a>
              <Link
                to="/resources/research/publications"
                className="btn-secondary"
              >
                View Publications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResearchPage 