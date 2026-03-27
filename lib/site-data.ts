export interface NavLink {
  label: string
  href: string
}

export interface Social extends NavLink {
  icon: 'github' | 'linkedin' | 'mail' | 'codepen'
}

export type Project = {
  id: number
  title: string
  description: string
  liveLink?: string
  githubLink: string
  skills: Array<{
    label: string
    color: string
  }>
}

export type Job = {
  id: string
  title: string
  companyName: string
  start: {
    month: number
    year: number
  }
  end?: {
    month: number
    year: number
  }
  companySite: string
  stack: string
  tasks: string[]
}

export const navLinks: NavLink[] = [
  {label: 'About', href: '#about'},
  {label: 'Experience', href: '#experience'},
  {label: 'Projects', href: '#projects'},
  {label: 'Contact', href: '#contact'},
]

export const techStack = [
  'React.js',
  'Python',
  'Django',
  'Next.js',
  'Golang',
  'Vue.js',
  'JavaScript',
  'TypeScript',
  'Java',
  'SQL',
  'Node.js',
  'Docker',
]

export const jobs: Job[] = [
  {
    id: 'canopy',
    title: 'Software Engineer',
    companyName: 'Canopy Capital',
    start: {
      month: 10,
      year: 2023,
    },
    companySite: 'https://canopycapital.com/',
    stack: 'Python, React, Next.js, Django, TypeScript, Docker, GCP',
    tasks: [
      'Own end-to-end architecture and delivery of core financial workflows across Django APIs and Next.js clients, supporting platform growth from launch to 250+ daily active users and over $1B in managed assets.',
      'Led system design and rollout of a centralized RBAC and object-level authorization platform governing firm, advisor, and portfolio access across critical trading and portfolio management paths, replacing fragmented legacy permission logic and improving security, maintainability, and auditability.',
      'Architected Redis-backed caching strategies for high-traffic portfolio analytics endpoints, reducing average response latency by roughly 30% and stabilizing performance under peak usage.',
      'Designed asynchronous event-driven notification pipelines using Google Cloud Tasks to decouple trade execution from user alert delivery, improving reliability and request throughput for time-sensitive portfolio update flows.',
      'Own evolution of core financial data models and migration strategy, executing backward-compatible schema changes and data transformations with zero production incidents attributable to database migrations.',
      'Built an internal administrative platform from scratch, enabling real-time visibility into advisor trading activity, portfolio performance, and firm-level AUM growth, improving operational efficiency for internal stakeholders.',
      'Containerized and routed backend services using Docker and Traefik, integrating fixed-income trading pipelines into centralized internal tooling and accelerating bond analysis and execution workflows.',
      'Optimized API performance and reduced payload sizes across portfolio and trading endpoints, improving dashboard responsiveness and overall system scalability.',
    ],
  },
  {
    id: 'ecr',
    title: 'Software Engineer',
    companyName: 'Edge Case Research',
    start: {
      month: 5,
      year: 2022,
    },
    end: {
      month: 8,
      year: 2023,
    },
    companySite: 'https://www.ecr.ai/',
    stack: 'Vue.js, Golang, Python, PostgreSQL, Docker, Kubernetes',
    tasks: [
      'Built backend services and data processing features in Golang and Python for an autonomous vehicle safety platform, supporting ingestion and analysis of vehicle telemetry data used in production environments.',
      'Designed and implemented data workflows and API integrations supporting vehicle telemetry and safety analysis use cases, improving reliability and usability of core platform features.',
      'Owned full lifecycle delivery of multiple features from technical design through deployment, including testing, debugging production issues, and coordinating releases with cross-functional teams.',
      'Collaborated closely with product managers, designers, and users to translate real-world safety requirements into scalable technical solutions, ensuring alignment between engineering execution and customer needs.',
      'Mentored an engineering intern on code quality, debugging strategies, and system architecture concepts, accelerating onboarding and delivery impact.',
      'Worked within containerized environments and early Kubernetes-based deployments, gaining exposure to distributed system operations and service orchestration patterns.',
    ],
  },
  {
    id: 'mma',
    title: 'Data Analyst',
    companyName: 'Marsh & McLennan Agency',
    start: {
      month: 5,
      year: 2021,
    },
    end: {
      month: 7,
      year: 2021,
    },
    companySite: 'https://www.marshmclennan.com/',
    stack: 'SQL, Power BI, Salesforce',
    tasks: [
      'Manipulated data in SQL to develop benchmarking dashboards for use in client sales meetings.',
      'Developed industry benchmarking Power BI dashboards for use in sales pitches to potential clients and presented dashboards to upper management.',
      'Aggregated data in the Salesforce CRM database for 8 major clients to streamline marketing strategies for sales teams.',
    ],
  },
  {
    id: 'pip',
    title: 'Online Trainer',
    companyName: 'Partner in Publishing',
    start: {
      month: 5,
      year: 2020,
    },
    end: {
      month: 8,
      year: 2020,
    },
    companySite: 'https://www.partnerinpublishing.com/',
    stack: 'Canvas, Excel Macros, Training',
    tasks: [
      'Individually trained more than 250 undergraduate professors to use learning management systems such as Canvas.',
      'Ranked among the top 3 of 25 trainers in customer satisfaction surveys for three consecutive months.',
      'Wrote Microsoft Excel Macro applications to improve team productivity in automated reporting.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Analytics',
    description:
      'A real-time portfolio analytics platform with live valuation updates, holdings management, and an event-driven backend using FastAPI, Redis, PostgreSQL, and Next.js.',
    liveLink: 'https://galante-portfolio-analytics-project.vercel.app/',
    githubLink: 'https://github.com/JosephGalante/portfolio_analytics.git',
    skills: [
      {label: 'Next.js', color: '#ffffff'},
      {label: 'FastAPI', color: '#009688'},
      {label: 'Redis', color: '#DC382D'},
    ],
  },
  {
    id: 2,
    title: 'Distributed Rate Limiter',
    description:
      'A Go-based distributed rate limiting service with Redis token buckets, Postgres-backed policy config, deterministic precedence rules, and a thin React UI for simulation and bucket inspection.',
    liveLink: 'https://distributed-rate-limiter-web.onrender.com',
    githubLink: 'https://github.com/JosephGalante/rate_limiter',
    skills: [
      {label: 'Go', color: '#00ADD8'},
      {label: 'Redis', color: '#DC382D'},
      {label: 'TypeScript', color: '#3178C6'},
    ],
  },
  {
    id: 3,
    title: 'Pathfinder Visualizer',
    description:
      'A web app that visualizes several different pathfinding algorithms demonstrating how each algorithm finds the shortest path in a graph.',
    liveLink: 'https://pathfinder-neon.vercel.app',
    githubLink: 'https://github.com/JosephGalante/pathfinder',
    skills: [{label: 'Vue.js', color: '#4FC08D'}],
  },
  {
    id: 4,
    title: 'Find-A-Coach',
    description:
      'A web app with 2-factor authentication that allows users to find coaches based on their location and skill, using Vue.js and Vuex, and is currently hosted on Firebase.',
    liveLink: 'https://findacoach-ebc23.web.app/coaches',
    githubLink: 'https://github.com/JosephGalante/FindACoach',
    skills: [{label: 'Vue.js', color: '#4FC08D'}],
  },
  {
    id: 5,
    title: 'React Chat App',
    description:
      'Created a fully functional chat application using React.js, with a live-chat feature, user authentication, and a back-end to store messages.',
    liveLink: 'https://incredible-crisp-4050e0.netlify.app/',
    githubLink: 'https://github.com/JosephGalante/ChatApp',
    skills: [{label: 'React', color: '#61DBFB'}],
  },
  {
    id: 6,
    title: 'YelpCamp',
    description:
      'An extensive web app for users to share their favorite campgrounds, using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.',
    githubLink: 'https://github.com/JosephGalante/YelpCamp',
    skills: [{label: 'JavaScript', color: '#F7DF1E'}],
  },
]

export const socials: Social[] = [
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
]
