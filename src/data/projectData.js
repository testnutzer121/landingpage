// Project descriptions and links
export const projectDescriptions = {
  'Life OS': {
    title: 'Life OS',
    description: 'A systematic approach to venture building applied on Human Potential Tech. This project focuses on building foundational systems and tools that help people run their lives more effectively, creating personal success infrastructure.',
    link: 'https://vision-one.notion.site/Systematic-Venture-Building-Applied-on-HumanPotencial-Tech-2ebdcae724f0801d9388e558c8deb0c5?pvs=74'
  },
  'Journex, Journeybook, Sciencefit': {
    title: 'Journex, Journeybook, Sciencefit',
    description: 'A collection of ventures focused on finding relevant information and creating context-embedded marketplaces. These projects address the gap where finding relevant information takes time and skill, providing solutions through context-based recommendation systems.',
    link: 'https://quick-website-replic-344q.bolt.host/'
  },
  'Foundational Paper': {
    title: 'Foundational Paper',
    description: 'A comprehensive foundational paper on 10X Capable World, exploring radical individual performance scaling and the integration of cognitive enhancement tools and high-efficiency workflows.',
    link: 'https://ornate-sopapillas-9d5894.netlify.app/papers/foundational-papers/Foundational%20Paper-%2001v2.pdf'
  },
  'Articels': {
    title: 'Articles',
    description: 'A collection of articles exploring problem spaces and solutions related to 10X Capable World, covering topics on individual capability enhancement and performance scaling.',
    link: 'https://project-change-log-t-fxu5.bolt.host/problemspace'
  },
  'Nexus Community': {
    title: 'Nexus Community',
    description: 'A community platform focused on connecting individuals and enabling collective intelligence for the 10X Capable World vision.',
    link: 'https://sweet-bienenstitch-54a41d.netlify.app/'
  },
  'Field Map': {
    title: 'Field Map',
    description: 'An interactive field map for Human Potential Tech, providing visualization and navigation of the emerging field of technology designed to unlock human potential.',
    link: 'https://interactive-hfpi-fie-vdip.bolt.host/'
  },
  'Meta Institute': {
    title: 'Meta Institute',
    description: 'An institute focused on accelerating the growth of talent technology and serving as a strategic accelerator for technologies designed to unlock human ability.',
    link: 'https://dynamic-bonbon-f19224.netlify.app/view/62019d85-dc44-487b-840a-6e676c20509e'
  },
  'Mission Impossible': {
    title: 'Mission Impossible',
    description: 'A workshop focused on digitalizing and connecting startup ecosystems, working to eliminate geographic and technical barriers between global startup hubs.',
    link: 'https://vision-one.notion.site/Mission-Possible-Workshop-2f1dcae724f0801594d0c1076a1fa7fd?source=copy_link'
  },
  'Ecosystem Research': {
    title: 'Ecosystem Research',
    description: 'A research initiative focused on mainstreaming entrepreneurship and making venture creation accessible to everyone. This project investigates ecosystem integration strategies for a next-generation venture builder, building an AI-assisted "research operating system" that allows academics, product teams, and student researchers to collect, structure, validate, and circulate ecosystem knowledge at scale.',
    link: '/research'
  },
  'Venture Creation Framework': {
    title: 'Venture Creation Framework',
    description: 'A visionary paper on simulation-driven venture creation framework, exploring high-velocity venture engineering and the mechanics of how companies are built.',
    link: 'https://ornate-sopapillas-9d5894.netlify.app/papers/visionary-papers/Visionary%20Paper%20%E2%80%93%20Simulation%E2%80%91driven%20Venture%20Creation%20Frameworkv2.pdf'
  }
}

export const getProjectDescription = (projectName) => {
  // Try exact match first
  if (projectDescriptions[projectName]) {
    return projectDescriptions[projectName]
  }
  
  // Try partial matches for combined project names
  for (const key in projectDescriptions) {
    if (projectName.includes(key) || key.includes(projectName)) {
      return projectDescriptions[key]
    }
  }
  
  // Default description
  return {
    title: projectName,
    description: `Project: ${projectName}`,
    link: null
  }
}
