import type { Messages } from "./types";

export const en: Messages = {
  nav: {
    about: "About",
    skills: "Skills",
    impact: "Impact",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  common: {
    contact: "Contact",
    downloadResume: "Download resume",
    linkedin: "LinkedIn",
    scroll: "Scroll",
    outcomes: "Outcomes",
    education: "Education",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    language: "Language",
    viewDetails: "View details",
    close: "Close",
    problem: "Problem",
    challenge: "Challenge",
    solution: "Solution",
    role: "Role",
    architecture: "Architecture",
    stack: "Tech stack",
  },
  site: {
    role: "Senior Full Stack Developer",
    headline: "Scalable systems. Clean architecture. High-impact delivery.",
    subheadline:
      "20+ years building cloud-native web platforms with React, Next.js, Vue, Node, Python, and PHP — from REST APIs and microservices to AWS, Docker, and CI/CD.",
    positioning:
      "I modernize legacy systems and ship enterprise-grade applications that scale — with strong architecture, API design, and performance at the core.",
    location: "Buenos Aires, Argentina",
    remoteTag: "Buenos Aires → the world · Remote",
  },
  highlights: [
    "20+ years experience",
    "Cloud-native on AWS",
    "API & microservices",
    "Legacy modernization",
    "Performance at scale",
  ],
  hero: {
    viewProjects: "View projects",
  },
  about: {
    eyebrow: "About",
    title: "Engineering platforms that outlast the sprint",
    lead: "Senior Full Stack Developer who turns complex platforms into fast, maintainable systems teams can own.",
    paragraphs: [
      "With two decades across React, Next.js, Vue, Node.js, Python, and PHP, I design REST APIs and microservices with NestJS, Express, Django, FastAPI, Flask, and Laravel — then ship them as cloud-native solutions on AWS with Docker, Kubernetes, and CI/CD.",
      "My strength is the full stack of delivery: system architecture, database design, API integrations, performance optimization, and Agile execution. I have a proven track record modernizing legacy systems and delivering high-impact enterprise applications.",
      "Whether you need a senior engineer for a multi-tenant SaaS, ecommerce performance overhaul, or observability across hundreds of endpoints — I build for clarity, speed, and long-term ownership.",
    ],
    basedIn: "Based in {location}. Open to senior remote roles worldwide.",
    focus: [
      {
        icon: "platforms",
        label: "System architecture",
        detail: "Scalable services, clear boundaries, and maintainable codebases",
      },
      {
        icon: "api",
        label: "APIs & microservices",
        detail: "NestJS, Express, Django, FastAPI, Laravel — documented and observable",
      },
      {
        icon: "cloud",
        label: "Cloud & DevOps",
        detail: "AWS, Docker, Kubernetes, CI/CD pipelines that ship reliably",
      },
      {
        icon: "speed",
        label: "Performance",
        detail: "From 16s interactions to under one — measured, optimized, sustained",
      },
    ],
  },
  skills: {
    eyebrow: "Skill Set",
    title: "A stack built for scale",
    description:
      "Languages, frameworks, cloud, and testing tools I use to ship reliable enterprise software.",
    categories: {
      languages: {
        title: "Languages",
        description: "Strong foundations across the stack.",
      },
      frontend: {
        title: "Frontend",
        description: "Modern UI platforms and ecommerce storefronts.",
      },
      backend: {
        title: "Backend",
        description: "APIs and services built for real production load.",
      },
      cloud: {
        title: "Cloud & DevOps",
        description: "Infrastructure that deploys and observes itself.",
      },
      databases: {
        title: "Databases",
        description: "Design, ORM, and performance across engines.",
      },
      testing: {
        title: "Testing",
        description: "Unit, integration, and end-to-end confidence.",
      },
    },
  },
  impact: {
    eyebrow: "Impact",
    title: "Results that surprise stakeholders",
    description:
      "Measurable outcomes from ecommerce overhauls, API platforms, and SaaS modernization.",
    stats: [
      { value: "20+", label: "Years shipping production software" },
      { value: "1,200+", label: "API endpoints documented with OpenAPI" },
      { value: "16s → <1s", label: "Shopify interaction time optimized" },
      { value: "24s → 1s", label: "Homepage video load time reduced" },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected delivery highlights",
    description:
      "Platform migrations, performance rebuilds, and marketplace systems shipped for US and global teams.",
    items: {
      exomindset: {
        name: "API Platform & Observability",
        summary:
          "Migrated SilverStripe apps to Gatsby, standardized OpenAPI across Laravel and Django, and rolled out OpenTelemetry for faster production troubleshooting.",
        role: "Senior Full Stack Developer",
        period: "Aug 2025 – Jun 2026 · Remote",
        problem:
          "Legacy SilverStripe applications and fragmented API docs were slowing product delivery and increasing maintenance cost across multiple environments.",
        challenge:
          "Modernize the frontend stack, unify API contracts across Laravel and Django services, and give teams production observability without disrupting live traffic.",
        solution:
          "Led migration of SilverStripe apps into Gatsby microsites, introduced Decap CMS for self-service publishing, documented 1,200+ endpoints with OpenAPI, and implemented OpenTelemetry for centralized troubleshooting.",
        architecture: [
          "Gatsby frontend microsites",
          "Laravel & Django REST services",
          "Decap CMS content layer",
          "OpenAPI contract standard",
          "OpenTelemetry observability",
          "Dockerized deployments",
        ],
        impact: [
          "1,200+ API endpoints documented",
          "Reduced publishing effort with Decap CMS",
          "Centralized observability cut troubleshooting time",
        ],
      },
      "command-link": {
        name: "Multi-Tenant SaaS Modernization",
        summary:
          "Modernized a multi-tenant SaaS platform, bridging React to legacy systems and optimizing Azure SQL for enterprise workloads.",
        role: "Senior Full Stack Developer",
        period: "May 2024 – May 2025 · Remote",
        problem:
          "A multi-tenant SaaS platform was constrained by legacy backend coupling, slow SQL workloads, and risky migration paths for React clients.",
        challenge:
          "Improve scalability and response times while connecting modern React apps to legacy systems with zero deployment disruption.",
        solution:
          "Built reusable application architecture, Laravel async microservice communication, React–legacy bridges, and Azure SQL performance tuning for complex enterprise queries.",
        architecture: [
          "React + TypeScript clients",
          "Laravel microservice services",
          "Yii legacy integration layer",
          "Azure SQL optimization",
          "Docker deployment pipeline",
        ],
        impact: [
          "Improved scalability and backend response times",
          "Zero disruption during platform migration",
          "Reusable architecture across engineering teams",
        ],
      },
      globant: {
        name: "Shopify Performance Overhaul",
        summary:
          "Rebuilt ecommerce performance on Shopify — crushing interaction and video load times while shipping reusable SDK components.",
        role: "Senior Full Stack Developer",
        period: "Mar 2023 – May 2024 · Remote",
        problem:
          "Storefront interactions took up to 16 seconds and homepage video loads reached 24 seconds, damaging conversion and brand experience.",
        challenge:
          "Deliver dramatic performance gains on Shopify Liquid storefronts while migrating legacy PHP modules into React without downtime.",
        solution:
          "Optimized Liquid/JS themes, caching, and media loading; built reusable SDK components for partner sites; migrated Laravel/CodeIgniter modules to React; improved AWS RDS sync reliability.",
        architecture: [
          "Shopify + Liquid storefront",
          "React SDK components",
          "AWS RDS synchronization",
          "Caching & responsive UI",
          "Dockerized delivery",
        ],
        impact: [
          "Interaction time: 16s → under 1s",
          "Video load: 24s → 1s",
          "Higher Lighthouse scores via caching and responsive UI",
        ],
      },
      mahisoft: {
        name: "Real Estate Marketplace Platform",
        summary:
          "Built NestJS/Node APIs and a React frontend from scratch for a high-growth real estate marketplace, containerized for consistent deploys.",
        role: "Senior Full Stack Developer",
        period: "Nov 2021 – Jan 2023 · Remote",
        problem:
          "A rapidly growing real estate marketplace needed a scalable API and frontend foundation to ship features without environment drift.",
        challenge:
          "Stand up NestJS/Node services and a React UI from scratch while keeping sprint velocity high and defects low.",
        solution:
          "Designed NestJS/Express APIs, built a reusable React component system in TypeScript, and containerized workflows so local, staging, and production stayed aligned.",
        architecture: [
          "NestJS + Express APIs",
          "React + TypeScript UI",
          "Reusable component library",
          "Docker development environments",
          "Agile sprint delivery",
        ],
        impact: [
          "Accelerated feature delivery with reusable UI",
          "Fewer runtime defects via TypeScript",
          "Consistent environments through containerization",
        ],
      },
      willdom: {
        name: "Legacy Laravel Stabilization",
        summary:
          "Stabilized a legacy Laravel platform during modernization, fixed critical Vue production errors, and improved booking accuracy across reservation providers.",
        role: "Senior Full Stack Developer",
        period: "Mar 2021 – Nov 2021 · Remote",
        problem:
          "A legacy Laravel platform was unstable during modernization, with Vue production errors and unreliable provider booking sync.",
        challenge:
          "Keep operations uninterrupted while fixing frontend defects, optimizing backend performance, and hardening CRM/ERP integrations.",
        solution:
          "Stabilized Laravel services, rebuilt failing Vue components, improved DB/app response times, and strengthened Zoho CRM plus reservation provider synchronization.",
        architecture: [
          "Laravel core platform",
          "Vue.js frontend modules",
          "MySQL + MongoDB data layer",
          "Zoho CRM synchronization",
          "Provider booking services",
        ],
        impact: [
          "Uninterrupted operations during large-scale modernization",
          "Improved booking accuracy across platforms",
          "More reliable Zoho CRM customer data sync",
        ],
      },
      wortise: {
        name: "Advertising Platform Scale-Up",
        summary:
          "Led full-stack development for an advertising platform — APIs, automation tooling, Ad Server reliability, and mentoring across the engineering team.",
        role: "Lead Software Developer",
        period: "May 2018 – Jan 2021 · Remote",
        problem:
          "An advertising platform needed stronger scalability, automation, and reliability as product demand and distributed environments grew.",
        challenge:
          "Lead full-stack delivery across Node, Vue, and PHP while mentoring engineers and hardening Ad Server infrastructure.",
        solution:
          "Directed architecture and delivery of Laravel APIs, PHP automation, Ad Server improvements, analytics optimization, and microservices reliability practices.",
        architecture: [
          "Node.js + Vue.js product layer",
          "Laravel internal APIs",
          "PHP automation tooling",
          "Ad Server infrastructure",
          "MongoDB + PostgreSQL + MySQL",
        ],
        impact: [
          "Improved scalability across distributed environments",
          "Reduced operational overhead with automation tools",
          "Stronger code quality through mentoring practices",
        ],
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Career timeline",
    description:
      "Two decades of senior delivery across SaaS, ecommerce, advertising, and marketplace platforms.",
    jobs: [
      {
        title: "Senior Full Stack Developer",
        place: "Florida, USA · Remote",
        points: [
          "Migrated SilverStripe applications into Gatsby, reducing maintenance effort and improving frontend performance.",
          "Built Gatsby microsites and Laravel services, accelerating deployments across multiple production environments.",
          "Developed and maintained Django REST APIs supporting internal workflows and third-party integrations.",
          "Implemented Decap CMS for self-service editorial publishing; documented 1,200+ API endpoints with OpenAPI.",
          "Implemented OpenTelemetry, reducing production troubleshooting time through centralized observability.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        place: "Washington, USA · Remote",
        points: [
          "Modernized a multi-tenant SaaS platform, improving scalability and reducing backend response times.",
          "Connected React applications with legacy systems without deployment disruptions during migration.",
          "Developed Laravel services for asynchronous communication across distributed microservices.",
          "Optimized Azure SQL performance for complex enterprise query workloads.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        place: "California, USA · Remote",
        points: [
          "Optimized Shopify storefront performance, reducing interaction time from 16 seconds to under one.",
          "Improved homepage video loading from 24 seconds to one second.",
          "Built reusable SDK components accelerating integrations across external business websites.",
          "Migrated Laravel and CodeIgniter modules into React without disrupting production.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        place: "California, USA · Remote",
        points: [
          "Developed scalable NestJS and Node.js APIs for a high-growth real estate marketplace.",
          "Built the React frontend from scratch with reusable UI components.",
          "Leveraged TypeScript to reduce runtime defects and improve long-term maintainability.",
          "Containerized development workflows, reducing deployment inconsistencies.",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        place: "Florida, USA · Remote",
        points: [
          "Stabilized a legacy Laravel platform during large-scale modernization.",
          "Built provider synchronization services improving booking accuracy across reservation platforms.",
          "Fixed Vue components causing production errors; optimized backend response times.",
          "Enhanced Zoho CRM synchronization for customer data consistency.",
        ],
      },
      {
        title: "Lead Software Developer",
        place: "Buenos Aires, Argentina · Remote",
        points: [
          "Led full-stack development, improving advertising platform scalability across distributed environments.",
          "Built lightweight Laravel APIs and PHP automation tools reducing operational overhead.",
          "Enhanced Ad Server infrastructure and microservices reliability during continuous expansion.",
          "Mentored engineers, strengthening code quality and collaborative practices.",
        ],
      },
    ],
    educationDegree: "Bachelor of Science, Computer Science",
    educationSchool: "National Technological University (UTN)",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next build",
    description:
      "Pick the channel that fits you — or leave a short note and I'll reply by email. Based in {location}, open to remote worldwide.",
    channels: {
      email: { label: "Email", hint: "Best for detailed project briefs" },
      phone: { label: "Phone", hint: "Quick calls across time zones" },
      linkedin: { label: "LinkedIn", hint: "Connect or send a message" },
      resume: {
        label: "Resume",
        value: "Download PDF",
        hint: "Full experience & skills",
      },
    },
    formTitle: "Send a quick message",
    formHint: "Opens your email app with everything filled in — no account needed.",
    nameLabel: "Your name",
    namePlaceholder: "Alex Rivera",
    emailLabel: "Your email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder:
      "What are you building? Timeline, stack, or role — whatever helps.",
    formAside: "Prefer a direct ping? Use email or LinkedIn on the left.",
    submit: "Open in email",
    subjectFallback: "Hello Matias",
    subjectFrom: "Hello from {name}",
    noMessage: "(No message yet)",
  },
  footer: {
    crafted: "Designed & engineered by",
  },
  loader: {
    boot: "Portfolio boot sequence",
    lines: [
      "Initializing architecture…",
      "Hydrating cloud services…",
      "Syncing API gateways…",
      "Igniting frontend…",
    ],
    tagline: "Ignite · Build · Scale",
  },
};
