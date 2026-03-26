export type NavLink = {
  label: string
  href: string
}

export type Project = {
  id: number
  title: string
  description: string
  liveLink: string
  githubLink: string
  repoName: string
  skills: Array<{
    label: string
    color: string
  }>
}

export type Job = {
  id: string
  title: string
  companyName: string
  duration: string
  companySite: string
  tasks: string[]
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const techStack = [
  'Go',
  'JavaScript',
  'Python',
  'Java',
  'C',
  'Vue.js',
  'React.js',
  'Docker',
  'Kubernetes',
  'Node.js',
]

export const jobs: Job[] = [
  {
    id: 'ecr',
    title: 'Software Engineer',
    companyName: 'Edge Case Research',
    duration: 'May 2022 - August 2023',
    companySite: 'https://www.ecr.ai/',
    tasks: [
      'Collaborated on a cross-functional team of engineers to design and implement new features for a web application aimed at ensuring autonomous vehicle safety, utilizing Golang on the backend and Vue.js on the front-end.',
      'Developed new user-interface features by collaborating with the product team, resulting in increased user satisfaction and a smooth user experience for end-users.',
      'Leveraged Docker and Kubernetes to optimize and streamline application deployments and clusters, leading to reductions in downtime and improved system scalability by collaborating with the platform engineering team.',
    ],
  },
  {
    id: 'mma',
    title: 'Data Analyst',
    companyName: 'Marsh & McLennan Agency',
    duration: 'May 2021 - July 2021',
    companySite: 'https://www.marshmclennan.com/',
    tasks: [
      'Manipulated data in SQL to develop benchmarking dashboards for use in client sales meetings.',
      'Developed industry benchmarking Power BI dashboards for use in sales pitches to potential clients. Presented dashboards to upper management.',
      'Aggregated data in Salesforce CRM database for 8 major clients to streamline marketing strategies for salespeople.',
    ],
  },
  {
    id: 'pip',
    title: 'Online Trainer',
    companyName: 'Partner in Publishing',
    duration: 'May 2020 - August 2020',
    companySite: 'https://www.partnerinpublishing.com/',
    tasks: [
      'Individually trained more than 250 undergraduate professors to use learning management systems such as Canvas.',
      'Ranked among top 3 of 25 trainers in customer satisfaction surveys for three consecutive months.',
      'Wrote Microsoft Excel Macro applications to improve team productivity in automated reporting.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Find-A-Coach',
    description:
      'A web app with 2-factor authentication that allows users to find coaches based on their location and skill, using Vue.js and Vuex, and is currently hosted on Firebase.',
    liveLink: 'https://findacoach-ebc23.web.app/coaches',
    githubLink: 'https://github.com/JosephGalante/FindACoach',
    repoName: 'FindACoach',
    skills: [{ label: 'Vue.js', color: '#4FC08D' }],
  },
  {
    id: 2,
    title: 'React Chat App',
    description:
      'Created a fully functional chat application using React.js, with a live-chat feature, user authentication, and a back-end to store messages.',
    liveLink: 'https://incredible-crisp-4050e0.netlify.app/',
    githubLink: 'https://github.com/JosephGalante/ChatApp',
    repoName: 'Portfolio',
    skills: [{ label: 'React', color: '#61DBFB' }],
  },
  {
    id: 3,
    title: 'Pathfinder Visualizer',
    description:
      'A web app that visualizes several different pathfinding algorithms demonstrating how each algorithm finds the shortest path in a graph.',
    liveLink: 'https://pathfinder-neon.vercel.app',
    githubLink: 'https://github.com/JosephGalante/pathfinder',
    repoName: 'Portfolio',
    skills: [{ label: 'Vue.js', color: '#4FC08D' }],
  },
  {
    id: 4,
    title: 'YelpCamp',
    description:
      'An extensive web app for users to share their favorite campgrounds, using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.',
    liveLink: 'https://findacoach-ebc23.web.app/coaches',
    githubLink: 'https://github.com/JosephGalante/FindACoach',
    repoName: 'YelpCamp',
    skills: [{ label: 'JavaScript', color: '#F7DF1E' }],
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'Developed a portfolio website using Vue.js and Vuetify hosted on Vercel that showcases my projects and skills.',
    liveLink: 'https://vercel.com/josephgalante/website',
    githubLink: 'https://github.com/JosephGalante/website',
    repoName: 'Portfolio',
    skills: [{ label: 'Vue.js', color: '#4FC08D' }],
  },
  {
    id: 6,
    title: 'Wordle',
    description:
      "As a daily Wordle player, I created a Wordle clone so that I could play every day without having to wait for the next day's puzzle.",
    liveLink: 'https://findacoach-ebc23.web.app/coaches',
    githubLink: 'https://github.com/JosephGalante/wordle',
    repoName: 'Wordle',
    skills: [{ label: 'Vue.js', color: '#4FC08D' }],
  },
]

export const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/JosephGalante',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jegalante',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:jegalante@gmail.com?Subject=Hey%20Joe!',
    icon: 'mail',
  },
  {
    label: 'CodePen',
    href: 'https://www.codepen.io/joegalante',
    icon: 'codepen',
  },
] as const
