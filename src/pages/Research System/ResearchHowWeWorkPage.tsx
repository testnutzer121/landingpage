import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Database, 
  Brain, 
  FileText,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Search,
  BookOpen,
  Lightbulb,
  Globe,
  TrendingUp
} from 'lucide-react'

const ResearchHowWeWorkPage = () => {
  const researchLifecycle = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Onboard Researcher",
      description: "New members skim a master research document and add their contacts to the system.",
      details: "Researchers are introduced to the platform through comprehensive onboarding materials and contact integration."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Contact & Outreach",
      description: "A form allows uploading contacts, leading to automated 'context outreach' emails with scheduling links.",
      details: "Automated outreach system generates personalized emails and integrates with Calendly for seamless scheduling."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule & Collect Data",
      description: "Calendly integrates with internal calendars to manage availability, leading to interviews and questionnaires.",
      details: "The venture builder's research initiative involves interviewing founders, incubators, program providers, and students."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Ingest & Tag Knowledge",
      description: "Interview notes, primary data, and secondary sources are stored in a Notion-style database, tagged by theme, stakeholder, and maturity.",
      details: "Comprehensive tagging system enables efficient retrieval and categorization of research data."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Feedback & Validation",
      description: "Concepts are exposed company-wide, experts provide comments, and a weekly digest is sent.",
      details: "Includes a 'Research ↔ Feedback Loop' for continuous improvement and validation of findings."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Plan & Report",
      description: "Milestones, objectives, and timelines are automatically updated, leading to auto-generated reports and 'actual papers'.",
      details: "Automated reporting system generates comprehensive research outputs and academic papers."
    }
  ]

  const technologyStack = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Notion",
      description: "Serves as the single source of truth for tables and boards, housing all research data and workflows."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Calendly + Google Calendar",
      description: "For external scheduling, integrated via API for seamless appointment management."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "n8n",
      description: "Acts as the 'glue' for automations, connecting webhooks to database updates and Slack DMs."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Slack",
      description: "For real-time alerts and feedback pings, keeping the team connected and informed."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Vector DB + RAG pipeline",
      description: "Enables semantic search and expert matchmaking for efficient knowledge retrieval."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "LLM wrappers",
      description: "For specialized AI functions including Notebook-LLM, GPT Paper Digest, and AI Writing Copilot."
    }
  ]

  const aiCompanionSuite = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Agent",
      description: "RAG over internal DB + web for comprehensive knowledge discovery and retrieval."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI Writing Copilot",
      description: "Assists in drafting research papers, reports, and documentation with AI-powered writing support."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Paper Digest",
      description: "Using Littero/GPT to automatically summarize and extract key insights from research papers."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Notebook-LLM",
      description: "Advanced note-taking assistant that helps organize and structure research findings."
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-secondary-50 to-white"
    >
      {/* Hero Section */}
      <div className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
            >
              How Our Research System Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
            >
              A comprehensive overview of our AI-assisted research operating system, from data collection to knowledge dissemination.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Research Lifecycle */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">The Research Lifecycle</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive data collection, analysis, and knowledge dissemination.
            </p>
          </motion.div>

          <div className="space-y-8">
            {researchLifecycle.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-secondary-500">
                          <Clock className="w-4 h-4" />
                          <span>Step {index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-secondary-600 mb-4">{step.description}</p>
                    <p className="text-sm text-secondary-500">{step.details}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center">
                  {index < researchLifecycle.length - 1 && (
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

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Technology Stack & Integrations</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our research system leverages cutting-edge tools and platforms to create a seamless, automated workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-secondary-50 to-white p-6 rounded-xl border border-secondary-200"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{tool.title}</h3>
                <p className="text-secondary-600 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Companion Suite */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">AI Companion Suite</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Advanced AI tools that enhance every aspect of the research process, from data collection to knowledge synthesis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiCompanionSuite.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{tool.title}</h3>
                <p className="text-secondary-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow & Architecture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Data Flow & Architecture</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              All data is versioned and typed to enable the Search Agent to build a light knowledge graph and retrieve context for LLM prompts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Knowledge Graph Architecture</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-secondary-600">
                    <strong>Versioned Data:</strong> All research data is versioned to track changes and maintain data integrity.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-secondary-600">
                    <strong>Typed Information:</strong> Structured data types enable efficient querying and AI processing.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-secondary-600">
                    <strong>Light Knowledge Graph:</strong> Search Agent builds contextual relationships for enhanced retrieval.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-secondary-600">
                    <strong>LLM Context Retrieval:</strong> Intelligent context provision for AI-powered analysis and generation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-200"
            >
              <h4 className="text-xl font-semibold text-secondary-900 mb-4">Key Features</h4>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-start space-x-2">
                  <Target className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Automated data collection and processing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <BarChart3 className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Real-time analytics and insights</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Globe className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Multi-source data integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
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
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Ready to Explore Our Research?</h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Discover our latest research findings and publications, or join our research community to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/research"
                className="btn-primary"
              >
                View Research
              </a>
              <a
                href="/resources/research/publications"
                className="btn-secondary"
              >
                Browse Publications
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ResearchHowWeWorkPage 