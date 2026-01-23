import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Rocket, Globe, Zap, BookOpen, Code, Target, Clock, Award, Heart, Brain, TrendingUp, CheckCircle, XCircle, Sparkles, Map } from 'lucide-react'

const WhoWeServePage = () => {
  const segments = [
    {
      title: "Early-Stage Startups",
      subtitle: "Student Founders & Young Entrepreneurs",
      description: "You're balancing demanding coursework, maybe a part-time job, and that burning desire to build something amazing. The journey from a raw idea to a thriving startup can feel like navigating a maze blindfolded, especially when you're strapped for time and cash.",
      icon: <Rocket className="w-12 h-12 text-primary-600" />,
      features: [
        "Free access to Jumpstarterkit, NotionWorkspace, and JourneyBook",
        "AI-powered document generation and workspace setup",
        "Personal AI mentor for decision-making guidance",
        "Structured roadmap from idea to first success"
      ],
      cta: "Explore Startup Tools",
      link: "/industries/startups",
      color: "from-blue-50 to-indigo-50",
      textColor: "text-blue-700"
    },
    {
      title: "Individual Entrepreneurs",
      subtitle: "Wannabepreneurs & Side Project Builders",
      description: "Are you curious about entrepreneurship but unsure where to start? Do you have limited time and budget, but a burning desire to explore side projects or build something meaningful?",
      icon: <Sparkles className="w-12 h-12 text-primary-600" />,
      features: [
        "Discover your entrepreneurial persona with Kidpreneur",
        "Get personalized roadmaps and starter kits",
        "Access curated resources and communities",
        "Connect with fellow travelers and journey buddies"
      ],
      cta: "Start Your Journey",
      link: "/industries/individual-entrepreneurs",
      color: "from-purple-50 to-pink-50",
      textColor: "text-purple-700"
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Who We Serve
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Nexys serves two distinct segments of the entrepreneurial ecosystem, each with unique needs and challenges. 
              Discover which path aligns with your journey and unlock the tools designed specifically for your success.
            </p>
            <p className="text-lg text-primary-700 font-medium">
              Whether you're building a startup or exploring entrepreneurship, we have the tools to accelerate your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Segments Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Choose Your Path</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Each segment has been carefully designed with specific tools and resources tailored to your unique needs and goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${segment.color} rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{segment.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">{segment.title}</h3>
                    <p className={`text-lg font-medium ${segment.textColor}`}>{segment.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-secondary-700 mb-6 leading-relaxed">
                  {segment.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-secondary-900 mb-4">What you'll get:</h4>
                  <ul className="space-y-3">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={segment.link}
                  className="inline-flex items-center bg-white text-secondary-900 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors duration-200 shadow-md"
                >
                  {segment.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Mission</h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              We believe that entrepreneurship should be accessible to everyone, regardless of their background, resources, or experience level. 
              Our platform democratizes access to the tools, knowledge, and support that have traditionally been available only to well-funded startups 
              or those with extensive networks. By providing free access to our AI-augmented tools and personalized guidance, we're leveling the playing field 
              and empowering the next generation of entrepreneurs to turn their ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Choose your path and discover the tools designed specifically for your success. 
              All our core tools are <strong>100% free</strong> for students and aspiring entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/industries/startups" className="btn-secondary">
                Explore Startup Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/industries/individual-entrepreneurs" className="btn-secondary">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeServePage 