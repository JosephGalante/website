export interface NavLink {
  label: string
  href: string
}

export interface Social extends NavLink {
  icon: 'github' | 'linkedin' | 'mail'
}

export type Project = {
  id: number
  title: string
  description: string
  liveLink?: string
  githubLink: string
  detailPath?: string
  skills: Array<{
    label: string
    color: string
  }>
}

export type ProjectCaseStudySection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type ProjectCaseStudy = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  detailPath: string
  liveLink?: string
  githubLink: string
  stack: Array<{
    label: string
    color: string
  }>
  highlights: Array<{
    label: string
    value: string
  }>
  sections: ProjectCaseStudySection[]
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
    detailPath: '/projects/portfolio-analytics',
    skills: [
      {label: 'Next.js', color: '#ffffff'},
      {label: 'FastAPI', color: '#009688'},
    ],
  },
  {
    id: 2,
    title: 'Distributed Rate Limiter',
    description:
      'A Go-based distributed rate limiting service with Redis token buckets, Postgres-backed policy config, deterministic precedence rules, and a thin React UI for simulation and bucket inspection.',
    liveLink: 'https://distributed-rate-limiter-web.onrender.com',
    githubLink: 'https://github.com/JosephGalante/rate_limiter',
    detailPath: '/projects/distributed-rate-limiter',
    skills: [
      {label: 'Go', color: '#00ADD8'},
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

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: 'portfolio-analytics',
    title: 'Portfolio Analytics',
    eyebrow: 'Event-Driven Full-Stack Case Study',
    summary:
      'I built this project to demonstrate backend-heavy full-stack thinking: event transport in Redis, selective recomputation in a worker, durable history in Postgres, and a dashboard that blends REST bootstrap with websocket updates.',
    detailPath: '/projects/portfolio-analytics',
    liveLink: 'https://galante-portfolio-analytics-project.vercel.app/',
    githubLink: 'https://github.com/JosephGalante/portfolio_analytics.git',
    stack: [
      {label: 'FastAPI', color: '#009688'},
      {label: 'Python', color: '#306998'},
      {label: 'Next.js', color: '#ffffff'},
      {label: 'TypeScript', color: '#3178C6'},
      {label: 'Redis Streams', color: '#DC382D'},
      {label: 'PostgreSQL', color: '#0064a5'},
      {label: 'WebSockets', color: '#8EC5FC'},
      {label: 'Docker', color: '#2496ED'},
    ],
    highlights: [
      {
        label: 'Core idea',
        value: 'Realtime portfolio valuation with selective recompute',
      },
      {
        label: 'Shared infra',
        value: 'Redis for stream transport, cache, and websocket fanout',
      },
      {
        label: 'Deploy tradeoff',
        value: 'Embedded workers on free Render to keep the demo live',
      },
    ],
    sections: [
      {
        title: 'Why I Built It',
        paragraphs: [
          'I wanted a portfolio project that looked and felt like a real product, not just a CRUD app with charts. The interesting part is not rendering numbers, it is managing price movement, cache invalidation, worker recomputation, and the interface between a durable source of truth and a fast changing read model.',
          'The result is intentionally opinionated: the UI stays thin, while the backend carries the system-design story through streaming events, historical snapshots, and websocket-driven updates.',
        ],
      },
      {
        title: 'Architecture That Matters',
        paragraphs: [
          'The API owns portfolio and holding mutations. Whenever holdings change, it emits an immediate Redis Stream event so the worker can recalculate only the affected portfolios rather than sweeping the entire dataset.',
          'The worker persists price events, refreshes Redis valuation caches, inserts snapshots in Postgres, and publishes live updates through Redis Pub/Sub for websocket subscribers.',
        ],
        bullets: [
          'Postgres is the durable system of record for users, portfolios, holdings, price events, and snapshots.',
          'Redis carries hot data: stream events, cached latest prices, cached portfolio valuations, and websocket fanout.',
          'The frontend loads initial state over REST and then switches to websocket updates for live valuation changes.',
        ],
      },
      {
        title: 'Tradeoffs I Would Call Out In An Interview',
        paragraphs: [
          'For the public demo, I intentionally support an embedded-worker deployment mode so the whole system can run on free infrastructure. That is not the ideal production shape, but it is a pragmatic way to preserve the event-driven architecture without requiring paid worker instances.',
          'Finnhub polling is another deliberate compromise. It is enough to demonstrate quote ingestion, cache warming, and downstream recomputation, but a production market-data system would move to a licensed streaming provider with stronger guarantees.',
        ],
      },
    ],
  },
  {
    slug: 'distributed-rate-limiter',
    title: 'Distributed Rate Limiter',
    eyebrow: 'Distributed Systems / Middleware Case Study',
    summary:
      'This project is designed to prove backend and distributed-systems thinking: deterministic policy resolution in Postgres, shared token bucket state in Redis, optimistic locking without Lua, and a thin UI used purely to demonstrate the backend behavior.',
    detailPath: '/projects/distributed-rate-limiter',
    liveLink: 'https://distributed-rate-limiter-web.onrender.com',
    githubLink: 'https://github.com/JosephGalante/rate_limiter',
    stack: [
      {label: 'Go', color: '#00ADD8'},
      {label: 'Redis', color: '#DC382D'},
      {label: 'PostgreSQL', color: '#0064a5'},
      {label: 'React', color: '#61DBFB'},
      {label: 'Docker Compose', color: '#2496ED'},
      {label: 'Render', color: '#4351E8'},
    ],
    highlights: [
      {
        label: 'Primary algorithm',
        value: 'Token bucket with weighted route costs',
      },
      {
        label: 'Concurrency model',
        value: 'Redis WATCH / MULTI / EXEC optimistic locking',
      },
      {
        label: 'Config split',
        value: 'Postgres for policies, Redis for hot bucket state',
      },
    ],
    sections: [
      {
        title: 'What I Wanted To Prove',
        paragraphs: [
          'I wanted a portfolio project that could hold up in systems-design interviews. The point was not to build a giant API gateway, it was to show a realistic separation between durable policy configuration and shared hot-path state, and to make the tradeoffs explainable.',
          'That led to a service with explicit policy scopes, deterministic precedence, weighted request costs, and middleware enforcement that behaves like the edge of a real platform service.',
        ],
      },
      {
        title: 'Architecture And Runtime Path',
        paragraphs: [
          'Postgres stores API keys, policy config, and audit logs. Redis stores projected active policies, API key auth cache, token buckets, and summary counters. Protected requests resolve the effective policy from Redis, then mutate the selected bucket with bounded optimistic retries.',
          'I deliberately avoided Lua in v1 so the concurrency story stayed visible in Go. That makes the implementation easier to reason about in an interview, even though it adds more round trips than server-side scripting would.',
        ],
        bullets: [
          'Policy precedence is fixed: api_key_route, then api_key, then route, then global.',
          'Bucket state is keyed by scope and route so multiple API instances share the same limit state.',
          'The React UI exists to simulate traffic, inspect bucket state, and expose the backend behavior clearly.',
        ],
      },
      {
        title: 'Pragmatic Tradeoffs',
        paragraphs: [
          'For a public demo, I ship a read-only public mode so reviewers can exercise the system without mutating the admin configuration. That keeps the demo deterministic while still exposing the policy model and bucket inspector.',
          'If I were taking this further, the next technical step would be server-side atomic scripting for higher contention and multi-instance proofing with side-by-side API replicas sharing the same Redis buckets.',
        ],
      },
    ],
  },
]

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug)
}

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
]
