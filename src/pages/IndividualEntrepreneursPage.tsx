import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Rocket, Globe, Zap, BookOpen, Code, Target, Clock, Award, Heart, Brain, TrendingUp, CheckCircle, XCircle, Sparkles, Map } from 'lucide-react'

const journeyPhases = [
  {
    phase: 'The Curious Explorer',
    subtitle: 'Discovery & Self-Assessment',
    before: [
      'Feeling overwhelmed by endless "how to start a business" Google searches',
      'Lack of clear understanding of your entrepreneurial fit and strengths',
      'Wasting hours on generic advice that doesn\'t apply to your situation',
      'Dabbling in multiple ideas without structured approach or guidance'
    ],
    after: [
      'Fun, gamified "What\'s Your Vibe?" quiz takes just minutes to complete',
      'Instant personalized "Entrepreneurship Persona" reveals your unique strengths',
      'Clear understanding of what type of founder you are and what projects suit you',
      'Excitement and focus knowing exactly where your entrepreneurial potential lies'
    ],
    icon: <Sparkles className="w-8 h-8 text-primary-600" />,
    tool: 'Kidpreneur'
  },
  {
    phase: 'The Guided Creator',
    subtitle: 'Personalized Roadmap & Projects',
    before: [
      'No clear path forward from idea to first success',
      'Generic advice that doesn\'t match your background and goals',
      'Momentum quickly fading without structured guidance',
      'Ideas remaining unvalidated and unpursued due to self-doubt'
    ],
    after: [
      'Personalized starter kit with relevant micro-projects tailored to your profile',
      'Actionable roadmaps with clear milestones, tasks, and required skills',
      'Step-by-step guides from idea to first success making daunting tasks manageable',
      'Progress tracking with streaks and badges providing social recognition'
    ],
    icon: <Map className="w-8 h-8 text-primary-600" />,
    tool: 'Journex'
  },
  {
    phase: 'The Connected Builder',
    subtitle: 'Resources & Community',
    before: [
      'Working in isolation without access to relevant learning resources',
      'Difficulty finding communities and tools that match your journey stage',
      'Lack of peer support making the entrepreneurial path feel isolating',
      'Struggling to connect with people who share similar interests and goals'
    ],
    after: [
      'Curated third-party resources mapped to relevant stages of your journey',
      'Access to communities, tools, knowledge, and people in context',
      'Simple social network to find "journey buddies" and connect with peers',
      'Co-piloted progress with relevant learning resources and support'
    ],
    icon: <Users className="w-8 h-8 text-primary-600" />,
    tool: 'Journex Community'
  }
]

const IndividualEntrepreneursPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
              The Aspiring Entrepreneur
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Are you curious about entrepreneurship but unsure where to start? Do you have limited time and budget, but a burning desire to explore side projects or build something meaningful?
            </p>
            <p className="text-lg text-primary-700 font-medium">
              Our platform is designed for <strong>Wannabepreneurs</strong>—individuals ready to test their ideas and find their unique path in the entrepreneurial landscape, <strong>without the pressure of building a full-fledged startup immediately</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Is You Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">Why This Is You</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-primary-600" />,
                title: "You're early in your journey",
                description: "You might be a student (typically 14-23 years old) or someone with an interest in entrepreneurship, but you're not yet thinking about fundraising or scaling a large company."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
                title: "You seek personal growth",
                description: "You want to find first successes, validate your abilities, and gain new skills through practical projects."
              },
              {
                icon: <Heart className="w-8 h-8 text-primary-600" />,
                title: "You value flexibility and ease",
                description: "You prefer independent learning and mobile-first experiences, and you're new to many complex business tools."
              },
              {
                icon: <Map className="w-8 h-8 text-primary-600" />,
                title: "You want a clear roadmap",
                description: "You're tired of wasting time searching for relevant resources and wish someone would hand you a personalized plan with exact milestones, tasks, skills, tools, and people to connect with."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-secondary-50"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Your Founder DNA - Horizontal Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Discover Your Founder DNA (Kidpreneur)
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Your journey as an aspiring entrepreneur, visualized: see how each phase transforms with our tools.
            </p>
          </motion.div>

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
                      <Link to={`/solutions/ai-tools/${phase.tool.toLowerCase().replace(' ', '-')}`} className="btn-primary mt-4 inline-block">
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

      {/* What We Offer Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">What We Offer You</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our solutions for Wannabepreneurs make exploring entrepreneurship <strong>fun, actionable, and personalized</strong>, focusing on <strong>side projects and micro-businesses</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12 text-primary-600" />,
                title: "Discover Your Entrepreneurial Persona",
                description: "Share your interests and goals to receive a personalized profile that clarifies what type of entrepreneur you are and what projects suit you best. This is powered by our Kidpreneur application, which gamifies the process to make learning enjoyable."
              },
              {
                icon: <Map className="w-12 h-12 text-primary-600" />,
                title: "Get a Tailored Starter Kit & Roadmap",
                description: "Receive a relevant starter kit recommending micro-projects with actionable roadmaps, structured by milestones, tasks, and skills. Our Journex tool provides a customized journey, co-piloting your progress and finding relevant learning resources."
              },
              {
                icon: <BookOpen className="w-12 h-12 text-primary-600" />,
                title: "Access Curated Resources",
                description: "Journex lists third-party resources, including communities, tools, knowledge, and people, all mapped in context to relevant stages of your entrepreneurial journey."
              },
              {
                icon: <Users className="w-12 h-12 text-primary-600" />,
                title: "Connect with Fellow Travelers",
                description: "Join a simple social network within Journex to find 'journey buddies' and connect with peers who share similar interests and goals, making the path less isolating."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to turn your curiosity into creation?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Explore <strong>Kidpreneur</strong> and <strong>Journex</strong> now—<strong>100% free</strong> for students and aspiring entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/solutions/ai-tools/kidpreneur" className="btn-secondary">
                Try Kidpreneur
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/solutions/ai-tools/journex" className="btn-secondary">
                Explore Journex
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IndividualEntrepreneursPage 