import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Calendar,
  User,
  Tag,
  BookOpen,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react'

const PublicationsPage = () => {
  const publications = [
    {
      id: 1,
      title: "White Paper on the Hong Kong Entrepreneurship Ecosystem and the Journeyshare Venture Builder",
      authors: ["Research Team", "Nexys"],
      date: "2024",
      category: "White Paper",
      description: "A comprehensive analysis of the Hong Kong entrepreneurship ecosystem and the development of an integrated venture builder model. This research investigates ecosystem integration strategies for a next-generation venture builder, examining local startup ecosystems, global entrepreneurship trends, and the potential for AI-first tech companies to disrupt traditional incubation models.",
      tags: ["Hong Kong", "Ecosystem Analysis", "Venture Builder", "Entrepreneurship"],
      fileUrl: "/documents/White Paper on the Hong Kong Entrepreneurship Ecosystem and the Jounreyshare Venture Builder_draft_nonacademical.pdf",
      isFeatured: true,
      readTime: "45 min read"
    },
    {
      id: 2,
      title: "Research Notion System Architecture: AI-Assisted Research Operating System",
      authors: ["AI Research Team", "Nexys"],
      date: "2024",
      category: "Technical Report",
      description: "Detailed architecture documentation for our AI-assisted research operating system, including methodology, technology stack, and implementation strategies for ecosystem knowledge collection and validation.",
      tags: ["Research System", "AI", "Architecture", "Knowledge Management"],
      fileUrl: "/documents/Research Notion System Architecture draft by notes ai reasoned.pdf",
      isFeatured: false,
      readTime: "30 min read"
    }
  ]

  const categories = ["All", "White Paper", "Technical Report", "Case Study", "Research Paper"]

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
              Research Publications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our latest research findings, white papers, and technical reports on entrepreneurship ecosystems and venture building innovation.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Featured Publication */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Featured Publication</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our latest comprehensive research on the Hong Kong entrepreneurship ecosystem and venture builder development.
            </p>
          </motion.div>

          {publications.filter(pub => pub.isFeatured).map((publication) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-200"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {publication.category}
                    </span>
                    <span className="text-secondary-500 text-sm">{publication.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {publication.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {publication.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/50 text-secondary-700 px-3 py-1 rounded-full text-sm border border-secondary-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-secondary-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{publication.authors.join(", ")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{publication.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={publication.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                    <a
                      href={publication.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Online</span>
                    </a>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white p-6 rounded-lg border border-secondary-200">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-secondary-900 mb-2">Document Details</h4>
                      <div className="space-y-2 text-sm text-secondary-600">
                        <div className="flex justify-between">
                          <span>Format:</span>
                          <span>PDF</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pages:</span>
                          <span>50+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>File Size:</span>
                          <span>228KB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Language:</span>
                          <span>English</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">All Publications</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Browse our complete collection of research papers, technical reports, and case studies.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-secondary-200 text-secondary-700 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-secondary-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {publication.category}
                  </span>
                  <span className="text-secondary-500 text-sm">{publication.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                  {publication.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {publication.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {publication.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary-50 text-secondary-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-secondary-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{publication.authors[0]}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{publication.date}</span>
                    </div>
                  </div>
                  
                  <a
                    href={publication.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Stay Updated with Our Research</h2>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Get notified about new publications and research findings as they become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/research"
                className="btn-primary"
              >
                View Research
              </Link>
              <a
                href="/resources/community"
                className="btn-secondary"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default PublicationsPage 