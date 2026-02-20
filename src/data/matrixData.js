// Studios
export const studios = [
  {
    id: 'HF',
    name: 'Human Flourishing',
    abbreviation: 'HF',
    purpose: 'Engage in the well-being economy while steering technological development towards human flourishing and unlocking human potential — helping individuals with personal success.'
  },
  {
    id: 'ENT',
    name: 'Entrepreneurship',
    abbreviation: 'ENT',
    purpose: 'Root of progress and driver for a better world — creating abundance and enabling collective problem solving.'
  }
]

// ARCs (Impact Goals)
export const arcs = [
  // Human Flourishing ARCs
  {
    id: 'ARGAGE',
    name: 'Argumentation Age',
    abbreviation: 'ARGAGE',
    description: 'Advanced Reasoning and Decision Infrastructure. This Arc builds the intellectual and technical framework for an era defined by high-quality reasoning. We are developing the tools and protocols that ensure logical clarity and evidence-based debate become the standard for global problem-solving. The goal is to move beyond fragmented opinions into a structured age of collective intelligence and precise argumentation.',
    studioId: 'HF',
    isNew: true
  },
  {
    id: '10X',
    name: '10X Capable World',
    abbreviation: '10X',
    description: 'Radical Individual Performance Scaling. The 10X Arc focuses on multiplying the baseline capability of the individual by an order of magnitude. By integrating cognitive enhancement tools and high-efficiency workflows, we aim to empower a single person to achieve the impact previously reserved for entire teams. This mission is about shifting the ceiling of human potential to meet the demands of an increasingly complex world.',
    studioId: 'HF',
    isNew: false
  },
  {
    id: 'FCHPT',
    name: 'Field Catalyst Human Potential Tech',
    abbreviation: 'FCHPT',
    description: 'Accelerating the Growth of Talent Technology. This Arc acts as a strategic accelerator for technologies specifically designed to unlock human ability. As a "Field Catalyst," our role is to identify and scale the high-leverage tools that help people learn faster, adapt quicker, and perform better. We are creating a fertile environment where human-centric technology can thrive and be deployed at scale.',
    studioId: 'HF',
    isNew: true
  },
  // Entrepreneurship ARCs
  {
    id: 'DCSE',
    name: 'Digitalize and Connect Startup Ecosystems',
    abbreviation: 'DCSE',
    description: 'Unified Global Innovation Infrastructure. The goal of this Arc is to eliminate the geographic and technical barriers between global startup hubs. By building a digitalized, interconnected network, we ensure that resources, knowledge, and talent flow seamlessly across borders. This mission transforms local innovation into a globally synchronized engine for growth.',
    studioId: 'ENT',
    isNew: false
  },
  {
    id: 'ENTMAIN',
    name: 'Entrepreneurship Mainstream',
    abbreviation: 'ENTMAIN',
    description: 'Universal Access to Venture Creation. This Arc aims to transition entrepreneurship from a high-risk niche into a primary economic standard. We are designing the educational and financial frameworks necessary to make starting a venture accessible to everyone. The objective is to normalize the "entrepreneurial mindset," ensuring it becomes a basic skill set for the 21st-century workforce.',
    studioId: 'ENT',
    isNew: false
  },
  {
    id: '10XSTARTUP',
    name: '10X Startup Creation Process',
    abbreviation: '10XSTARTUP',
    description: 'High-Velocity Venture Engineering. The 10X Startup Arc focuses on optimizing the actual mechanics of how companies are built. We are developing a streamlined, high-speed process that reduces the time and friction between a concept and a viable market venture. This mission treats startup creation as a science, aiming to make the success of new businesses predictable and repeatable at 10 times the current speed.',
    studioId: 'ENT',
    isNew: false
  }
]

// Labs
export const labs = [
  // Overcategory: Creation
  {
    id: 'IMG',
    name: 'Imaginers',
    abbreviation: 'IMG',
    description: 'Develop sociotechnical imaginaries. Apply systems thinking. Produce approaches, deep research, solution concepts, theoretical sketches for systemic issues.',
    overcategory: 'Creation',
    link: 'https://ornate-sopapillas-9d5894.netlify.app/'
  },
  {
    id: 'RI',
    name: 'Research Institute',
    abbreviation: 'RI',
    description: 'Analyze systemic issues via deep dives. Create problem reports. Enhance / sharpen problem understanding.',
    overcategory: 'Creation',
    link: 'https://project-change-log-t-fxu5.bolt.host/framework'
  },
  // Overcategory: Execution
  {
    id: 'VB',
    name: 'Venture Builder',
    abbreviation: 'VB',
    description: 'Systemic, AI-native, crowdsourced venture builder. Startup factory "executive powerhouse". Turns systemic problems into startup-level solutions. Builds business problems from the Research Institute\'s problem breakdowns.',
    overcategory: 'Execution',
    link: 'https://dynamic-bonbon-f19224.netlify.app/'
  },
  {
    id: 'EaaS',
    name: 'Ecosystem as a Service',
    abbreviation: 'EaaS',
    description: 'Support infrastructure for innovation ecosystems. Uplifts ecosystem productivity through software.',
    overcategory: 'Execution',
    link: '/ecosystem-as-service' // Internal route to EcosystemAsServicePage
  },
  {
    id: 'SIE',
    name: 'SIE — System Innovation Engine',
    abbreviation: 'SIE',
    description: 'Combination of multiple ecosystems plugged into the problem-solving engine. Rotating system for detecting problems + resources at scale.',
    overcategory: 'Execution',
    link: '/system-innovation-engine'
  }
]

// Projects
export const projects = [
  {
    id: 'jarnex',
    name: 'Jarnex',
    labId: 'VB',
    arcId: null,
    studioId: null
  },
  {
    id: 'dronx',
    name: 'DroneX',
    labId: 'VB',
    arcId: 'BLOS',
    studioId: 'HF'
  },
  {
    id: 'journeybook',
    name: 'JourneyBook',
    labId: 'VB',
    arcId: 'BLOS',
    studioId: 'HF'
  }
]

// Generate intersections from projects
export const intersections = projects
  .filter(p => p.arcId && p.labId)
  .map(p => ({
    arcId: p.arcId,
    labId: p.labId,
    studioId: p.studioId,
    projectId: p.id,
    projectName: p.name
  }))

// Helper functions
export const getArcById = (id) => arcs.find(a => a.id === id)
export const getLabById = (id) => labs.find(l => l.id === id)
export const getStudioById = (id) => studios.find(s => s.id === id)
export const getProjectById = (id) => projects.find(p => p.id === id)

export const getArcsByStudio = (studioId) => arcs.filter(a => a.studioId === studioId)
export const getLabsByOvercategory = (overcategory) => labs.filter(l => l.overcategory === overcategory)

// Guided tour sections for scroll-based matrix walkthrough
export const guidedTourSections = [
  {
    id: 'stages',
    title: 'Stages',
    description: 'Our work is structured into two fundamental stages: Think and Create. Every act of creation at Humansys is grounded in rigorous research and analysis. The Think stage drives theoretical solutionism and deep problem understanding, while the Create stage turns those research-backed insights into tangible execution.'
  },
  {
    id: 'categories',
    title: 'Categories',
    description: 'These are the three core fields in which Humansys is active — our directional north stars. Human Flourishing focuses on unlocking individual potential and well-being. Systemic Infrastructure builds the foundational systems that enable innovation at scale. Innovation drives the creation of new ventures and mainstream access to entrepreneurship.'
  },
  {
    id: 'arcs',
    title: 'ARCs',
    description: 'ARCs are our mission statements and impact goals, derived from the categories we operate in. Each ARC defines a directional ambition — from scaling individual capability to digitalizing startup ecosystems. They are living goals: continuously iterated, updated, and refined as our understanding deepens and our ecosystem grows.'
  },
  {
    id: 'labs',
    title: 'Labs',
    description: 'Labs are our in-house organizations that operate on the mission statements defined by the ARCs. Each Lab brings specialized expertise — from deep research and imagination to venture building and ecosystem services. They are deeply intertwined, collaborating across boundaries to deliver compound impact.'
  },
  {
    id: 'projects',
    title: 'Projects',
    description: 'This is the map of existing initiatives and projects operating under Humansys. Each cell represents a specific initiative at the intersection of an ARC\'s mission and a Lab\'s expertise — the tangible output of our Think and Create process.'
  }
]

// Explanatory text content (legacy)
export const textContent = {
  matrix: {
    title: 'Matrix',
    description: 'Our collaborative approach is firmly grounded in the complex, messy reality of our existing socio-economic systems. Step-by-step, with the support of a growing ecosystem, we aim to build tangible pathways towards the options that we would like to manifest in the world. We have visualised our organisation\'s response strategy across a three-dimensional matrix. The Matrix represents the dynamic interplay of our systemic goals, collaborations and context specific initiatives.'
  },
  intersections: {
    title: 'Intersections',
    description: 'Each project in our portfolio contributes to a number of systemic capabilities. In doing so they intersect with the Labs, ARCs and Studios in various configurations.'
  },
  capabilities: {
    title: 'Capabilities',
    description: 'The capabilities form the core of our Mission and sit at the centre of the Matrix. These are the systemic goals that we have set for ourselves as we strive to build pathways towards Life-Ennobling Economies.'
  }
}

export default {
  studios,
  arcs,
  labs,
  projects,
  intersections,
  textContent,
  guidedTourSections,
  getArcById,
  getLabById,
  getStudioById,
  getProjectById,
  getArcsByStudio,
  getLabsByOvercategory
}
