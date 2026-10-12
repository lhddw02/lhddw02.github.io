// Edit this file to personalize the site. All project names, dates, and copy
// below are examples. Keep sampleContent true until you replace them.
window.PORTFOLIO_DATA = {
  profile: {
    name: 'LIU Haodong',
    initials: 'LH',
    role: 'Year 2 ECE MPhil student from HKUST',
    intro: 'A space to share my research, robotics projects, and the progress behind them.',
    about: 'I’m a Year 2 Postgraduate MPhil ECE student from HKUST. My research interests are robotics, digital twins and imitation learning. I am now exploring the potential of robotics with LLMs and the ability to imitate human motion.',
    focus: [
      { label: 'Research', detail: 'robotics, digital twins and imitation learning.' },
      { label: 'Robotics', detail: 'Describe the robotics topics that interest you.' },
      { label: 'Learning', detail: 'Share one area you are currently developing.' }
    ],
    github: 'https://github.com/lhddw02',
    email: 'lhddw02@gmail.com',
    location: 'HKSAR',
    availability: ''
  },
  projects: [
    {
      id: 'final-year-project',
      name: 'Follow-me Robot',
      category: 'Application Project',
      description: 'The Follow-me Robot aims to track a specific target to assist and stand-by to the target using UWB technology with automatic obsticle avoidance system.  Add its question, your approach, and what you learned or built.',
      stack: [],
      status: 'Finished',
      repo: '',
      demo: '',
      featured: true,
      visual: 'signal',
      image: 'assets/projects/72_MR02b-24_FinalPoster_ppt.jpg', // e.g. 'assets/projects/follow-me-robot.jpg'
      imageAlt: 'The final poster of the FYP', // Describe the image for visitors using a screen reader.
      imageFit: 'cover', // 'cover' crops to fill; 'contain' shows the whole image.
      updates: [
        {
          date: '2025-05-12',
          title: 'Oral Presentation (The end)',
          description: 'Group Oral Presentation to a panel of judges. We presented our FYP aim and the overall design of our robot. The professors provided useful and insightful comments on our project and design.'
        },
        {
          date: '2025-05-02',
          title: 'Industry Day',
          description: 'We showcase our final product to the industry representatives. We received valuable comments, feedbacks and suggestions from the industry to meet the niche of the market.'
        },
        {
          date: '2025-01-10',
          title: 'Midterm Poster Presentation',
          description: 'We have updated our latest progress and communicate with judges and colleagues. We received many useful comments and ideas on improving our project and make our project more practical.'
        }
      ]
    },
    {
      id: 'robotics-perception',
      name: 'Robotics · Perception',
      category: 'Robotics',
      description: 'A placeholder for a robotics project. Rename this suggested topic and describe the goal, setup, and progress of your own work.',
      stack: [],
      status: 'Exploring',
      repo: '',
      demo: '',
      featured: false,
      visual: 'relay',
      image: '',
      imageAlt: '',
      imageFit: 'cover',
      updates: [
        {
          date: '2026-10-06',
          title: 'Exploring the project',
          description: 'Example update: add what you explored recently, what you observed, and the next step.'
        }
      ]
    },
    {
      id: 'robotics-control',
      name: 'Robotics · Control',
      category: 'Robotics',
      description: 'A placeholder for another robotics project. Replace this suggested topic with a real project and explain the problem you are working on.',
      stack: [],
      status: 'Building',
      repo: '',
      demo: '',
      featured: false,
      visual: 'fieldnotes',
      image: '',
      imageAlt: '',
      imageFit: 'cover',
      updates: [
        {
          date: '2026-09-28',
          title: 'A step forward',
          description: 'Example update: share a recent build, experiment, or finding from your own project.'
        }
      ]
    }
  ],
  github: {
    enabled: false
  },
  sampleContent: true
};
